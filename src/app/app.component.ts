import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

interface AppState {
  displayMessage: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayMessage$: Observable<string>;
  constructor(private store: Store<AppState>) {
   this.displayMessage$ = this.store.select('displayMessage');
  }
  leftMessage() {
    this.store.dispatch({type: 'LEFT'});
  }
  rightMessage() {
    this.store.dispatch({type: 'RIGHT'});
  }
}
