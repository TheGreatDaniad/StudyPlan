import React from 'react';
import axios from 'axios';
import getCookie from './getCookie';

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
    axios.get('http://localhost:3001/items', {headers: {'x-json-web-token': token}})
      .then((res) => {
        this.setState({items: [...res.data]});})
      .catch((error) => {
        console.log(error);
    });
  };

  componentDidMount(){
    //this.updateState();
  };


  render(){
    return(
      <div>
        <h1>You have successfully logged in. Now, you have access to this page!</h1>
        <h2>List of items:</h2>
        <ul>{this.state.items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}</ul>
      </div>
    );
  };
};