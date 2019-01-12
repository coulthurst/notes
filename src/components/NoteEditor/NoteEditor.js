import React from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

const PanelPage = props => {
  return (
    <MDBContainer style={{ marginTop: "20px" }}>
      <MDBCard className="card-body note-editor" style={{ marginTop: "1rem" }}>
        <MDBCardTitle>Panel Title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the panel title and make up the
          bulk of the panel's content.
        </MDBCardText>
        <div className="flex-row">
          <a href="#!">MDBCard link</a>
          <a href="#!" style={{ marginLeft: "1.25rem" }}>
            Another link
          </a>
        </div>
      </MDBCard>
    </MDBContainer>
  );
};

export default PanelPage;
