import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultItemComponent } from './default-item.component';

describe('DefaultItemComponent', () => {
  let component: DefaultItemComponent;
  let fixture: ComponentFixture<DefaultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
