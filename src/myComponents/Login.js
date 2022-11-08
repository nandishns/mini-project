import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {
   

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
 

  return (
    <>
      <div className=" d-flex justify-content-center fw-bold " id='login_page'>
    <MDBContainer className=" m-5 d-flex p-3 flex-column w-70" id='login'>
        
      <MDBTabs pills justify className='mb-3 p-3  d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
            
          
          <div className=" mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            {/* <a href="!#">Forgot password?</a> */}
          </div>

         <Link to="/dashboard"> <MDBBtn className="mb-4 w-100">Sign in</MDBBtn> </Link>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

         
          <MDBInput wrapperClass='mb-4'  label='Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <div className=" mb-3">
            <p>Sign Up as:</p>

           </div>
          <div className=" d-flex justify-content-between text-dark mx-2 mb-3">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Student' />
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Teacher' />

           </div>
          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
    <div className="container m-5 ">
    <lottie-player
  src="https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json"
  background="transparent"
  speed={1}
  style={{ width: 500, height: 500 }}
  loop=""
  autoPlay=""
/>

    </div>
    </div>
    

</>
    
  );
}

export default Login;