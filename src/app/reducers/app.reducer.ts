import { Action } from '@ngrx/store';

export function AppReducer(state: string = 'Angular firebase', action: Action ) {
  console.log('App reducer', action.type);
  switch (action.type) {
    case 'LEFT': {
        return state = 'You have dispatched LEFT Action.';
    }
    case 'RIGHT': {
      return state = 'You have dispatched RIGHT Action.';
  }
    default: {
      return state;
    }
  }
}
