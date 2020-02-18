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
  
  sortBy:string

  @Input() public empData: Observable<Employee[]>;
  @Output() public delete
  @Output() public edit
  @Output() public search
  @Output() public sort

  constructor() {
    this.delete = new EventEmitter<number>();
    this.edit = new EventEmitter<number>();
    this.search = new EventEmitter<string>();
    this.sort = new EventEmitter<string>();
  }

  deleteEmployee(id: number) {
    this.delete.emit(id);
  }

  onEdit(id: number) {
    this.edit.emit(id)
  }

  public searchData(event: string): void {
    this.search.emit(event)
  }
  public sortAscending(): void {
    debugger
    this.sortBy = document.activeElement.id
    this.sort.emit(`_sort=${this.sortBy}&_order=asc`)
  }
  public sortDescending(): void {
    this.sortBy = document.activeElement.id
    this.sort.emit(`_sort=${this.sortBy}&_order=desc`)
  }

}
