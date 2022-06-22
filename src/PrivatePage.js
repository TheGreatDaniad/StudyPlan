import React from 'react';
import axios from 'axios';
import getCookie from './getCookie';
import { getSP, updateSP } from './constants/global';
import { useNavigate, useLocation } from 'react-router-dom';

export default class PrivatePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: [
        {_id: 1, name: "One"},
        {_id: 2, name: "Two"},
        {_id: 3, name: "Three"},
        {_id: 4, name: "Four"},
        {_id: 5, name: "Five"},
        {_id: 6, name: "Six"},
        {_id: 7, name: "Seven"}
      ]
    };
  };
  

  updateState = () => {
    let token = getCookie('my-token');
    axios.get('http://localhost:3001/studyplan', {headers: {'x-json-web-token': token}})
      .then((res) => {
        this.setState({items: res.data});
        updateSP(res.data);
      })
      .catch((error) => {
        console.log(error);
    });
  };

  componentDidMount(){
    if(!getSP()){
      this.updateState();
    } else {
      this.setState({items: getSP()});
    }
  };

  handleSaveSP = ()=> {
    let location = useLocation();
    let navigate = useNavigate();
    let {from} = location.state || { from: { pathname: "/" } };
    let token = getCookie('my-token');
    axios.post('http://localhost:3001/update_sp', {sp: JSON.stringify(getSP()), headers: {'x-json-web-token': token}})
      .then((res) => {
        navigate(from);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
    });
  }

  handleDiscardSP = ()=> {
    let location = useLocation();
    let navigate = useNavigate();
    let {from} = location.state || { from: { pathname: "/" } };
    let token = getCookie('my-token');
    axios.post('http://localhost:3001/discard_sp', {sp: "", headers: {'x-json-web-token': token}})
      .then((res) => {
        navigate(from);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
    });
  }


  render(){
    <div>
      <button type="button" className="btn btn-primary" onClick={()=>this.handleSaveSP()}>Save Plan</button>
      <button type="button" className="btn btn-primary" onClick={()=>this.handleDiscardSP()}>Discard Plan</button>
    </div>

    if(this.state.items.length > 0){
      return(
        <div>
          <h2>Start Editing your Styudy Plan!</h2>
          <h2>List of courses enrolled:</h2>
          <ul>
            {this.state.items.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
      
    } else {
      return(
        <div>
          <h1>
            You Have no Study plan; Start adding courses!
          </h1>
        </div>
      );    
    }
    
  };
};