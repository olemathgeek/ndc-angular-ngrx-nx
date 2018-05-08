import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableToolbarComponent } from './users-table-toolbar.component';

describe('UsersTableToolbarComponent', () => {
  let component: UsersTableToolbarComponent;
  let fixture: ComponentFixture<UsersTableToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTableToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTableToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
