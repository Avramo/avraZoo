import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WildsService {

  constructor() { }


  wildsArray = [
    {name:'Lion', size:'large', habitat:'Jungle', image:'https://i.pinimg.com/originals/1a/62/91/1a62918aa19b5a8cb8f07fdec24a7a56.jpg'},
    {name:'Polar Bear', size:'large', habitat:'Cold', image:'https://resize.hswstatic.com/w_700/h_393.75/gif/polar-bear-liver-1.jpg'},
    {name:'Rhino', size:'large', habitat:'africa', image:'https://s.abcnews.com/images/GMA/190227_gma_oquendo2_0731_hpMain_16x9_992.jpg'},
    {name:'Arctic Wolve', size:'medium', habitat:'Arctic tundra', image:'https://www.coolantarctica.com/Antarctica%20fact%20file/arctic-wolf-tsaiproject-cc2_sm.jpg'},
    {name:'Jack Rabbit', size:'small', habitat:'Desert', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBvDnAcW82QB7mS5ofrzm3CZ4fzMw4hkAOxq1mGmaTm2ePFK4&s'},
  ]

currentWildIndex = 0;
currentWild = this.wildsArray[ this.currentWildIndex ];


}
