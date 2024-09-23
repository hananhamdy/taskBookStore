import { Injectable } from '@angular/core';
import { APIConfig } from '../configs/api-config';
import { BooksListInterface } from '../models/booksListInterface';
import { map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {
  cashedBookListAPI: any = null;

  constructor(private http: HttpClient) {}

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

  // Home Book list Inquery
  getBooksList(type:any) {
    let url = APIConfig.booksListInquiry.url(type);
    if(this.cashedBookListAPI) {
      return of (this.cashedBookListAPI);
    }
    // return of (this.mapBooksList(booksListMock)); // use this to simulate api response to avoid calling api kteeer while i am developing
    return this.http.get(url).pipe(
      map((res: any) => {
        this.cashedBookListAPI = this.mapBooksList(res);
        return this.cashedBookListAPI;
      })
    )
  }

  // Mapping data Home Book list Inquery
  mapBooksList(Bookslist: any) {
    let booksArr: any = [];
    let subjectName: any = Bookslist['name'];
    Bookslist['works'].map((book: any, i: any) => {
      let authorsList: any = [];
      book.authors.map((auth:any) => {authorsList.push(auth);})
      let bookId = book.key.split("/").at(-1);
      let coverId= book.cover_id ? book.cover_id : null;
      let bookItem: BooksListInterface = {
        id: bookId,
        image: coverId ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` : 'https://placehold.co/200x300/64748b/f1f5f9?text=Book+Placholder',
        title: book.title,
        year: book.first_publish_year,
        author: authorsList,
        route: book.key,
        isLoved: this.isLoved(bookId)
      }
      booksArr.push(bookItem);
    })
    return {subjectName, booksArr};
  }
}
