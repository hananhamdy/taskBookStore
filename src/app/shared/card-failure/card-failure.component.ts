import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-failure',
  templateUrl: './card-failure.component.html',
  styleUrl: './card-failure.component.css'
})
export class CardFailureComponent {
  @Output() action = new EventEmitter();

  refresh() {
    this.action.emit();
  }
}
