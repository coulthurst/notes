import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import NoteList from "./NoteList/NoteList";
import NoteEditor from "./NoteEditor/NoteEditor";

class App extends Component {
  state = {
    selectedNote: {
      id: null,
      title: "",
      body: "",
      location: null,
      date: null,
      tags: null
    },
    notes: [
      {
        id: 1,
        author: "coulthurst",
        title: "First Note",
        body: "This is the first note. Hopefully this works.",
        location: null,
        date: "Dec 27th",
        tags: null
      },
      {
        id: 2,
        author: "coulthurst",
        title: "Groceries",
        body:
          "Apples, pears, steak, mushrooms, wine, cheese, more cheese, and another cheese",
        location: null,
        date: "Dec 27th",
        tags: null
      },
      {
        id: 3,
        author: "colthurst",
        title: "To-Do List",
        body:
          "Originally I was going to make a to-do list, but I think a note taking app will be much better",
        location: null,
        date: "Dec 27th",
        tags: null
      }
    ]
  };

  onNoteSelect = note => {
    this.setState({ selectedNote: note });
  };
  onUpdateNoteTitle = text => {
    let newNote = { ...this.state.selectedNote };
    newNote.title = text;
    console.log(newNote);
    this.setState({ selectedNote: newNote });
  };
  onUpdateNoteBody = text => {
    let newNote = { ...this.state.selectedNote };
    newNote.body = text;
    this.setState({ selectedNote: newNote });
  };

  onNoteSave = note => {
    // check if the note already exists
    let newNoteList = this.state.notes;
    for (let i = 0; i < newNoteList.length; i++) {
      if (note.id === newNoteList[i].id) {
        console.log("here");
        newNoteList[i] = note;
        this.setState({ notes: newNoteList });
        return;
      }
    }
  };

  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="4">
            <NoteList
              notes={this.state.notes}
              onNoteSelect={this.onNoteSelect}
            />
          </MDBCol>

          <MDBCol size="8">
            <MDBContainer style={{ marginTop: "20px" }}>
              <NoteEditor
                note={this.state.selectedNote}
                onUpdateNoteTitle={this.onUpdateNoteTitle}
                onUpdateNoteBody={this.onUpdateNoteBody}
                onNoteSave={this.onNoteSave}
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
