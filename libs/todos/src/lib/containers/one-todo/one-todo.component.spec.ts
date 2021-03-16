import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTodoComponent } from './one-todo.component';

describe('OneTodoComponent', () => {
  let component: OneTodoComponent;
  let fixture: ComponentFixture<OneTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
