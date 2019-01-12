import React, { Component } from "react";
import { MDBContainer, MDBListGroup } from "mdbreact";
import Note from "../Note/Note";

const NoteList = ({ notes, onNoteSelect }) => {
  const renderedList = notes.map(note => {
    return <Note key={note.id} note={note} onNoteSelect={onNoteSelect} />;
  });

  return (
    <MDBContainer className="note-list" style={{ marginTop: "20px" }}>
      <MDBListGroup>{renderedList}</MDBListGroup>
    </MDBContainer>
  );
};

export default NoteList;
