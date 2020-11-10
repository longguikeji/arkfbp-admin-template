export class Config {
  private _viewconfig = null
  private _serveconfig = null
  private _config = null

  constructor(viewconfig: any, serveconfig: any, page: string) {
    this._viewconfig = viewconfig
    this._serveconfig = serveconfig

    this._config = getConfig(viewconfig, serveconfig, page)
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
}

function getConfig(viewconfig: any, serveconfig: any, page: string): any {
  // const meta = serveconfig[page].meta
  // const tempMeta: any = {}
  // const walkServeConfig = (data: any, map: any) => {
  //   Object.keys(data).forEach((e: any) => {
  //     const type = data[e].type

  //     if (type.model_object) {
  //       map[e] = {}
  //       walkServeConfig(serveconfig[type.model_object.config_path].meta, map[e])
  //     } else {
  //       map[e] = {
  //         label: data[e].title,
  //         state: {
  //           value: '',
  //           ...(Object.values(data[e].type)[0] as Object)
  //         }
  //       }
  //     }
  //   })
  // }

  // walkServeConfig(meta, tempMeta)

  // const config = { ...viewconfig }

  // if (viewconfig.dialogs) {
  //   if (viewconfig.dialogs.create) {
  //     config.dialogs.create.items = viewconfig.dialogs.create.items.map((e: any) => {
  //       return { ...e, ...tempMeta[e.prop] }
  //     })
  //   }
  //   if (viewconfig.dialogs.update) {
  //     config.dialogs.update.items = viewconfig.dialogs.update.items.map((e: any) => {
  //       return { ...e, ...tempMeta[e.prop] }
  //     })
  //   }
  // }

  // if (viewconfig.table) {
  //   config.table.columns = viewconfig.table.columns.map((e: any) => {
  //     return { ...e, ...tempMeta[e.prop] }
  //   })
  // }

  // if (viewconfig.tag) {
  //   config.tag = viewconfig.tag.map((e: any) => {
  //     return { ...e, ...tempMeta[e.prop] }
  //   })
  // }

  // return config
  return { ...viewconfig, ...serveconfig }
}
