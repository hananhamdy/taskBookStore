import { Component, EventEmitter, input, Output } from '@angular/core';
import { BookServicesService } from '../../services/book-services.service';

@Component({
  selector: 'app-card-book',
  standalone: true,
  templateUrl: './card-book.component.html',
  styleUrl: './card-book.component.css'
})
export class CardBookComponent {
  isLovedIcon: boolean = false;

  constructor(private _bookServie: BookServicesService) {}

  data = input<any>(); 

  @Output() action = new EventEmitter();
  @Output() refresh = new EventEmitter();

  ngOnInit(): void {
    this.isLovedIcon = this.data().isLoved ? true : false;
  }

  actions(type: any, data:any) {
    this.action.emit({type, data});
  }

  toggleLove(bookId: string): void {
    this.isLovedIcon = this._bookServie.toggleLove(bookId);
    this.refresh.emit(true)
  }
}
