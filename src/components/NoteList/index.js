import React from "react";
import "./NoteList.css";

import { MDBListGroup } from "mdbreact";
import Note from "../Note/";

const NoteList = ({ notes, onNoteSelect }) => {
	const renderedList = notes.map(note => {
		return <Note key={note.id} note={note} onNoteSelect={onNoteSelect} />;
	});

	return (
		<div className='note-list'>
			<div className='note-list--overflow'>
				<MDBListGroup>{renderedList}</MDBListGroup>
			</div>
		</div>
	);
};

export default NoteList;
