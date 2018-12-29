import React, { Component } from "react";
import { MDBContainer, MDBListGroup } from "mdbreact";

import Note from "../Note/Note";

//To do: create map function to display each individual note

//Props:
// notes = array of notes
// selectNote = function to select a note passed from App

class NoteList extends Component {
  noteList = [];

  componentWillMount() {
    this.noteList = this.props.notes.map(note => (
      <Note key={note.id} {...note} selectNote={this.props.selectNote} />
    ));
  }

  render() {
    // console.log(this.props);
    return (
      <MDBContainer className="note-list" style={{ marginTop: "20px" }}>
        <MDBListGroup>{this.noteList}</MDBListGroup>
      </MDBContainer>
    );
  }
}

export default NoteList;
