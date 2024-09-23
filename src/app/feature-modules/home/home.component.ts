import { Component } from '@angular/core';
import { BookServicesService } from '../../services/book-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CardBookComponent } from '../../shared/card-book/card-book.component';
import { CardLoadingComponent } from '../../shared/card-loading/card-loading.component';
import { CardFailureComponent } from '../../shared/card-failure/card-failure.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  subjectName = '';
  booksList = [];
  getWishListIds: any = '';
  isLoading: boolean = false;
  isFailed: boolean = false;

  constructor(private _booksService: BookServicesService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.isLoading = true;
    this.isFailed = false;
    this._booksService.getBooksList('finance').subscribe((res) => {
      this.isLoading = false;
      this.isFailed = false;
      this.subjectName = res.subjectName;
      this.booksList = res.booksArr.slice(0, 9);
    }, (error) => {
      this.isLoading = false;
      this.isFailed = true;
    })
  }

  redirectTo(info: any) {
    this.router.navigate([info.data], {relativeTo: this.route})
  }
}
