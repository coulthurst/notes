import React, { Component } from "react";

//TODO: create a function that only trims strings at the end of words so it displays "more..." instead of "mo..."

class Note extends Component {
  selectNote(e) {
    e.preventDefault();
    this.props.selectNote(this.props.note.id);
  }
  render() {
    return (
      <a className="note ui raised card" onClick={e => this.selectNote(e)}>
        <div className="content">
          <div className="header">{this.props.note.title}</div>
          <div className="description">
            <p>{this.props.note.body.substring(0, 50)}...</p>
          </div>
        </div>
      </a>
    );
  }
}

export default Note;
