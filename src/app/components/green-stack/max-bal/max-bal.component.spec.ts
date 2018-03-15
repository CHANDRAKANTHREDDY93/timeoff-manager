/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaxBalComponent } from './max-bal.component';

describe('MaxBalComponent', () => {
  let component: MaxBalComponent;
  let fixture: ComponentFixture<MaxBalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxBalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxBalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
