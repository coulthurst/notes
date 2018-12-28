import React, { Component } from "react";
import Note from "../Note/Note";

//To do: create map function to display each individual note

class NoteList extends Component {
  noteList = [];

  componentWillMount() {
    this.noteList = this.props.notes.map(note => (
      <Note key={note.id} note={note} selectNote={this.selectNote} />
    ));
  }
  selectNote(id) {
    console.log(this);
  }

  render() {
    console.log(this);
    return (
      <div className="note-list ui" style={{ margin: "20px" }}>
        {this.noteList}
      </div>
    );
  }
}

export default NoteList;
