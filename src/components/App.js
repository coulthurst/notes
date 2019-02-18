import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "../fire";
import NavBar from "./NavBar";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import BottomBar from "./BottomBar";

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

    if (fire != null) {
      const firebaseArr = Object.keys(fire).map(key => {
        return fire[key];
      });

      this.setState({ notes: firebaseArr, selectedNote: firebaseArr[0] });
    } else {
      this.onAddNote();
    }
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
    let newNote = { ...this.state.selectedNote };
    newNote.body = text;
    this.setState({ selectedNote: newNote });
  };

  onAddNote = () => {
    let newNoteKey = firebase
      .database()
      .ref()
      .child("notes")
      .push().key;
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    const note = {
      id: newNoteKey,
      title: "Untitled",
      body: "",
      dateCreated: `${month}/${day}/${year}`,
      lastEdited: `${month}/${day}/${year}`
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
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    note.lastEdited = `${month}/${day}/${year}`;
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

    toast.success("Note Saved Succesfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  onNoteDelete = note => {
    firebase
      .database()
      .ref()
      .child("notes/" + note.id)
      .remove();

    this.getNoteData(firebase.database().ref("notes"));
  };

  onNoteFavorite = note => {
    if (note.isFavorite === true) {
      note.isFavorite = false;
      this.onNoteSave(note);
    } else {
      note.isFavorite = true;
      this.onNoteSave(note);
    }
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <NoteList
                    notes={this.state.notes}
                    onNoteSelect={this.onNoteSelect}
                  />
                  <MDBBtn className="add_note_btn" onClick={this.onAddNote}>
                    <MDBIcon icon="plus" />
                  </MDBBtn>
                </div>
              )}
            />
            <Route
              path={`/notes/${this.state.selectedNote.id}`}
              render={() => (
                <div>
                  <NoteEditor
                    note={this.state.selectedNote}
                    onUpdateNoteTitle={this.onUpdateNoteTitle}
                    onUpdateNoteBody={this.onUpdateNoteBody}
                    onNoteSave={this.onNoteSave}
                    onNoteDelete={this.onNoteDelete}
                    onAddNote={this.onAddNote}
                  />
                  <BottomBar
                    note={this.state.selectedNote}
                    onNoteSave={this.onNoteSave}
                    onNoteDelete={this.onNoteDelete}
                    onNoteFavorite={this.onNoteFavorite}
                  />
                </div>
              )}
            />
            {/* <NoteEditor
              note={this.state.selectedNote}
              onUpdateNoteTitle={this.onUpdateNoteTitle}
              onUpdateNoteBody={this.onUpdateNoteBody}
              onNoteSave={this.onNoteSave}
              onNoteDelete={this.onNoteDelete}
              onAddNote={this.onAddNote}
            /> */}

            {/* <MDBContainer fluid style={{ marginTop: "70px" }}>
            <MDBRow>
              <MDBCol sm="12" md="4" className="pr-0">
                <NoteList
                  notes={this.state.notes}
                  onNoteSelect={this.onNoteSelect}
                />
              </MDBCol>

              <MDBCol sm="12" md="8">
                <NoteEditor
                  note={this.state.selectedNote}
                  onUpdateNoteTitle={this.onUpdateNoteTitle}
                  onUpdateNoteBody={this.onUpdateNoteBody}
                  onNoteSave={this.onNoteSave}
                  onNoteDelete={this.onNoteDelete}
                  onAddNote={this.onAddNote}
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer> */}
          </div>
        </Router>

        <ToastContainer />
      </div>
    );
  }
}

export default App;
