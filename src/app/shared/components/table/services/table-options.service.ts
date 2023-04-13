import { Injectable } from '@angular/core';

export type TableOptions = {
  matElevationIndex: number,
  viewport?: {
    width?: string,
    height?: string,
  }
}

@Injectable()
export class TableOptionsService {
  set options(options: Partial<TableOptions> | undefined) {
    if (!options) this._options = this.getDefaultOptions();
    else this._options = Object.assign(this.getDefaultOptions(), options); // TODO merge deep
  }
  get options(): TableOptions { return this._options; }
  private _options = this.getDefaultOptions();

  private getDefaultOptions(): TableOptions {
    return {
      matElevationIndex: 2
    };
  }
}
