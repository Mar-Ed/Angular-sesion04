import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMensajeComponent } from './listar-mensaje.component';

describe('ListarMensajeComponent', () => {
  let component: ListarMensajeComponent;
  let fixture: ComponentFixture<ListarMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarMensajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
