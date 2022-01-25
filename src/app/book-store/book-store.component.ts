import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {MsalService} from "@azure/msal-angular";
import {FormControl, FormGroup} from "@angular/forms";
import {Observer} from "rxjs";
import {Book} from "./book";
import {BookStoreService} from "./book-store.service";

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent implements OnInit {

  public books: Book[] | undefined

  name = new FormControl();

  constructor(private bookStoreService: BookStoreService, private authService: MsalService) {}

  ngOnInit(): void {
    this.getBook();
    this.name.setValue('New')
  }

  public getBook(): void {
    this.bookStoreService.getBook()
      .subscribe((response: Book[]) => {
        this.books = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

 public updateName() {
  this.name.setValue("Haha")
}
}
