import React from "react";
import { MDBContainer, MDBListGroup, MDBCard, MDBCardBody } from "mdbreact";
import Note from "../Note/Note";

const NoteList = ({ notes, onNoteSelect }) => {
  const renderedList = notes.map(note => {
    return <Note key={note.id} note={note} onNoteSelect={onNoteSelect} />;
  });

  return (
    <div className="note-list">
      <MDBCard style={{ marginTop: "1rem" }}>
        <MDBCardBody>
          <MDBListGroup>{renderedList}</MDBListGroup>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default NoteList;
