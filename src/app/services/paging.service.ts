import { Injectable } from '@angular/core';
import { BirdsService } from './birds.service';
import { BeastsService } from './beasts.service';
import { WildsService } from './wilds.service';

@Injectable({
  providedIn: 'root'
})
export class PagingService {

  constructor() { }

  public currentPanel:string = 'birds'

}
