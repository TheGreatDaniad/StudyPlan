import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { baseUrl } from './constants/global';

export const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let url = baseUrl + '/auth/login';
  let location = useLocation();
  let navigate = useNavigate();
  let {from} = location.state || { from: { pathname: "/" } };
  //let {target} = props.target ? {from: {pathname: props.target}} : { from: {pathname: "/"} };
  //let {target} = location.state || {from: {pathname: props.target}} || { from: { pathname: "/" } };

  function handleSubmit(event){
    event.preventDefault();
    axios.post(url, {email, password})
      .then((res) => {
        document.cookie = 'my-token='+res.data.token+'; max-age=10000;';
        navigate(from); })
      .catch((error) => {
        console.log(error);});
  };

  function handleOnChange(event){
    if (event.target.name === 'email'){
      setEmail(event.target.value);
    };
    if (event.target.name === 'password'){
      setPassword(event.target.value);
    };
  };

  return(
    <form onSubmit={handleSubmit}>
      <h1>Login to your account:</h1>
      <label>Email: </label>
      <input onChange={handleOnChange} name="email" placeholder="freddie.mercury@gmail.com" size="35" value={email}/>
      <br/>
      <label>Password: </label>
      <input onChange={handleOnChange} name="password" placeholder="queen_rox" size="35" value={password}/>
      <br/>
      <input type='submit' value='Submit'/>
    </form>
  );
};