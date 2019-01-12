import React, { Component } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBCardBody,
  MDBCardHeader
} from "mdbreact";

class NoteEditor extends Component {
  onTitleInputChange = e => {
    this.props.onUpdateNoteTitle(e.target.value);
  };
  onBodyInputChange = e => {
    this.props.onUpdateNoteBody(e.target.value);
  };
  onNoteSave = () => {
    console.log(this.props.note);
    this.props.onNoteSave(this.props.note);
  };

  render() {
    return (
      <div>
        <div>
          <MDBContainer>
            <MDBCard style={{ marginTop: "1rem" }}>
              <MDBCardHeader color="deep-orange lighten-1">
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
              <MDBCardBody>
                <MDBCardText>
                  <input
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
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default NoteEditor;
