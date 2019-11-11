import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeastsService {

  constructor() { }


  cattleArray = [
    {name:'Jersey Cow', size:'large', habitat:'many', image:'https://cdn0.wideopenpets.com/wp-content/uploads/2016/01/JerseyCow.jpg'},
    {name:'Sheep', size:'medium', habitat:'worldwide', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWfZS9SCVyU3nIxv42Z5p9ywXrEhl4EUQMjlyP8Wfq7J-7CQcH&s'},
    {name:'Thoroubred Horse', size:'large', habitat:'worldwide', image:'https://www.petguide.com/wp-content/uploads/2016/07/thoroughbred-horse.jpg'},
    {name:'Goat', size:'medium', habitat:'worldwide', image:'https://ichef.bbci.co.uk/news/660/cpsprodpb/12E1C/production/_103204377_mediaitem103204376.jpg'},
    {name:'Donkey', size:'medium', habitat:'all over', image:'https://cdn.britannica.com/68/143568-050-5246474F/Donkey.jpg'},
  ]

currentCattleIndex = 0;
currentCattle = this.cattleArray[ this.currentCattleIndex ];

}
