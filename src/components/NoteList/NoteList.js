import React from "react";
import {
  MDBContainer,
  MDBListGroup,
  MDBCard,
  MDBCardBody,
  MDBInput
} from "mdbreact";
import Note from "../Note/Note";

const NoteList = ({ notes, onNoteSelect }) => {
  const renderedList = notes.map(note => {
    return <Note key={note.id} note={note} onNoteSelect={onNoteSelect} />;
  });

  const onSearchInputChange = e => {
    let value = e.target.value;
    alert(value);
  };

  return (
    <div className="note-list">
      <MDBCard>
        <MDBCardBody>
          <MDBInput
            icon="search"
            hint="Search"
            id="note-list--search"
            labelClass="note-list--search_label"
            containerClass="note-list--search_container"
            onChange={onSearchInputChange}
          />
          <div className="note-list--overflow">
            <MDBListGroup>{renderedList}</MDBListGroup>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default NoteList;
