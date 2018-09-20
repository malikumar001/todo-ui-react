import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Date from '../Date/Date';
import SideNav from './SideNav/SideNav';
import './Navbar.css';

class Navbar extends Component {
 
 
 
    state = {
    
        left: false
       
      };
    
      handletoggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };
 
    render() {
    return (
      <div>
      <nav>
    <div className="nav-wrapper blue lighten">
    
    <ul id="nav-mobile" className="left sidedrawer">
        
        <li>
            <a onClick={this.handletoggleDrawer('left', true)}><FontAwesomeIcon icon="bars" /></a>
            </li> 
   </ul>

      <a href="/"  className="brand-logo logo-title">Todo App</a>

      <Date />
      
    </div>
  </nav>

  <SideNav open={this.state.left} handletoggleDrawer={this.handletoggleDrawer}/>
      </div>
    );
  }
}

export default Navbar;
