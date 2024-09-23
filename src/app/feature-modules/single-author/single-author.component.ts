import { Component } from '@angular/core';
import { BookServicesService } from '../../services/book-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-author',
  templateUrl: './single-author.component.html',
  styleUrl: './single-author.component.css'
})
export class SingleAuthorComponent {
  authorId: any = '';
  authorDetails: any = {};
  isLoading: boolean = false;
  isFailed: boolean = false;

  constructor(private _booksService: BookServicesService, private router:Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getAuthorId();
    this.getAuthor();
  }

  getAuthorId() {
    this.authorId = this.route.snapshot.paramMap.get('id');
  }

  getAuthor() {
    this.isLoading = true;
    this.isFailed = false;
    this._booksService.getSingleAuthor(this.authorId).subscribe((res) => {
      this.isLoading = false;
      this.isFailed = false;
      this.authorDetails = res;
    }, (err) => {
      this.isLoading = false;
      this.isFailed = true;
      if(err.status == 404) {
        this.router.navigate(['/notfound'], {relativeTo: this.route})
      }
    })
  }
}
