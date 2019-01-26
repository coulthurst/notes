import React from "react";
import {
  MDBNavbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBListGroup,
  MDBListGroupItem,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import logo from "./logo.png";

class Nav extends React.Component {
  toggleSideNav() {
    document.querySelector(".sideNav").classList.toggle("open");
  }
  onNoteSave = () => {
    this.props.onNoteSave(this.props.note);
    this.toggleSideNav();
  };
  onNoteDelete = () => {
    this.props.onNoteDelete(this.props.note);
    this.toggleSideNav();
  };
  onAddNote = () => {
    this.props.onAddNote();
    this.toggleSideNav();
  };
  render() {
    return (
      <div>
        <MDBNavbar dark fixed="top">
          <NavbarToggler onClick={this.toggleSideNav} />
          <NavbarNav left />
          <NavbarNav right>
            <NavbarBrand>
              <img style={{ height: "24px" }} src={logo} alt="Logo" />
            </NavbarBrand>
          </NavbarNav>
        </MDBNavbar>
        <div className="sideNav">
          <div className="sideNav--banner">
            <NavbarToggler onClick={this.toggleSideNav}>
              <MDBIcon className="fa-1x" icon="arrow-left" />
            </NavbarToggler>
            <NavbarNav left />

            <div className="icon-bg">
              <MDBIcon icon="user-circle" className="fa-5x" />
            </div>
            <MDBContainer className="sideNav--container">
              <MDBListGroup>
                <MDBListGroupItem
                  className="sideNav--container-btn"
                  onClick={this.onAddNote}
                >
                  <MDBIcon className="fa-1x" icon="plus" />
                  &nbsp;&nbsp;&nbsp;New
                </MDBListGroupItem>
                <MDBListGroupItem
                  className="sideNav--container-btn"
                  onClick={this.onNoteSave}
                >
                  <MDBIcon className="fa-1x" icon="save" />
                  &nbsp;&nbsp;&nbsp;Save
                </MDBListGroupItem>
                <MDBListGroupItem
                  className="sideNav--container-btn"
                  onClick={this.onNoteDelete}
                >
                  <MDBIcon className="fa-1x" icon="trash" />
                  &nbsp;&nbsp;&nbsp;Delete
                </MDBListGroupItem>
                <MDBListGroupItem className="sideNav--container-btn">
                  <MDBIcon className="fa-1x" icon="user-circle" />
                  &nbsp;&nbsp;&nbsp;Sign In
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
