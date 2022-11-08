import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Append } from "./Append";

export default function Dashboard(props) {
  // creating a class
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // joining a class setstates
  const [show_joinClass, setshow_joinClass] = useState(false);
  const handleClose_joinClass = () => setshow_joinClass(false);
  const handleshow_joinClass = () => setshow_joinClass(true);

  // center modal setstates
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose_center = () => setModalShow(false);
  const handleShow_center = () => setModalShow(true);

  // profile setstates
  const [showProfile, setShowProfile] = useState(false);
  const handleCloseProfile = () => setShowProfile(false);
  const handleShowProfile = () => setShowProfile(true);

  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Add components
  const [components, setComponents] = useState(["Beginner's Guide"]);

  function addComponent() {
    setComponents([...components, `{text}`]);
  }

  // on submitting createClass

  const generate = () => {
    setModalShow(true);
  };

  // generating random code
  let randomString = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 6; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-dark  fw-semibold" id="navbar">
        <div className="container-fluid ">
          <a className="navbar-brand fs-1  text-info" href="#">
            Welcome !{props.userName}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ms-5">
                <a className="nav-link active text-light" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item ms-5 ">
                <a className="nav-link active text-light" href="#">
                  Coding Quiz
                </a>
              </li>
            </ul>
            <form
              className="d-flex justify-content-space-between"
              role="search"
            >
              <ul className="me-5 pe-4">
                <li className="nav-item dropdown" id="li">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   <button className="btn btn-info mt-3"><i class="fa-solid fa-plus-large">+</i> </button> 
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={handleShow}
                      >
                        Create a class
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={handleshow_joinClass}
                      >
                        Join a class
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <Button variant="info fw-bold m-0 rounded-circle" onClick={handleShowProfile}>
                Profile
              </Button>
            </form>
          </div>
        </div>
      </nav>

      {/* --------------------BODY------------------------- */}
      <div className=" d-flex p-5 " id="dashboard-body">
        {components.map((item, i) => (
          <Append text={item} />
        ))}
      </div>

      {/* POP-UP CREATE CLASS */}
      <div id="pop">
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Create A Class </Modal.Title>
        </Modal.Header>

        <Form>
          <Form.Group
            className="mb-3 p-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Class Name</Form.Label>
            <Form.Control type="text" required autoFocus />
            <Form.Label>Section</Form.Label>
            <Form.Control type="text" />
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" />
            <br />
            {/* <Form.Control type="submit" className="btn btn-primary"    onClick={generate} /> */}
          </Form.Group>

          <Modal.Footer onClick={handleClose}>
            <Form.Control
              type="submit"
              className="btn btn-primary"
              onClick={generate}
            />
            {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          </Modal.Footer>
        </Form>
      </Modal> </div>

      {/* ----------------------------------------------- */}

      {/* POP-UP CODE ACCEPTING */}
      <Modal show={show_joinClass} onHide={handleClose_joinClass} id="pop">
        <Modal.Header closeButton>
          <Modal.Title>Join Class</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group
            className="mb-3 p-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Enter the code</Form.Label>
            <Form.Control type="text" required autoFocus />
          </Form.Group>

          <Modal.Footer>
            <Form.Control type="submit" autoFocus />
          </Modal.Footer>
        </Form>
      </Modal>
      {/* ----------------------------------------------------- */}

      {/* POP-UP CODE GENERATED  */}
      <Modal
        show={modalShow}
        onHide={handleClose_center}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="pop"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Code Generated !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="ps-3">
            Share the code to invite other candidates
          </span>
          <div className=" container text-center m-3">
            <span className=" text-red fs-3 fw-bold"> {randomString} </span>
          </div>
        </Modal.Body>
        <Modal.Footer onClick={addComponent}>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      {/* -------------------------------------------------------------- */}

      {/* profile */}
      <Modal show={showProfile} onHide={handleCloseProfile}>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>

        <div className="card mb-4">
          <div className="card-body text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              alt="avatar"
              className="rounded-circle img-fluid"
              style={{ width: 150 }}
            />
            <h5 className="my-3">userName</h5>
            <p className="text-muted mb-1">Full Stack Developer</p>
            <p className="text-muted mb-4"></p>
            <div className="d-flex justify-content-center mb-2 p-2">
              <button type="button" className="btn btn-primary">
                Edit Profile
              </button>
              <button type="button" className="btn btn-outline-primary ms-1">
                Anouncements
              </button>
            </div>
          </div>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseProfile}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* -------------------------------------------------------- */}
    </>
  );
}
