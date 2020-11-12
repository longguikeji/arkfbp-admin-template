import { cloneDeep } from 'lodash'

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
    const api = this._serveconfig[this._current].api
    const tempApi: any = {}
    debugger
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

    walkApi(api, tempApi)

    const config = cloneDeep(this._viewconfig)

    if (this._viewconfig.dialogs) {
      if (this._viewconfig.dialogs.create) {
        debugger
        config.dialogs.create.items = this._viewconfig.dialogs.create.items.map((e: any) => {
          if(typeof e === 'string') {
            return { type: "Input", ...tempApi.create[0].request[e]}
          } else {
            return { ...e, ...tempApi.create[0].request[e.prop]} 
          }
        })
      }

      if (this._viewconfig.dialogs.update) {
        config.dialogs.update.items = this._viewconfig.dialogs.update.items.map((e: any) => {
          if(typeof e === 'string') {
            return tempApi.update[0].request[e]
          } else {
            return tempApi.update[0].request[e.prop]
          }
        })
      }
    }

    if (this._viewconfig.table) {
      if (this._viewconfig.table.columns) {
        debugger
        config.table.columns = this._viewconfig.table.columns.map((e: any) => {
          return { ...e, ...tempApi.create[0].request[e.prop]}
        })
      }
    }
    
    debugger
    return config
  }

  private getData(v) {
    if (v.includes('.')) {

    } else {
      map[e] = {}
      walkServeConfig(this._serveconfig[type.model_object.config_path].meta, map[e])
    }
  }
}
