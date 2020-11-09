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
    const tempMeta: any = {}
    debugger
    const walkServeConfig = (data: any, map: any) => {
      Object.keys(data).forEach((e: any) => {
        const type = data[e].type

        if (type.array) {
          // TODO
        }

        if (type.object) {
          Object.keys(type.object).forEach(m => {
            const value = type.object[e]
            if (value) {

              walkServeConfig(this._serveconfig[type.model_object.config_path].meta, map[m])
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

    walkServeConfig(meta, tempMeta)

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

  private getData(v) {
    if (v.includes('.')) {

    } else {
      map[e] = {}
      walkServeConfig(this._serveconfig[type.model_object.config_path].meta, map[e])
    }
  }
}
