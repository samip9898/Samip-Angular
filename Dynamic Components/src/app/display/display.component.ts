import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
public string : String 
  constructor() { 
    this.string="Dynamically loaded component";
  }

  ngOnInit() {
  }

}
