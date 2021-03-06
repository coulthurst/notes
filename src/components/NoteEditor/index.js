import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MDBIcon } from "mdbreact";
import "./NoteEditor.css";
import ReactQuill from "react-quill";

class NoteEditor extends Component {
	constructor(props) {
		super(props);
		this.onHandleChange = this.onHandleChange.bind(this);
	}

	onTitleInputChange = e => {
		this.props.onUpdateNoteTitle(e.target.value);
	};
	onHandleChange = value => {
		this.props.note.body = value;
	};
	onNoteSave = () => {
		this.props.onNoteSave(this.props.note);
	};
	onNoteDelete = () => {
		this.props.onNoteDelete(this.props.note);
	};

	render() {
		return (
			<div className='note-editor'>
				<div className='note-editor_nav'>
					<div className='note-editor_button'>
						<Link to='/notes'>
							<MDBIcon className='icon-x' icon='times' />
						</Link>
					</div>
					<input
						value={this.props.note.title}
						onChange={this.onTitleInputChange}
						type='text'
						style={{
							width: "auto",
							backgroundColor: "transparent",
							color: "#fff",
							border: "none"
						}}
					/>
				</div>

				<ReactQuill
					value={this.props.note.body}
					onChange={this.onHandleChange}
				/>
			</div>
		);
	}
}

export default NoteEditor;
