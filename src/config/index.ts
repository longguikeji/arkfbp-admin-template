export class Config {
  private _viewconfig = null
  private _serveconfig = null
  private _config = null

  constructor(viewconfig: any, serveconfig: any) {
    this._viewconfig = viewconfig
    this._serveconfig = serveconfig

    this._config = getConfig(viewconfig, serveconfig)
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

function getConfig(viewconfig: any, serveconfig: any): any {
  return { ...viewconfig, ...serveconfig }
}
