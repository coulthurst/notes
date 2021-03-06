import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MDBContainer, MDBBtn, MDBIcon } from "mdbreact";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "../fire";
import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";
import BottomBar from "./BottomBar";
import SearchBar from "./SearchBar";
import logo from "../imgs/logo.png";

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
		notes: [],
		term: "",
		filteredNotes: []
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

			this.setState({ notes: firebaseArr, filteredNotes: firebaseArr });
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

		this.getNoteData(firebase.database().ref("notes"));
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

	onUpdateSearch = term => {
		this.setState({ term: term, filteredNotes: this.filterNotes(term) });
	};

	filterNotes = term => {
		if (this.state.filteredNotes !== []) {
			var notes = this.state.notes;
			var updatedList = notes;
			updatedList = updatedList.filter(function(note) {
				return note.title.toLowerCase().search(term.toLowerCase()) !== -1;
			});
			return updatedList;
		} else {
			return this.state.notes;
		}
	};

	render() {
		return (
			<div>
				<Router>
					<div>
						<Route
							exact
							path='/notes'
							render={() => (
								<div>
									<MDBContainer fluid>
										<SearchBar
											onUpdateSearch={this.onUpdateSearch}
											term={this.state.term}
										/>
										<img
											className='logo'
											style={{ height: "42px" }}
											src={logo}
											alt='Logo'
										/>
										<NoteList
											notes={this.state.filteredNotes}
											onNoteSelect={this.onNoteSelect}
										/>
										<MDBBtn className='add_note_btn' onClick={this.onAddNote}>
											<MDBIcon icon='plus' />
										</MDBBtn>
									</MDBContainer>
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
					</div>
				</Router>

				<ToastContainer />
			</div>
		);
	}
}

export default App;
