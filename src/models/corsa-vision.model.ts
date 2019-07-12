import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class CorsaVision extends Entity {
  @property({
    type: 'date',
    default: Date.now,
  })
  date?: string;

  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;


  constructor(data?: Partial<CorsaVision>) {
    super(data);
  }
}

export interface CorsaVisionRelations {
  // describe navigational properties here
}

export type CorsaVisionWithRelations = CorsaVision & CorsaVisionRelations;
