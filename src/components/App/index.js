import React, { Component } from "react";
import { Grid, PageHeader } from "react-bootstrap";
import "./App.css";
import CharacterSelectorContainer from "../../containers/CharacterSelectorContainer";
import MovieListContainer from "../../containers/MovieListContainer";
import SelectedCharacterContainer from "../../containers/SelectedCharacterContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <PageHeader>
            Welcome to the Star Wars Movie Query! <small>Please choose a character</small>
          </PageHeader>
          <CharacterSelectorContainer />
          <SelectedCharacterContainer />
          <MovieListContainer />
        </Grid>
      </div>
    );
  }
}

export default App;
