import { Component, OnInit } from '@angular/core';
import { BookServicesService } from '../../services/book-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrl: './single-book.component.css'
})
export class SingleBookComponent implements OnInit {
  bookId: any = '';
  bookDetails: any = {};
  authorsName: any = [];
  isLoading: boolean = false;
  isFailed: boolean = false;
  isLovedIcon: boolean = false;

  constructor(private _booksService: BookServicesService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getBookId();
    this.getBook();
  }

  getBookId() {
    this.bookId = this.route.snapshot.paramMap.get('id');
  }

  getBook() {
    this.isLoading = true;
    this.isFailed = false;
    this._booksService.getSingleBook(this.bookId).subscribe((res) => {
      this.isLoading = false;
      this.isFailed = false;
      this.bookDetails = res;
      this.isLovedIcon = this.bookDetails.isLoved ? true : false;
      res.author.map((auth:any) => {
        auth.subscribe((authData:any) => {
          this.authorsName.push({id: authData.id ,name: authData.name});
        })
      })
    }, (err) => {
      this.isLoading = false;
      this.isFailed = true;
      if(err.status == 404) {
        this.router.navigate(['/notfound'], {relativeTo: this.route})
      }
    })
  }

  redirectTo(route: any) {
    this.router.navigate([`/authors/${route}`], {relativeTo: this.route})
  }

  toggleLove(bookId: string): void {
    this.isLovedIcon = this._booksService.toggleLove(bookId)
  }
}
