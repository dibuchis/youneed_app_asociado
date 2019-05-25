import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoDetailPage } from './pedido-detail.page';

describe('PedidoDetailPage', () => {
  let component: PedidoDetailPage;
  let fixture: ComponentFixture<PedidoDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
