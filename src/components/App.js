import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import firebase from "../fire";
import NavBar from "./NavBar/NavBar";
import NoteList from "./NoteList/NoteList";
import NoteEditor from "./NoteEditor/NoteEditor";

// fire base

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
    notes: []
  };

  componentWillMount() {
    const firebaseRef = firebase.database().ref("notes");
    this.getNoteData(firebaseRef);
  }

  getNoteData = async firebaseRef => {
    const fire = await firebaseRef.once("value").then(function(snapshot) {
      return snapshot.val();
    });

    const firebaseArr = Object.keys(fire).map(key => {
      return fire[key];
    });
    this.setState({ notes: firebaseArr, selectedNote: firebaseArr[0] });
  };

  onNoteSelect = note => {
    this.setState({ selectedNote: note });
  };

  onUpdateNoteTitle = text => {
    let newNote = { ...this.state.selectedNote };
    newNote.title = text;
    this.setState({ selectedNote: newNote });
  };

  onUpdateNoteBody = text => {
    console.log(text);
    let newNote = { ...this.state.selectedNote };
    newNote.body = text;
    this.setState({ selectedNote: newNote });
  };

  onAddNote = () => {
    let firebaseRef = firebase.database().ref("notes");
    let newNoteKey = firebase
      .database()
      .ref()
      .child("notes")
      .push().key;
    let time = +new Date();

    const note = {
      id: newNoteKey,
      title: "Untitled",
      body: "",
      dateCreated: time,
      lastEdited: time
    };

    this.setState({
      selectedNote: note,
      notes: [...this.state.notes, note]
    });

    firebase
      .database()
      .ref()
      .child("notes/" + newNoteKey)
      .set(note);
  };

  onNoteSave = note => {
    // add to firebase
    console.log(note.id);
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    note.lastEdited = `${month}/${day}/${year}`;
    let firebaseRef = firebase.database().ref("notes");
    let id = this.state.selectedNote.id;
    let newNoteList = this.state.notes;

    for (let i = 0; i < newNoteList.length; i++) {
      if (note.id === newNoteList[i].id) {
        newNoteList[i] = note;
        this.setState({ notes: newNoteList });
      }
    }

    firebase
      .database()
      .ref()
      .child("notes/" + id)
      .set(note);
  };

  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol size="4" className="pr-0">
                <NoteList
                  notes={this.state.notes}
                  onNoteSelect={this.onNoteSelect}
                />
              </MDBCol>

              <MDBCol size="8">
                <NoteEditor
                  note={this.state.selectedNote}
                  onUpdateNoteTitle={this.onUpdateNoteTitle}
                  onUpdateNoteBody={this.onUpdateNoteBody}
                  onNoteSave={this.onNoteSave}
                  onAddNote={this.onAddNote}
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default App;
