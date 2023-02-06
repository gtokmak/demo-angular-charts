import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPolarDoughnutComponent } from './chart-polar-doughnut.component';

describe('ChartPolarDoughnutComponent', () => {
  let component: ChartPolarDoughnutComponent;
  let fixture: ComponentFixture<ChartPolarDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPolarDoughnutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartPolarDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
