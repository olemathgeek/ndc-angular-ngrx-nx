import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '@demo-app/data-models';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnChanges {
  @Input() users: User[];

  displayedColumns = ['username', 'country'];
  dataSource: MatTableDataSource<User>;

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  setTableDatasource(dataSource): void {
    this.dataSource = new MatTableDataSource(this.users);
  }

}
