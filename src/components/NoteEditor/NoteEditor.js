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
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill";

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
	onAddNote = () => {
		this.props.onAddNote();
	};
	render() {
		return (
			<div className='note-editor'>
				<MDBCard>
					<MDBCardHeader className='note-title'>
						<input
							value={this.props.note.title}
							onChange={this.onTitleInputChange}
							// onBlur={this.onNoteSave}
							type='text'
							style={{
								width: "auto",
								backgroundColor: "transparent",
								color: "#fff",
								border: "none"
							}}
						/>
						<MDBIcon
							icon='trash-o'
							className='fa-2x'
							style={{ float: "right" }}
							onClick={this.onNoteDelete}
						/>
						{/* <MDBIcon
              icon="ellipsis-v"
              className="fa-2x"
              style={{ float: "right" }}
            /> */}

						<MDBIcon
							icon='save'
							className='fa-2x'
							style={{ float: "right" }}
							onClick={this.onNoteSave}
						/>
					</MDBCardHeader>
					<MDBCardBody className='note-body'>
						<MDBCardText>
							<ReactQuill
								value={this.props.note.body}
								onChange={this.onHandleChange}
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
				<MDBBtn id='btn--add' onClick={this.onAddNote}>
					<MDBIcon icon='plus' />
					&nbsp;&nbsp;&nbsp;Add Note
				</MDBBtn>
			</div>
		);
	}
}

export default NoteEditor;
