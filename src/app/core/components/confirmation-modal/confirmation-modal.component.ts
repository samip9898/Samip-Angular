import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'cmp-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

  constructor( public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
