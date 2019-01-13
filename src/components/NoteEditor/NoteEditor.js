import React, { Component } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";

class NoteEditor extends Component {
  onTitleInputChange = e => {
    this.props.onUpdateNoteTitle(e.target.value);
  };
  onBodyInputChange = e => {
    this.props.onUpdateNoteBody(e.target.value);
  };
  onNoteSave = () => {
    this.props.onNoteSave(this.props.note);
  };
  onAddNote = () => {
    this.props.onAddNote();
  };
  render() {
    return (
      <div className="note-editor">
        <MDBCard style={{ marginTop: "1rem" }}>
          <MDBCardHeader className="note-title">
            <input
              value={this.props.note.title}
              onChange={this.onTitleInputChange}
              onBlur={this.onNoteSave}
              type="text"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                color: "#fff",
                border: "none"
              }}
            />
          </MDBCardHeader>
          <MDBCardBody className="note-body">
            <MDBCardText>
              <textarea
                value={this.props.note.body}
                onChange={this.onBodyInputChange}
                onBlur={this.onNoteSave}
                type="text"
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  border: "none"
                }}
              />
            </MDBCardText>
            {/* <MDBBtn color="deep-orange">go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
        <MDBBtn id="btn--add" onClick={this.onAddNote}>
          Add Note
        </MDBBtn>
      </div>
    );
  }
}

export default NoteEditor;
