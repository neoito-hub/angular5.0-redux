import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppReducer } from './reducers/app.reducer';
import { PostReducer } from './reducers/post.reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({displayMessage: AppReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
