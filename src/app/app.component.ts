import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: Observable<Post>;
  title: string;
  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post');
  }
  editTitle() {
    this.store.dispatch(new PostActions.EditTitle(this.title));
  }
  upVote() {
    this.store.dispatch(new PostActions.UpVote());
  }
  downVote() {
    this.store.dispatch(new PostActions.DownVote());
  }
  reset() {
    this.store.dispatch(new PostActions.Reset());
  }
}
