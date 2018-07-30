import { connect } from "react-redux";

import CharacterSelector from "../../components/CharacterSelector";
import ActionCreators from "../../redux/actions";
import * as characters from "../../characters.json";

const mapDispatchToProps = dispatch => ({
  // logic to get movie data from api
  handleOnSelect: (character, url) => {
    // handle case of empty url for none selection
    if (url === "") {
      dispatch(ActionCreators.replaceMovies([]));
      dispatch(ActionCreators.changeSelected(character));
    } else {
      // fetch data from url
      fetch(url).then(response => {
        if (response.status !== 200) {
          // if received anything other than a 200 response
          // return an empty array
          dispatch(ActionCreators.replaceMovies([]));
          dispatch(ActionCreators.changeSelected(character));
        } else {
          // get each movie data asynchronously and wait for all
          // to complete before calling replace movie action.
          response.json().then(async charData => {
            try {
              const filmData = await Promise.all(
                charData.films.map(filmURL =>
                  fetch(filmURL).then(film => film.json())
                )
              );

              dispatch(ActionCreators.replaceMovies(filmData));
              dispatch(ActionCreators.changeSelected(character));
            } catch (error) {
              console.log(error);
              throw error;
            }
          });
        }
      });
    }
  }
});

const CharacterSelectorContainer = connect(null, mapDispatchToProps)(
  CharacterSelector
);

CharacterSelectorContainer.defaultProps = {
  characters: characters.characters
};

export default CharacterSelectorContainer;
