import { connect } from "react-redux";

import CharacterSelector from "../../components/CharacterSelector";
import ActionCreators from "../../redux/actions";
import * as characters from "../../characters.json";

const mapDispatchToProps = dispatch => ({
  handleOnSelect: (character, url) => {
    if (url === "") {
      dispatch(ActionCreators.replaceMovies([]));
    } else {
      fetch(url).then(response =>
        response.json().then(async charData => {
          if (charData.films === undefined) {
            dispatch(ActionCreators.replaceMovies([]));
          } else {
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
          }
        })
      );
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
