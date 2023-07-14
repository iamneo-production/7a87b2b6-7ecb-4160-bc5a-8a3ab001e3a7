import React from 'react';
import "./sidebar.css";
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
        <Link to="refvideos"><button className='menu-item'>Videos</button></Link>
        <Link to="recvideos"><button className='menu-item'>Sessions</button></Link>
        <Link to="materials"><button className='menu-item'>Materials</button></Link>
        <Link to="assessments"><button className='menu-item'>Assessments</button></Link>
        <Link to="assignments"><button className='menu-item'>Assignments</button></Link>
        <Link to="reports"><button className='menu-item'>Reports</button></Link>
    </Menu>
    
  );
};