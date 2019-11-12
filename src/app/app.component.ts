import { Component } from '@angular/core';
import { PagingService } from './services/paging.service';
import { BirdsService } from './services/birds.service';
import { WildsService } from './services/wilds.service';
import { BeastsService } from './services/beasts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public pagingSvc:PagingService, public birdsSvc:BirdsService, 
      public beastsSvc:BeastsService, public wildsSvc:WildsService) { };
  title = 'avraZoo';
}
