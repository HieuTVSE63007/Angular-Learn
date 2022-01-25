import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MsalService} from '@azure/msal-angular';
import {AuthenticationResult} from "@azure/msal-browser";

export class bookStore {
  constructor(
    public bookID: number,
    public bookTitle: string,
    public author: string,
    public descriptions: string,
    public price: number,
    public quantity: number,
    // public name: string,
    // public position: string,
    // public office: string,
    // public salary: string,
    // public edit: string,
    // public deletes: string
  ) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularProject';


  constructor(private httpClient: HttpClient, private authService: MsalService) {
  }

  ngOnInit(): void {
    this.authService.instance.handleRedirectPromise().then( res => {
      if (res != null && res.account != null) {
        this.authService.instance.setActiveAccount(res.account)
      }
    })
  }

  isLoggedIn(): boolean {
    return this.authService.instance.getActiveAccount() != null
  }

  login() {
    this.authService.loginPopup()
      .subscribe((response: AuthenticationResult) => {
        this.authService.instance.setActiveAccount(response.account);
      });
  }

  logout() {
    this.authService.logout()
  }
}
