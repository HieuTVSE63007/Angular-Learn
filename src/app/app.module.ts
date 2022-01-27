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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {galleryReducers} from "./gallery-redux/store/gallery.reducers";
import { GalleryReduxComponent } from './gallery-redux/gallery-redux.component';
import {GalleryService} from "./gallery-redux/gallery/gallery.service";
import {EffectsModule} from "@ngrx/effects";
import {GalleryEffects} from "./gallery-redux/store/gallery.effects";



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
},{
  path:'gallery-redux',
  component: GalleryReduxComponent
},
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    BookStoreComponent,
    GalleryReduxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MsalModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    StoreModule.forRoot({gallery: galleryReducers}),
    EffectsModule.forRoot([GalleryEffects]),
    FormsModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService,
    GalleryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
