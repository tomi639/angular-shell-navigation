import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../services/connector.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private connector: ConnectorService) {
    this.connector.getContext();
   }

  ngOnInit(): void {
  }

}
