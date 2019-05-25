import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDetailPage } from './cliente-detail.page';

describe('ClienteDetailPage', () => {
  let component: ClienteDetailPage;
  let fixture: ComponentFixture<ClienteDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
