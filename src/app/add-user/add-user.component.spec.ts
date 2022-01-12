import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomDirectiveDirective } from '../custom-directive.directive';

import { AddUserComponent } from './add-user.component';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [AddUserComponent, CustomDirectiveDirective],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA]
    })
    .createComponent(AddUserComponent)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have blue <h3>', () => {
    const h3: HTMLElement = fixture.nativeElement.querySelector('h3');
    const bgColor = h3.style.backgroundColor;
    expect(bgColor).toBe('blue');
  });
});
