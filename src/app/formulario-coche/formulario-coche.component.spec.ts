import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCocheComponent } from './formulario-coche.component';

describe('FormularioCocheComponent', () => {
  let component: FormularioCocheComponent;
  let fixture: ComponentFixture<FormularioCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioCocheComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormularioCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
