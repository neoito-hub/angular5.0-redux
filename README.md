# AngularReduxFirebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Instructions

### Create a new angular app.
Create a new angular application using CLI.
```
ng new angular-redux

```
So after running the code your app scafhold will generate and does the npm install.

### Install ngrx/store
```
npm i --save @ngrx/store
```
### Import StoreModule in app.module metadata
- Create post.reducer.ts in app/reducers/post.reducer.ts
  ```
  import { StoreModule } from '@ngrx/store';
  import { PostReducer } from './reducers/post.reducer';
  ```
- Add to imports in @NgModule
  ```
  StoreModule.forRoot({post: PostReducer})
  ```
### Create a model for your data
- Create app/models/post.model.ts and add ther interface.
  ```
  export interface Post {
    title: string;
    likes: number;
  }
  ```
### Define actions
- Create app/actions/post.actions.ts
- Import Action from store
  ```
  import { Action } from '@ngrx/store';
  ```
- Export constants that represents each action
  ```
  export const EDIT_TITLE = '[Post] Edit';
  export const UPVOTE = '[Post] Upvote';
  export const DOWNVOTE = '[Post] Downvote';
  export const RESET = '[Post] Reset';
  ```
- Create EditTitle class with readonly type
  ```
  export class EditTitle implements Action {
    readonly type = EDIT_TITLE;
    constructor (public payload: string){}
  }
  ```
- Do the same for all remaining actions
  ```
  export class UpVote implements Action {
    readonly type = UPVOTE;
  }
  export class DownVote implements Action {
    readonly type = DOWNVOTE;
  }
  export class Reset implements Action {
    readonly type = RESET;
  }
  ```
- Export all
```
export type All = EditTitle | UpVote | DownVote | Reset;
```
### Create post reducer
- Create app/reducers/post.reducers.ts
- Import Post actions and model
```
import * as PostActions from './../actions/post.actions';
import { Post } from './../models/post.model';

export type Action = PostActions.All;
```
- Then create inital state

```
const initialState: Post = {
    title: 'Angular redux',
    likes: 0
}
```
- Create helper function for new state object.
```
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
}
```
- Define reducer function

```
export function postReducer(state: Post = initialState, action: Action ) {
  switch (action.type) {
    case PostActions.EDIT_TITLE: {
        return newState(state, {title: action.payload});
    }
    case PostActions.UPVOTE: {
        return newState(state, {likes: state.likes + 1});
    }
    case PostActions.DOWNVOTE: {
        return newState(state, {likes: state.likes - 1});
    }
    case PostActions.RESET: {
        return initialState;
    }
    default: {
      return state;
    }
  }
}
```
### Refactor App Component
- Import store and Observable
```
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

```
- Create interface
```
interface AppState {
  post: Post;
}
```
- Create properties and methods
```
posts$: Observable<AppState>;
title: string;

constructor(private store: Store<AppState>){
  this.post = this.store.select('post');
}
editTitle(){
  this.store.dispatch(new PostActions.EditTitle(this.title));
}
upVote(){
  this.store.dispatch(new PostActions.UpVote());
}
downVote(){
  this.store.dispatch(new PostActions.DownVote());
}
reset(){
  this.store.dispatch(new PostActions.Reset());
}
```
### Modify template
```
<div *ngIf="post | async as p">
  Title: {{p.title}}
  <br>
  Likes: {{p.likes}}
<button (click)="upVote()">UP</button>
<button (click)="downVote()">DOWN</button>
<button (click)="reset()">RESET</button>

<input [(ngModel)] = title>
<button (click)="editTitle()">Change title</button>

</div>
```
### Lets add some style
- Import milligram css in index.html
```
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
<link rel="stylesheet" href="//cdn.rawgit.com/necolas/normalize.css/master/normalize.css">
<link rel="stylesheet" href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css">
```
