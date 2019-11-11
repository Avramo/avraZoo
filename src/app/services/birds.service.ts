import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirdsService {

  constructor( ) { }

  birdsArray = [
    {name:'Green Wing Macaw Parrot', size:'large', habitat:'tropical', image:'https://www.wowamazing.com/wp-content/uploads/2015/07/large2.jpg'},
    {name:'Stork-billed Kingfisher', size:'large', habitat:'South Asia', image:'https://www.wowamazing.com/wp-content/uploads/2015/07/4366425791_546e78fbeb.jpg'},
    {name:'Northern Oriole', size:'small', habitat:'North America', image:'https://www.allaboutbirds.org/guide/assets/photo/63734201-480px.jpg'},
    {name:'Golden Pheasant', size:'large', habitat:'China', image:'https://www.wowamazing.com/wp-content/uploads/2015/07/141801_857051_1933956.jpg'},
    {name:'Northern Cardinal', size:'small', habitat:'North America', image:'http://www.birdsandblooms.com/wp-content/uploads/2014/11/birding_basics_northern_cardinals.jpg'},
  ]

currentBirdIndex = 0;
currentBird = this.birdsArray[ this.currentBirdIndex ];

}

