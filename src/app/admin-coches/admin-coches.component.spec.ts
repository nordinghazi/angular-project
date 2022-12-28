import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCochesComponent } from './admin-coches.component';

describe('AdminCochesComponent', () => {
  let component: AdminCochesComponent;
  let fixture: ComponentFixture<AdminCochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCochesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
