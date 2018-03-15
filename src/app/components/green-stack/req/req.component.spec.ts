/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReqComponent } from './req.component';

describe('ReqComponent', () => {
  let component: ReqComponent;
  let fixture: ComponentFixture<ReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
