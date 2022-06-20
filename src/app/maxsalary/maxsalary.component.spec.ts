import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxsalaryComponent } from './maxsalary.component';

describe('MaxsalaryComponent', () => {
  let component: MaxsalaryComponent;
  let fixture: ComponentFixture<MaxsalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxsalaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
