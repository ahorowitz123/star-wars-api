import ACTIONS from "../../constants";

const replaceMovies = newMovies => ({
  type: ACTIONS.REPLACE_MOVIES,
  newMovies
});

const changeSelected = newSelected => ({
  type: ACTIONS.CHANGE_SELECTED,
  newSelected
});
