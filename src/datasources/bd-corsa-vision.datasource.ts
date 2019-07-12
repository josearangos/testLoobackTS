import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './bd-corsa-vision.datasource.json';

export class BdCorsaVisionDataSource extends juggler.DataSource {
  static dataSourceName = 'bdCorsaVision';

  constructor(
    @inject('datasources.config.bdCorsaVision', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
