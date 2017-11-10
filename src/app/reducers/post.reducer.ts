import * as PostActions from './../actions/post.actions';
import { Post } from './../models/post.model';

export type Action = PostActions.All;

const initialState: Post = {
  title: 'Angular redux',
  stars: 0
};
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function postReducer(state: Post = initialState, action: Action ) {
  console.log(action.type);
  switch (action.type) {
    case PostActions.EDIT_TITLE: {
        return newState(state, {title: action.payload});
    }
    case PostActions.UPVOTE: {
        return newState(state, {stars: state.stars + 1});
    }
    case PostActions.DOWNVOTE: {
        return newState(state, {stars: state.stars - 1});
    }
    case PostActions.RESET: {
        return initialState;
    }
    default: {
      return state;
    }
  }
}
