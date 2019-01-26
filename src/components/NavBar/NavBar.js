import React from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarNav,
	NavbarToggler,
	MDBIcon,
	MDBContainer,
	MDBRow
} from "mdbreact";
import logo from "./logo.png";

class Nav extends React.Component {
	toggleSideNav() {
		console.log("asdf");
		document.querySelector(".sideNav").classList.toggle("open");
	}

	render() {
		return (
			<div>
				<Navbar dark>
					<NavbarToggler onClick={this.toggleSideNav} />
					<NavbarNav left />
					<NavbarNav right>
						<NavbarBrand>
							<img style={{ height: "24px" }} src={logo} alt='Logo' />
						</NavbarBrand>
					</NavbarNav>
				</Navbar>
				<div className='sideNav'>
					<div className='sideNav--banner'>
						<div className='icon-bg'>
							<MDBIcon icon='user-circle' className='fa-5x' />
						</div>
						<MDBContainer className='sideNav--container'>
							<MDBRow>
								<a href='#' id='btn--sign-in'>
									Sign in with Google
								</a>
							</MDBRow>
						</MDBContainer>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;
