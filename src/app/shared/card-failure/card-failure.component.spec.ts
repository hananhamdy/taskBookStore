import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFailureComponent } from './card-failure.component';

describe('CardFailureComponent', () => {
  let component: CardFailureComponent;
  let fixture: ComponentFixture<CardFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFailureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
