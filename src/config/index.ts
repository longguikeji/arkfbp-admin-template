import { cloneDeep } from 'lodash'
import tableJson from './json/table.json'

export class Config {
  private _current: any
  private _viewconfig: any
  private _serveconfig: any
  private _config: any

  constructor(viewconfig: any, serveconfig: any, current: string) {
    this._viewconfig = viewconfig
    this._serveconfig = serveconfig
    this._current = current

    this._config = this.getConfig()
  }

  get config(): any {
    return this._config
  }

  get viewconfig(): any {
    return this._viewconfig
  }

  get serveconfig(): any {
    return this._serveconfig
  }

  private getConfig(): any {
    if (!this._serveconfig[this._current]) {
      return this._viewconfig
    }
    
    const serverMeta = this._serveconfig[this._current].meta
    
    const serverApi = this._serveconfig[this._current].api
    const api: any = {}
    const meta: any = {}
   
    const walkMeta = (data: any, map: any) => {
      const name = this._serveconfig[this._current].name
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

    const walkOption = (data: any, map: any) => {
      const name = this._serveconfig[this._current].name
      const type = data[name].type
  
      if (type.object) {
        // Object.keys(type.object).forEach((e: any) => {
        //   if (type.object[e].includes('.')) {
        //     const arr = type.object[e].split('.')
        //     const value = this._serveconfig[arr[0]].meta[arr[1]]
        //     map[e] = {
        //       label: value.title || e,
        //       state: {
        //         value: '',
        //         option: this._serveconfig[arr[0]].meta[arr[1]].option,
        //         ...(Object.values(value.type)[0] as Object)
        //       }
        //     }
        //   } else {
        //     const value = data[type.object[e]]
        //     map[e] = {
        //       label: value.title || e,
        //       state: {
        //         value: '',
        //         option: value.option,
        //         ...(Object.values(value.type)[0] as Object)
        //       }
        //     }
        //   }
        // })
      }
    }

    const walkApi = (data: any, map: any) => {
      Object.keys(data).forEach((e: any) => {
        let index: any = {}
        if (data[e].index) {
          index = getSrcMeta(data[e].index)
        }
        Object.keys(data[e]).forEach((k: any) => {
          if (data[e][k].type) {
            if (map[data[e][k].type]) {
              map[data[e][k].type].push({
                url: e,
                index,
                label: data[e][k].name,
                action: data[e][k].type,
                request: getSrcMeta(data[e][k].request)
              })
            } else {
              map[data[e][k].type] = []
              map[data[e][k].type].push({
                url: e,
                index,
                label: data[e][k].name,
                action: data[e][k].type,
                request: getSrcMeta(data[e][k].request)
              })
            }
          }
        })
      })
    }

    const getSrcMeta = (params: any) => {
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

    walkMeta(serverMeta, meta)
    walkApi(serverApi, api)

    const config: any = {}

    if (!this._viewconfig) {
      return config
    }

    if (this._viewconfig.type) {
      config.type = this._viewconfig.type
    } else {
      config.type = 'table'
    }

    if (this._viewconfig.title) {
      config.title = this._viewconfig.title
    } else {
      config.title = 'tablePage'
    }


    if (this._viewconfig.buttons) {
      config.buttons = this._viewconfig.buttons
    } else {
      config.buttons = api.create.map((e:any) => {
        return {
          label: e.label,
          action: 'showCreateDialog',
          type: 'primary',
          size: 'small'
        }
      })
    }

    if (this._viewconfig.filter) {
      config.filter = this._viewconfig.filter
      if (this._viewconfig.filter.items) {
        config.filter.items = this._viewconfig.filter.items.map((e: any) => {
          if (typeof e === 'string') {
            return { prop: e, type: 'Input', ...meta[e] }
          } else {
            return { ...meta[e.prop], ...e } 
          }
        })
      }
    } else {
      config.filter = {
        inline: true,
        size: 'mini',
        items: Object.keys(meta).map((e: any) => {
          return { prop: e, type: 'Input', ...api.retrieve[0].request[e] }
        })
      }
    }

    if (this._viewconfig.dialogs) {
      config.dialogs = this._viewconfig.dialogs
      if (this._viewconfig.dialogs.create) {
        config.dialogs.create.items = this._viewconfig.dialogs.create.items.map((e: any) => {
          if (typeof e === 'string') {
            return { prop: e, type: 'Input', ...api.create[0].request[e] }
          } else {
            return { ...api.create[0].request[e.prop],  ...e } 
          }
        })
      }

      if (this._viewconfig.dialogs.update) {
        config.dialogs.update.items = this._viewconfig.dialogs.update.items.map((e: any) => {
          if (typeof e === 'string') {
            return { prop: e, type: 'Input', ...api.update[0].request[e] }
          } else {
            return { ...api.update[0].request[e.prop],  ...e }
          }
        })
      }
    } else {
      config.dialogs = {
        create: {
          titles: '新建',
          items: Object.keys(api.create[0].request).map((e: any) => {
            return { prop: e, type: 'Input', ...api.create[0].request[e] }
          }),
          actions: [
            {
              label: '确定',
              action: 'edit',
              close: true,
              type: 'primary'
            }
          ],
          visible: false,
          attributes: {}
        },
        update: {
          titles: '编辑',
          items: Object.keys(api.update[0].request).map((e: any) => {
            return { prop: e, type: 'Input', ...api.update[0].request[e] }
          }),
          actions: [
            {
              label: '确定',
              action: 'edit',
              close: true,
              type: 'primary'
            }
          ],
          visible: false,
          attributes: {}
        }
      }
    }

    if (this._viewconfig.table) {
      config.table = this._viewconfig.table
      if (this._viewconfig.table.columns) {
        config.table.columns = this._viewconfig.table.columns.map((e: any) => {
          if (typeof e === 'string') {
            return {prop: e,  type: 'Input', ...meta[e]}
          } else {
            return { lable: meta[e.prop] ? meta[e.prop].lable : '', ...e } 
          }
        })
      }
    } else {
      config.table = {
        columns: [
          ...Object.keys(meta).map((e: any) => {
            return { props: e }
          }),
          {
            type: 'action', 
            width: 250, 
            title: '操作', 
            actions: [
              {
                'label': '编辑', 
                'type': 'primary', 
                'action': 'showUpdateDialog'
              }, 
              {
                'label': '删除', 
                'type': 'danger', 
                'action': 'deleteItem'
              }
            ]
          }
        ],
        data: []
      }
    }

    if (this._viewconfig.pagination) {
      config.pagination = this._viewconfig.pagination
    } else {
      config.pagination = {
        currentPage: 1,
        pageSize: 20,
        total: 0,
        background: '',
        action: 'retrieve'
      }
    }

    if (this._viewconfig.created) {
      config.created = this._viewconfig.created
    } else {
      config.created = {
        actions: [
          'retrieve'
        ]
      }
    }
    
    if(this._viewconfig.actions) {
      config.actions = this._viewconfig.actions
    } else {
      config.actions = {
        meta: {
          flows: [
            {
              name: 'retrieve',
              type: 'api',
              url: 'category/drop/', 
              method: 'GET',
              client_config: {
                'dialogs.create.speechcategory.options': 'data.items'
              }
            }
          ]
        },
        retrieve: {
          flows: [
            {
              name: 'retrieve',
              type: 'api',
              request: {
                page: 'pagination.currentPage', 
                page_size: 'pagination.pageSize', 
              }, 
              url: 'speaker/', 
              method: 'GET',
              client_config: {
                'table.data': 'data.items', 
                'pagination.total': 'data.total', 
              }
            }
          ]
        }, 
        showCreateDialog: {
          flows: [
            {
              name: 'assign',
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
              name: 'assign',
              type: 'assign',
              client_config: {
                'dialogs.update.visible': true
              }
            },
            {
              name: 'retrieve',
              type: 'api',
              method: 'GET',
              url: 'speaker/<id>/edit/',
              client_config: {
                'dialogs.update.values': 'data',
              }
            }
          ]
        },
        edit: {
          flows: [
            {
              name: 'update',
              type: 'api',
              method: 'POST',
              url: 'speaker/<id>/edit/',
              request: {}
            }
          ]
        },
        delete: {
          'flows': [
            {
              name: 'update',
              type: 'api',
              method: 'GET',
              url: 'speaker/<id>/delete/'
            }
          ]
        }
      }
    }

    return config
  }
}