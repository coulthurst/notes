import React, { Component } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill"; // ES6

class NoteEditor extends Component {
  state = {
    text: ""
  };

  componentDidMount() {
    console.log("did");
    console.log(this.props);
    this.setState({ text: this.props.note.body });
  }
  onTitleInputChange = e => {
    this.props.onUpdateNoteTitle(e.target.value);
  };
  onChange = value => {
    this.setState({ text: value });
    // this.props.onUpdateNoteBody(this.props.note.body);
  };
  onNoteSave = () => {
    let note = this.props.note;
    note.body = this.state.text;
    this.props.onNoteSave(note);
  };
  onAddNote = () => {
    this.props.onAddNote();
  };
  render() {
    console.log("asdf");
    console.log(this.props);

    return (
      <div className="note-editor">
        <MDBCard>
          <MDBCardHeader className="note-title">
            <input
              value={this.props.note.title}
              onChange={this.onTitleInputChange}
              onBlur={this.onNoteSave}
              type="text"
              style={{
                width: "auto",
                backgroundColor: "transparent",
                color: "#fff",
                border: "none"
              }}
            />
            <MDBIcon
              icon="trash-o"
              className="fa-2x"
              style={{ float: "right" }}
            />
            {/* <MDBIcon
              icon="ellipsis-v"
              className="fa-2x"
              style={{ float: "right" }}
            /> */}

            <MDBIcon
              icon="save"
              className="fa-2x"
              style={{ float: "right" }}
              onClick={this.onNoteSave}
            />
          </MDBCardHeader>
          <MDBCardBody className="note-body">
            <MDBCardText>
              <ReactQuill
                defaultValue={this.props.note.body}
                value={this.state.text}
                onChange={this.onChange}
                ref={this.ref}
              />
              {/* <textarea
                value={this.props.note.body}
                onChange={this.onBodyInputChange}
                onBlur={this.onNoteSave}
                type="text"
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  border: "none"
                }}
              /> */}
            </MDBCardText>
            {/* <MDBBtn color="deep-orange">go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
        <MDBBtn id="btn--add" onClick={this.onAddNote}>
          <MDBIcon icon="plus" />
          &nbsp;&nbsp;&nbsp;Add Note
        </MDBBtn>
      </div>
    );
  }
}

export default NoteEditor;
