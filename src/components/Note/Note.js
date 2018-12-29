import React, { Component } from "react";
import { MDBListGroupItem } from "mdbreact";

//TODO: create a function that only trims strings at the end of words so it displays "more..." instead of "mo..."

class Note extends Component {
  // selectNote(e) {
  //   e.preventDefault();
  //   this.props.selectNote(this.props.props.id);
  //   console.log(this);
  // }
  render() {
    return (
      <MDBListGroupItem
        onClick={() => this.props.selectNote(this.props.props.id)}
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex w-100 justify-content-between">
          <h3 className="mb-1">{this.props.props.title}</h3>
        </div>
        <p className="mb-1">{this.props.props.body.substring(0, 50)}...</p>
      </MDBListGroupItem>
    );
  }
}

export default Note;
