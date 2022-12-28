import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCochesComponent } from './listado-coches.component';

describe('ListadoCochesComponent', () => {
  let component: ListadoCochesComponent;
  let fixture: ComponentFixture<ListadoCochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoCochesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListadoCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
