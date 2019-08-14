import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistPage } from './adminlist.page';

describe('AdminlistPage', () => {
  let component: AdminlistPage;
  let fixture: ComponentFixture<AdminlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
