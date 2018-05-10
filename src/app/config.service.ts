import { Injectable } from '@angular/core';
import { configuration } from './configuration';

@Injectable()

export class ConfigService {

  getConfig() {
    return configuration;
  }

  constructor() { }

}
