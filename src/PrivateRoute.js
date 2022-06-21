import React from 'react';
import {Navigate, Outlet } from 'react-router-dom';
import isAuthenticated from './isAuthenticated';

function PrivateRoute(props){

  if(isAuthenticated()) {
      //return(props.children);
      return (
        <Outlet />
      );

  } else {
      return(
        <Navigate to={{pathname: '/login', target: props.target, state: {from: props.location}}} replace/>
      );
  }
  
};
export default PrivateRoute;