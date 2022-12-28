import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyadirAdminComponent } from './anyadir-admin.component';

describe('AnyadirAdminComponent', () => {
  let component: AnyadirAdminComponent;
  let fixture: ComponentFixture<AnyadirAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnyadirAdminComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AnyadirAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
