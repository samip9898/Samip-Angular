import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
// ---------------------------------- //
import { DocumentListPresenter } from '../document-list-presenter/document-list.presenter';
import { Observable } from 'rxjs';
import { Document } from 'src/app/document/document.model'
import { ConfirmationModalService } from 'src/app/core/services/confirmation-modal.service'


@Component({
  selector: 'cmp-document-list-ui',
  templateUrl: './document-list.presentation.html',
  styleUrls: ['./document-list.presentation.scss'],
  viewProviders: [DocumentListPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentListPresentation {

  @Input() public documentData: Observable<Document[]>
  // @Output() public delete;
  todayDate: Date = new Date();

  constructor(private deleteConfirmation: ConfirmationModalService) {
    // this.delete=new EventEmitter<number>();
  }
  // public deleteDocument(id:number){
  //   this.delete.emit(id);
  // }

  openDeleteOverlay(id: number): void {
    this.deleteConfirmation.showDeleteConfirmation(id);
  }
}
