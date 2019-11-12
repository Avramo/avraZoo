import { Component, OnInit } from '@angular/core';
import { PagingService } from 'src/app/services/paging.service';
import { BirdsService } from 'src/app/services/birds.service';
import { WildsService } from 'src/app/services/wilds.service';
import { BeastsService } from 'src/app/services/beasts.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor(public paging:PagingService, public birdsSvc:BirdsService,
                      public beastsSvc:BeastsService, public wildsSvc:WildsService) { };

  ngOnInit() {
  }
  
  changeCard(cardDirection:number):void{
    switch(this.paging.currentPanel){
      case 'birds':
        this.birdsSvc.currentBirdIndex = this.getNewIndex(this.birdsSvc.birdsArray, this.birdsSvc.currentBirdIndex, cardDirection);
        this.birdsSvc.currentBird = this.birdsSvc.birdsArray[this.birdsSvc.currentBirdIndex];
        break;
      case 'beasts':
        this.beastsSvc.currentCattleIndex = this.getNewIndex(this.beastsSvc.cattleArray, this.beastsSvc.currentCattleIndex, cardDirection);
        this.beastsSvc.currentCattle = this.beastsSvc.cattleArray[this.beastsSvc.currentCattleIndex];  
        break;
      case 'wilds':
        this.wildsSvc.currentWildIndex = this.getNewIndex(this.wildsSvc.wildsArray, this.wildsSvc.currentWildIndex, cardDirection);
                this.wildsSvc.currentWild = this.wildsSvc.wildsArray[this.wildsSvc.currentWildIndex];  
        break;
    }

  }

  getNewIndex(animalArray:{}[], currentIndex:number,  cardDirection:number ):number{
    let max = animalArray.length -1;
    let newIndex = currentIndex + cardDirection;
    if (newIndex > max ) {
      return 0;
    }
    if (newIndex < 0) {
      return max;
    } 
    else {
      return newIndex;
    }

  }
}
