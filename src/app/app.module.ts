import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CustomerComponent} from './customer/customer.component';
import {HttpClientModule} from "@angular/common/http";

import {environment} from "./environment";
import {MSAL_INSTANCE, MsalModule, MsalService} from '@azure/msal-angular';
import {IPublicClientApplication, PublicClientApplication} from "@azure/msal-browser";
import {RouterModule, Routes} from "@angular/router";
import { BookStoreComponent } from './book-store/book-store.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ReduxStoreComponent } from './redux-store/redux-store.component';
// import {NgRedux ,NgReduxModule} from "ng2-redux";



export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth:{
      clientId: environment.clientId,
      redirectUri: environment.redirectUrl
    }
  })
}

const routes: Routes = [{
  path: 'customer',
  component: CustomerComponent
},{
  path:'book-store',
  component: BookStoreComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    BookStoreComponent,
    ReduxStoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MsalModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    // NgReduxModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
