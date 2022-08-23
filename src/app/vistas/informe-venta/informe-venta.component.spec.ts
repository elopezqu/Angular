import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeVentaComponent } from './informe-venta.component';

describe('InformeVentaComponent', () => {
  let component: InformeVentaComponent;
  let fixture: ComponentFixture<InformeVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
