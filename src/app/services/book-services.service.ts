import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {

  constructor() { }

  // Check If book in wish list
  isLoved(bookId: string): boolean {
    const lovedBooks = this.getLovedBooks();
    return lovedBooks.includes(bookId);
  }

  // Get wishlist books ids form localstorage
  getLovedBooks(): string[] {
    return JSON.parse(localStorage.getItem('wishListIds') || '[]');
  }

  // Add and remove book from wishlist
  toggleLove(bookId: string) {
    const lovedBooks = this.getLovedBooks();
    if (this.isLoved(bookId)) {
      const updatedBooks = lovedBooks.filter(id => id !== bookId);
      localStorage.setItem('wishListIds', JSON.stringify(updatedBooks));
      return false;
    } else {
      lovedBooks.push(bookId);
      localStorage.setItem('wishListIds', JSON.stringify(lovedBooks));
      return true;
    }
  }
}
