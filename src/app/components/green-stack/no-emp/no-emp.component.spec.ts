/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoEmpComponent } from './no-emp.component';

describe('NoEmpComponent', () => {
  let component: NoEmpComponent;
  let fixture: ComponentFixture<NoEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
