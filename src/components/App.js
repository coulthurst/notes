import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import NoteList from "./NoteList/NoteList";

class App extends Component {
  state = {
    selectedNote: null
  };
  notes = [
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
  ];
  selectNote = id => {
    this.setState({ selectedNote: id });
    const [selectedNote] = this.notes.filter(note => {
      return note.id === id;
    });
    console.log(selectedNote);
  };

  render() {
    console.log(this);
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="4">
            <NoteList notes={this.notes} selectNote={this.selectNote} />
          </MDBCol>

          <MDBCol size="8">
            <MDBContainer style={{ marginTop: "20px" }}>
              <h1>Notes</h1>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
