
import {Route,Routes}  from 'react-router-dom';
import './App.css';

import Assignments from './myComponents/Assignments'
import Dashboard from './myComponents/Dashboard';

// import Navbar from './myComponents/Navbar';
import Login from './myComponents/Login';
function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route exact path="/" element={<Login/>} ></Route>
      <Route exact path="/dashboard" element={<Dashboard/>} ></Route>
      <Route exact path="/assignments" element={<Assignments/>} ></Route>

    </Routes>
    
    {/* <Login/> */}
    </>
  
  
  );
}

export default App;
