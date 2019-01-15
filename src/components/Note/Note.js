import React from "react";
import { MDBListGroupItem } from "mdbreact";

const Note = ({ note, onNoteSelect }) => {
  return (
    <MDBListGroupItem
      onClick={() => onNoteSelect(note)}
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex w-100 justify-content-between">
        <h3 className="mb-1">{note.title}</h3>
      </div>
      <p className="mb-1">Last edited: {note.lastEdited}</p>
    </MDBListGroupItem>
  );
};

export default Note;
