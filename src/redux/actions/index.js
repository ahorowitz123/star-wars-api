import ACTIONS from "../../constants/actions";

const replaceMovies = newMovies => ({
  type: ACTIONS.REPLACE_MOVIES,
  newMovies
});

const changeSelected = newSelected => ({
  type: ACTIONS.CHANGE_SELECTED,
  newSelected
});

const ActionCreators = {
  replaceMovies,
  changeSelected
};

export default ActionCreators;
