import React from "react";
import { MDBIcon } from "mdbreact";

import "./bottomBar.css";

class BottomBar extends React.Component {
  onNoteSave = () => {
    this.props.onNoteSave(this.props.note);
  };
  onNoteDelete = () => {
    this.props.onNoteDelete(this.props.note);
  };
  onNoteFavorite = () => {
    this.props.onNoteFavorite(this.props.note);
  };
  render() {
    console.log(this.props.note.isFavorite);
    return (
      <div className="bottom-bar">
        <div className="bottom-bar_button_container">
          <div className="bottom-bar_button">
            <MDBIcon
              className="icon-delete"
              icon="trash"
              onClick={this.onNoteDelete}
            />
          </div>
          <div className="bottom-bar_button">
            <MDBIcon
              className={
                "icon-favorite " +
                (this.props.note.isFavorite ? "is-favorite" : "")
              }
              icon="star"
              onClick={this.onNoteFavorite}
            />
          </div>
          <div className="bottom-bar_button">
            <MDBIcon
              className="icon-save"
              icon="save"
              onClick={this.onNoteSave}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BottomBar;
