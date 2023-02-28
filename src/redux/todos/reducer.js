import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  LOAD,
  TOGGLED,
} from "./actionTypes";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return action.payload;
    case ADDED:
      return [...state, { ...action.payload }];
    case TOGGLED:
      return state.map((todo) => {
        if (todo._id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    case COLORSELECTED:
      return state.map((todo) => {
        if (todo._id === action.payload.id) {
          return { ...todo, color: action.payload.color };
        }
        return todo;
      });

    case DELETED:
      return state.filter((todo) => todo._id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return { ...todo, completed: true };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default reducer;
