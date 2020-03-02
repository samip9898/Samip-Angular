import { Component, OnInit } from '@angular/core';

import { Document } from 'src/app/document/document.model'
import { Observable } from 'rxjs';
import { DocumentService } from 'src/app/document/http-service/document.service'
import { ConfirmationModalService } from 'src/app/core/services/confirmation-modal.service';
@Component({
  selector: 'cmp-document-list-container',
  templateUrl: './document-list.container.html'
})
export class DocumentListContainer implements OnInit {
  documentData: Observable<Document[]>

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.getDocuments()
  }

  public getDocuments() {
    this.documentData = this.documentService.getDocuments();
  }

  public deleteDocument(id: number) {
    this.documentService.deleteDocument(id).subscribe(() => {
      this.getDocuments()
    })
  }
}
