import React, { Component } from "react";
import { MDBInput } from "mdbreact";

class SearchBar extends Component {
	onUpdateSearch = e => {
		this.props.onUpdateSearch(e.target.value);
	};

	render() {
		return (
			<MDBInput
				hint='Search'
				type='text'
				id='note-list--search'
				labelClass='note-list--search_label'
				containerClass='note-list--search_container'
				value={this.props.term}
				onChange={this.onUpdateSearch}
			/>
		);
	}
}

export default SearchBar;
