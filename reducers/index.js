import { RECEIVE_SYMPTOMS, ADD_SYMPTOM } from '../actions';

function entries(state = {}, action) {
  switch (action.type) {
    case RECEIVE_SYMPTOMS:
      return {
        ...state,
        ...action.entries,
      };
    case ADD_SYMPTOM:
      return {
        ...state,
        ...action.entry,
      };
    default:
      return state;
  }
}

export default entries;
