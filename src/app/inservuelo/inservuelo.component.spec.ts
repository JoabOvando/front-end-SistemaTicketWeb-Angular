import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InservueloComponent } from './inservuelo.component';

describe('InservueloComponent', () => {
  let component: InservueloComponent;
  let fixture: ComponentFixture<InservueloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InservueloComponent]
    });
    fixture = TestBed.createComponent(InservueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
