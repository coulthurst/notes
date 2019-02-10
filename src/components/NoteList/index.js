import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./NoteList.css";
import logo from "./logo.png";

import {
  MDBContainer,
  MDBListGroup,
  MDBCard,
  MDBCardBody,
  MDBInput
} from "mdbreact";
import Note from "../Note/";

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
            hint="Search"
            id="note-list--search"
            labelClass="note-list--search_label"
            containerClass="note-list--search_container"
            // onChange={onSearchInputChange}
          />
          <img
            className="logo"
            style={{ height: "42px" }}
            src={logo}
            alt="Logo"
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
