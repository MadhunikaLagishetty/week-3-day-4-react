import { CardHeader, Nav,NavItem,NavLink } from 'reactstrap';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import FIQ from'./Components/FIQ';
import Orders from './Components/Orders';
import Countries from './Components/Countries';
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';



function App() {
  return (
    <Router>
    <div className="App">
     <div classname='text'>
  <Nav>
  <Link to="/FIQ" className='link2'>FIQ</Link>
  <Link to="/Orders" className='link'>Orders</Link>
  <Link to="/Countries" className='link1'>Countries</Link>
  </Nav>
    </div>
    <CardHeader><h5 className='header'>Countries</h5>
    
    <Button className='pull-right' variant="primary"> Add New</Button>
    </CardHeader>
<Routes>
  <Route exact path='/FIQ' element={<FIQ />}></Route>
  <Route exact path='/Orders' element={<Orders />}></Route>
  <Route exact path='/Countries' element={<Countries />}></Route>
</Routes>

      </div>
      </Router>
  );
}

export default App;


