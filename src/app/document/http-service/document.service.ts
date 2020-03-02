import { Injectable } from '@angular/core';

import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import {Document} from 'src/app/document/document.model'
import { Observable } from 'rxjs';

@Injectable()
export class DocumentService {
  public id: number;
  private apiUrl;

  constructor(private httpClient: HttpClient) {
    this.apiUrl=environment.baseUrlDocument
  }

  public getDocuments() : Observable<Document[]>{
    return this.httpClient.get<Document[]>( `${this.apiUrl}`);
  }

  public deleteDocument(id: number) : Observable<Document>{
    this.id=id;
    return this.httpClient.delete<Document>(`${this.apiUrl}`+`/${id}`);
  }
}
