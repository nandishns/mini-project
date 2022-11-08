import React,{useState} from 'react';
// import './style.css';
import { Modal } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Grade from './Grade';


const Append = (props) => { 
    const [fullscreen, setFullscreen] = useState(true);
    const [showFull, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }

    const [fullscreenGrades, setFullscreenGrades] = useState(true);
    const [showFullGrades, setShowGrades] = useState(false);
  
    function handleShowGrades(breakpoint) {
      setFullscreenGrades(breakpoint);
      setShowGrades(true);
    }

    const [showAlert, setShowAlert] = useState(false);

    const handleCloseAlert = () => setShowAlert(false);
    const handleShowAlert = () => setShowAlert(true);
  
  
  return ( 
    <>
    <div className="container p-3 d-flex"> 

<div className="card" style={{ width: "18rem"  }} id="card" >
  <img src="https://www.gstatic.com/classroom/themes/img_code.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.text}</h5>
    <p className="card-text">
      <div className="container p-5"></div>
    </p>
    <div className="d-flex flex-column justify-content-between">
    <a href="#" className="btn btn-primary mb-3" onClick={() => handleShow('xxl-down')}>
      Create Assignment
    </a>
    <a href="#" className="btn btn-primary " onClick={() => handleShowGrades('xxl-down')}>
      View Grades
    </a>
    </div>
  </div>
</div>
      {/* <h1>{props.text}</h1>  */}
     </div> 
     <Modal show={showFull} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="">
            <div className="container">
        <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Tile
    </label>
   
    <input
      type="text"
      className="form-control"
      id="exampleFormControlInput1"
      
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
      Example textarea
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={4}
      defaultValue={""}
      placeholder="Intructions (optional)"
    />
    <div className="mb-3">
  
  <div className="container mt-5">
  <input
    className="form-control"
    type="file"
    id="formFileMultiple"
    multiple=""
  />
  <div className="container text-center mt-5">
    <input className='btn btn-primary' type="submit" onClick={handleShowAlert} />
  </div>
</div>
</div>

  </div> </div></form>
        </Modal.Body>
        
      </Modal>


      <Modal show={showFullGrades} fullscreen={fullscreenGrades} onHide={() => setShowGrades(false)} id="pop">
        <Modal.Header closeButton>
          <Modal.Title>Grade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Grade/>
        </Modal.Body>
       



      </Modal>



      <Modal show={showAlert} onHide={handleCloseAlert} animation={false} id="pop">
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Success !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have succesfully created assignment</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
   
      </>
  ); 
  
}; 

export {Append};