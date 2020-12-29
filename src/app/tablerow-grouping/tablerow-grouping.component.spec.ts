import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerowGroupingComponent } from './tablerow-grouping.component';

describe('TablerowGroupingComponent', () => {
  let component: TablerowGroupingComponent;
  let fixture: ComponentFixture<TablerowGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablerowGroupingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablerowGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
