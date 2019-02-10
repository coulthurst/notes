import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Note.css";

import { MDBListGroupItem } from "mdbreact";
const Note = ({ note, onNoteSelect }) => {
  console.log(note);
  return (
    <MDBListGroupItem
      onClick={() => onNoteSelect(note)}
      style={{ cursor: "pointer" }}
    >
      <Link to={`/notes/${note.id}`}>
        <div className="d-flex w-100 justify-content-between">
          <h3 className="mb-1">{note.title}</h3>
        </div>
        <p className="mb-1">Last edited: {note.lastEdited}</p>
      </Link>
    </MDBListGroupItem>
  );
};

export default Note;
