import { Injectable } from '@angular/core';
import { APIConfig } from '../configs/api-config';
import { BooksListInterface } from '../models/booksListInterface';
import { map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BookInterface } from '../models/bookInterface';

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

  // Single Book Inquery
  getSingleBook(id:any) {
    let url = APIConfig.singleBookInquiry.url(id);
    // return of (this.mapSingleBook(bookMock));
    return this.http.get(url).pipe(
      map((res: any) => {
        return this.mapSingleBook(res);
      })
    )
  }

  // Mapping Single Book Inquery
  mapSingleBook(book:any) {
    const year = (new Date(book.created.value)).getFullYear();
    let authorsList: any = [];
    let authorsNams: any = [];
    book.authors.map((auth:any) => {authorsList.push(auth.author.key.split("/").at(-1));});
    authorsList.map((id:any) => {authorsNams.push(this.getSingleAuthor(id))})
    let bookId = book.key.split("/").at(-1);
    let bookData: BookInterface = {
      id: bookId,
      image: book.covers,
      title: book.title,
      fisrtPublished: year,
      author: authorsNams, //////
      editionCount: book.revision,
      PagesNo: '-',
      isLoved: this.isLoved(bookId)
    }
    return bookData;
  }

  // Single Author Inquery
  getSingleAuthor(id:any) {
    let url = APIConfig.singleAuthorInquiry.url(id);
    // return of (this.mapSingleAuthor(authorMock));
    return this.http.get(url).pipe(
      map((res: any) => {
        return this.mapSingleAuthor(res);
      })
    )
  }

  // Mapping Single Author Inquery
  mapSingleAuthor(author:any) {
    let authorId = author.key.split("/").at(-1);
    let coverId= author.photos ? author.photos[0] : null;
    let authorData = {
      id: authorId,
      image: coverId ? `https://covers.openlibrary.org/a/olid/${coverId}-L.jpg` : 'https://placehold.co/200x300/64748b/f1f5f9?text=Author+Placholder',
      name: author.name,
      birthDate: author.birth_date
    }
    return authorData;
  }
}
