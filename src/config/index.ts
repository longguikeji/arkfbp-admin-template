import { cloneDeep } from 'lodash'

export class Config {
  private _current
  private _viewconfig
  private _serveconfig
  private _config

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
    const meta = this._serveconfig[this._current].meta
    const api = this._serveconfig[this._current].api
    const tempMeta: any = {}
    const tempApi: any = {}
    const a = this._viewconfig
    debugger
    const walkMeta = (data: any, map: any) => {
      Object.keys(data).forEach((e: any) => {
        const type = data[e].type

        if (type.object) {
          Object.keys(type.object).forEach(k => {
            const value = type.object[k]
            if (value.includes('.')) {
              map[e] = {}
              walkMeta(this._serveconfig[value.split('.')[0]].meta, map[e])
            } else {
              walkMeta(data[value].meta, map[e])
            }
          })
        } else {
          map[e] = {
            label: data[e].title,
            state: {
              value: '',
              ...(Object.values(data[e].type)[0] as Object)
            }
          }
        }
      })
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

    walkMeta(meta, tempMeta)
    walkApi(api, tempApi)
    debugger
    const config = cloneDeep(this._viewconfig)

    if (this._viewconfig.dialogs) {
      if (this._viewconfig.dialogs.create) {
        config.dialogs.create.items = this._viewconfig.dialogs.create.items.map((e: any) => {
          return { ...e, ...tempMeta[e.prop] }
        })
      }
      if (this._viewconfig.dialogs.update) {
        config.dialogs.update.items = this._viewconfig.dialogs.update.items.map((e: any) => {
          return { ...e, ...tempMeta[e.prop] }
        })
      }
    }

    if (this._viewconfig.table) {
      config.table.columns = this._viewconfig.table.columns.map((e: any) => {
        return { ...e, ...tempMeta[e.prop] }
      })
    }

    if (this._viewconfig.tag) {
      config.tag = this._viewconfig.tag.map((e: any) => {
        return { ...e, ...tempMeta[e.prop] }
      })
    }

    return config
  }
}
