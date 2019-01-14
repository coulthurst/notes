import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";

class Nav extends React.Component {
  state = {
    isOpen: false,
    collapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  render() {
    return (
      <Navbar dark>
        <NavbarToggler onClick={this.toggleCollapse("navbarCollapse1")} />
        <NavbarNav left />
        <NavbarNav right>
          <NavbarBrand>
            <strong style={{ color: "#2ecc71" }}>NOTES</strong>
          </NavbarBrand>
        </NavbarNav>
      </Navbar>
    );
  }
}

export default Nav;
