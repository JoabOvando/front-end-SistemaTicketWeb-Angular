import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipajeComponent } from './equipaje.component';

describe('EquipajeComponent', () => {
  let component: EquipajeComponent;
  let fixture: ComponentFixture<EquipajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipajeComponent]
    });
    fixture = TestBed.createComponent(EquipajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
