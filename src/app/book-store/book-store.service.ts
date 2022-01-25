import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./book";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  public getBook(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.apiServerUrl}/home/book`);
  }

  public addBook(book: Book): Observable<Book>{
    return this.httpClient.post<Book>(`${this.apiServerUrl}/home/add`, book);
  }

  public updateBook(book: Book): Observable<Book>{
    return this.httpClient.put<Book>(`${this.apiServerUrl}/home/update`, book);
  }

  public deleteBook(bookId: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.apiServerUrl}/home/delete/${bookId}`);
  }
}
