import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-users-table-toolbar',
  templateUrl: './users-table-toolbar.component.html',
  styleUrls: ['./users-table-toolbar.component.scss']
})
export class UsersTableToolbarComponent {
  @Output() filter = new EventEmitter<string>();
  selectedCountry = 'none';

  onFilter(country:string){
    this.filter.emit(country);
  }
}
