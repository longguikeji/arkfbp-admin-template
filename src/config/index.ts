export class Config {
  private _current: any = {}
  private _viewconfig: any = {}
  private _serveconfig: any = {}
  private _config: any = {}

  private _serveApi: any = {}
  private _serveMeta: any = {}

  constructor(viewconfig: any, serveconfig: any, current: string|undefined) {
    this._viewconfig = viewconfig
    this._serveconfig = serveconfig
    this._current = current

    this.getConfig()
  }

  get config(): any {
    return this._config
  }

  private getSrcMeta(params: any) {
    const map: any = {}
    Object.keys(params).forEach((p: any) => {
      if (typeof params[p] === 'object') {
        if (params[p].src.includes('.')) {
          const arr = params[p].src.split('.')
          const data = this._serveconfig[arr[0]].meta[arr[1]]
          map[p] = {
            label: data.title,
            state: {
              value: '',
              ...(Object.values(data.type)[0] as Object)
            }
          }
        }
      } else {
        map[p] = {
          state: {
            value: ''
          }
        }
      }
    })
    return map
  }

  private getSeverApi() {
    const api = this._serveconfig[this._current].api

    if (!api) {
      return
    }

    const walkApi = (data: any, map: any) => {
      Object.keys(data).forEach((e: any) => {
        let index: any = {}
        if (data[e].index) {
          index = this.getSrcMeta(data[e].index)
        }
        Object.keys(data[e]).forEach((k: any) => {
          if (data[e][k].type) {
            if (map[data[e][k].type]) {
              map[data[e][k].type].push({
                url: e,
                index,
                method: k.toUpperCase(),
                label: data[e][k].name,
                action: data[e][k].type,
                request: this.getSrcMeta(data[e][k].request)
              })
            } else {
              map[data[e][k].type] = []
              map[data[e][k].type].push({
                url: e,
                index,
                method: k.toUpperCase(),
                label: data[e][k].name,
                action: data[e][k].type,
                request: this.getSrcMeta(data[e][k].request)
              })
            }
          }
        })
      })
    }

    walkApi(api, this._serveApi)
  }

  private getSeverMeta() {
    const name = this._serveconfig[this._current].name
    const meta = this._serveconfig[this._current].meta

    if (!meta) {
      return
    }

    const walkMeta = (data: any, map: any) => {
      const type = data[name].type
      if (type.object) {
        Object.keys(type.object).forEach((e: any) => {
          if (type.object[e].includes('.')) {
            const arr = type.object[e].split('.')
            const value = this._serveconfig[arr[0]].meta[arr[1]]
            map[e] = {
              label: value.title || e,
              state: {
                value: '',
                ...(Object.values(value.type)[0] as Object)
              }
            }
          } else {
            const value = data[type.object[e]]
            map[e] = {
              label: value.title || e,
              state: {
                value: '',
                ...(Object.values(value.type)[0] as Object)
              }
            }
          }
        })
      }
    }

    walkMeta(meta, this._serveMeta)
  }

  private getConfig(): any {
    if (!this._viewconfig) {
      this._config = this.initConfig()
    }

    if (!this._serveconfig[this._current]) {
      this._config = this._viewconfig
      return
    }

    this.getSeverApi()
    this.getSeverMeta()

    Object.keys(this._viewconfig).map((key: string) => {
      switch (key) {
        case 'card':
          this._config[key] = this._viewconfig[key]
          break;
        case 'filter':
          this._config[key] = this._viewconfig[key]
          this._config[key].items = this._viewconfig[key].items.map((e: any) => {
            if (typeof e === 'string') {
              return { prop: e, type: 'Input', ...this._serveMeta[e] }
            } else {
              return { ...this._serveMeta[e.prop], ...e } 
            }
          })
          break;
        case 'dialogs':
          this._config[key] = this._viewconfig[key]

          Object.keys(this._viewconfig.dialogs).map((dialog: string) => {
            if(dialog === 'create' || dialog === 'update') {
              this._config.dialogs[dialog].items = this._viewconfig.dialogs[dialog].items.map((e: any) => {
                if (typeof e === 'string') {
                  return { prop: e, type: 'Input', ...this._serveApi[dialog][0].request[e] }
                } else {
                  return { ...this._serveApi[dialog][0].request[e.prop],  ...e } 
                }
              })
            } else {
              
            }
          })

          if (this._viewconfig.dialogs.create) {
            this._config.dialogs.create.items = this._viewconfig.dialogs.create.items.map((e: any) => {
              if (typeof e === 'string') {
                return { prop: e, type: 'Input', ...this._serveApi.create[0].request[e] }
              } else {
                return { ...this._serveApi.create[0].request[e.prop],  ...e } 
              }
            })
          }
    
          if (this._viewconfig.dialogs.update) {
            this._config.dialogs.update.items = this._viewconfig.dialogs.update.items.map((e: any) => {
              if (typeof e === 'string') {
                return { prop: e, type: 'Input', ...this._serveApi.update[0].request[e] }
              } else {
                return { ...this._serveApi.update[0].request[e.prop],  ...e }
              }
            })
          }
          break;
        case 'table':
          this._config[key] = this._viewconfig[key]
          if (this._viewconfig.table.columns) {
            this._config.table.columns = this._viewconfig.table.columns.map((e: any) => {
              return { label: this._serveMeta[e.prop] ? this._serveMeta[e.prop].label : '', ...e } 
            })
          }
          break;
        default:
          this._config[key] = this._viewconfig[key]
          break;
      }
    })
  }

  private initConfig(): any {
    const type = this._serveconfig[this._current].type
    const name = this._serveconfig[this._current].name

    return {
      type: `${type.slice(0,1).toUpperCase()}${type.slice(1)}Page`,
      created: {
        actions: [
          'fetch'
        ]
      },
      card: {
        title: `${name}Page`,
        buttons: this._serveApi.create.map((e:any) => {
          return {
            label: e.label,
            action: 'showCreateDialog',
            type: 'primary',
            size: 'small'
          }
        })
      },
      filter: {
        inline: true,
        size: 'mini',
        items: Object.keys(this._serveMeta).map((e: any) => {
          return { prop: e, type: 'Input', ...this._serveApi.retrieve[0].request[e] }
        })
      },
      dialogs: {
        create: {
          titles: '新建',
          items: Object.keys(this._serveApi.create[0].request).map((e: any) => {
            return { prop: e, type: 'Input', ...this._serveApi.create[0].request[e] }
          }),
          actions: [
            {
              label: '确定',
              action: 'submit',
              close: true,
              type: 'primary'
            }
          ],
          visible: false,
          attributes: {}
        },
        update: {
          titles: '编辑',
          items: Object.keys(this._serveApi.update[0].request).map((e: any) => {
            return { prop: e, type: 'Input', ...this._serveApi.update[0].request[e] }
          }),
          actions: [
            {
              label: '确定',
              action: 'submit',
              close: true,
              type: 'primary'
            }
          ],
          visible: false,
          attributes: {}
        }
      },
      pagination: {
        currentPage: 1,
        pageSize: 20,
        total: 0,
        background: '',
        action: 'fetch'
      },
      actions: {
        fetch: {
          flows: [
            {
              name: 'arkfbp.flows.fetch',
              type: 'api',
              request: {
                page: 'pagination.currentPage', 
                page_size: 'pagination.pageSize', 
              }, 
              url: this._serveApi.retrieve[0].url, 
              method: this._serveApi.retrieve[0].method,
              client_config: {
                'table.data': 'data.items',
                'pagination.total': 'data.total'
              }
            }
          ]
        },
        showCreateDialog: {
          flows: [
            {
              name: 'arkfbp.flows.assign',
              type: 'assign',
              client_config: {
                'dialogs.create.visible': true
              }
            }
          ]
        },
        showUpdateDialog: {
          flows: [
            {
              name: 'arkfbp.flows.assign',
              type: 'assign',
              client_config: {
                'dialogs.update.visible': true
              }
            },
            {
              name: 'arkfbp.flows.fetch',
              type: 'api',
              method: 'GET',
              url: 'speaker/<id>/edit/',
              client_config: {
                'dialogs.update.values': 'data'
              }
            }
          ]
        },
        submit: {
          flows: [
            {
              name: 'arkfbp.flows.update',
              type: 'api',
              method: 'POST',
              url: 'speaker/<id>/edit/',
              request: {}
            }
          ]
        },
        delete: {
          flows: [
            {
              name: 'arkfbp.flows.update',
              type: 'api',
              method: 'GET',
              url: 'speaker/<id>/delete/'
            }
          ]
        }
      }
    }
  }
}
