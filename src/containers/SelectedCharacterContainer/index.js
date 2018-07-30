import React from "react";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";

import "./selectedCharacter.css";

// component to diplay the character that was selected
const SelectedCharacter = props => {
  const { selectedCharacter } = props;
  const show = selectedCharacter !== "None" && selectedCharacter !== "";
  return (
    <div className="selected-character">
      {show  &&
        <Alert bsStyle="success">
          You have selected {props.selectedCharacter}
        </Alert>}
    </div>
  );
};

const mapStateToProps = state => ({
  selectedCharacter: state.selected
});

export default connect(mapStateToProps)(SelectedCharacter);
