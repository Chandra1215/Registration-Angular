import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinsalaryComponent } from './minsalary.component';

describe('MinsalaryComponent', () => {
  let component: MinsalaryComponent;
  let fixture: ComponentFixture<MinsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinsalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
