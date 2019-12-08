import BackgroundActions from './background.actions';
import { Background } from './background.model'

const defaultState: Background = {
  color: 'rgb(64,64,64)',
}

export function backgroundReducer(state: Background = defaultState, action: any) {
	switch (action.type) {
  		case BackgroundActions.SET_COLOR:
  			return { ...state, color: action.payload };

  		case BackgroundActions.RESET_COLOR:
  			return defaultState;

  		default:
  			return state;
	}
}