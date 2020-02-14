import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/employees/employees.model';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-list-presentation',
  templateUrl: './list-presentation.html',
  styleUrls: ['./list-presentation.scss']
})
export class ListPresentation {
  @Input() empData: Observable<Employee[]>;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<number>();
  constructor() { }

  deleteEmployee(id: number) {

    this.deleteEvent.emit(id);
  }
  
  onEdit(id: number) {
    this.editEvent.emit(id)
  }

}
