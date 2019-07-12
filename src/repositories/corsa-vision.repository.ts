import {DefaultCrudRepository} from '@loopback/repository';
import {CorsaVision, CorsaVisionRelations} from '../models';
import {BdCorsaVisionDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CorsaVisionRepository extends DefaultCrudRepository<
  CorsaVision,
  typeof CorsaVision.prototype.date,
  CorsaVisionRelations
> {
  constructor(
    @inject('datasources.bdCorsaVision') dataSource: BdCorsaVisionDataSource,
  ) {
    super(CorsaVision, dataSource);
  }
  //Writte function for acceder a los datos example
  /*findByDate(startDate: Date, endDate: Date){
      this.find()
  }*/
}
