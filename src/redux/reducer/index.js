import ACTIONS from "../../constants/actions";

const initialState = {
  movies: [],
  selected: ""
};

/* Main reducer. */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.REPLACE_MOVIES:
      return {
        ...state,
        movies: action.newMovies
      };
    case ACTIONS.CHANGE_SELECTED:
      return {
        ...state,
        selected: action.newSelected
      };
    default:
      return state;
  }
};

export default reducer;
