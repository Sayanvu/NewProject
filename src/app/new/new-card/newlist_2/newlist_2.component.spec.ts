/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Newlist_2Component } from './newlist_2.component';

describe('Newlist_2Component', () => {
  let component: Newlist_2Component;
  let fixture: ComponentFixture<Newlist_2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newlist_2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newlist_2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
