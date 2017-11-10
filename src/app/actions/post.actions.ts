import { Action } from '@ngrx/store';

export const EDIT_TITLE = '[Post] Edit';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const RESET = '[Post] Reset';

export class EditTitle implements Action {
  readonly type = EDIT_TITLE;
  constructor (public payload: string) {}
}
export class UpVote implements Action {
  readonly type = UPVOTE;
}
export class DownVote implements Action {
  readonly type = DOWNVOTE;
}
export class Reset implements Action {
  readonly type = RESET;
}

export type All = EditTitle | UpVote | DownVote | Reset;
