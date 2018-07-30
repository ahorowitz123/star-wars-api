import ACTIONS from "../../constants/actions";

// action creator to replace movie list
const replaceMovies = newMovies => ({
  type: ACTIONS.REPLACE_MOVIES,
  newMovies
});

// action creator to change which character is selected
const changeSelected = newSelected => ({
  type: ACTIONS.CHANGE_SELECTED,
  newSelected
});

const ActionCreators = {
  replaceMovies,
  changeSelected
};

export default ActionCreators;
