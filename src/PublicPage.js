import React from 'react';
import getCookie from './getCookie';
import axios from 'axios';
import CourseList from './CourseList';
import { updateCourses, getCL, addItemSP } from './constants/global';

export default class PublicPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    };
  };

  fetchCL = () => {
    let token = getCookie('my-token');
    axios.get('http://localhost:3001/CourseList', {headers: {'x-json-web-token': token}})
      .then((res) => {
        this.setState({items: res.data});
        updateCourses(res.data)})
      .catch((error) => {
        console.log(error);
    });
  };

  componentDidMount(){
    if(!getCL()) {this.fetchCL();}
    else {this.setState({items:getCL()})}
  };

  render(){
    return(
      <div>
        <div>
          <h1>Here is the Full Courses List of The University! </h1>
        </div>

        <CourseList list={this.state.items}/>
      </div>
    );
  };
};