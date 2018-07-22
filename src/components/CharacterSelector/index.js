import React from "react";
import PropTypes from "prop-types";
import { DropdownButton, MenuItem } from "react-bootstrap";


const CharacterSelector = (props) => {
  const {characters, handleOnSelect} = props;
  return (
    <DropdownButton bsStyle="success" id="dropdown-characters" title="Choose a character">
        <MenuItem onSelect={() => handleOnSelect("None", "")} active>None</MenuItem>
        {characters.map((character, index) => {
          return (
            <MenuItem
              key={index}
              onSelect={() => handleOnSelect(character.name, character.url)}
              eventKey={index}
            >
              {character.name}
            </MenuItem>
          );
        })}
      </DropdownButton>
    );
}

CharacterSelector.propTypes = {
  characters: PropTypes.array.isRequired,
  handleOnSelect: PropTypes.func.isRequired,
}

export default CharacterSelector;
