import { Component, OnInit } from '@angular/core';
import {IAppState, rootReducer} from "./store";

@Component({
  selector: 'app-redux-store',
  templateUrl: './redux-store.component.html',
  styleUrls: ['./redux-store.component.css']
})
export class ReduxStoreComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
