import { Component, OnInit } from '@angular/core';
import { PagingService } from 'src/app/services/paging.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public pagingSvc:PagingService) { }

  ngOnInit() {
  }
  navPanel(navToPanel:string){
    this.pagingSvc.currentPanel = navToPanel;
  }
}
