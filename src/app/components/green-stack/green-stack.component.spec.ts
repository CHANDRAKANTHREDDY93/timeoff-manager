/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GreenStackComponent } from './green-stack.component';

describe('GreenStackComponent', () => {
  let component: GreenStackComponent;
  let fixture: ComponentFixture<GreenStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
