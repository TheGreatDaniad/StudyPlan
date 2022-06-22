import React from 'react';
import getCookie from './getCookie';
import axios from 'axios';
import CourseList from './CourseList';

export default class PublicPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: [
        {_id: 1, name: "Course One", code:"CH637V", desc:"Some Intersting Desc. about this Course", crd:5, totalEnrolled:0, capacity:10},
        {_id: 2, name: "Course Two", code:"BH327F", desc:"Some Intersting Desc. about this Course", crd:7, totalEnrolled:0, capacity:15},
        {_id: 3, name: "Course Three", code:"DG6297Q", desc:"Some Intersting Desc. about this Course", crd:4, totalEnrolled:0, capacity:12},
        {_id: 4, name: "Course Four", code:"LJ98BN", desc:"Some Intersting Desc. about this Course", crd:8, totalEnrolled:0, capacity:20},
        {_id: 5, name: "Course Five", code:"AD129UI", desc:"Some Intersting Desc. about this Course", crd:6, totalEnrolled:0, capacity:18},
        {_id: 6, name: "Course Six", code:"PK301C", desc:"Some Intersting Desc. about this Course", crd:5, totalEnrolled:0, capacity:9},
        {_id: 7, name: "Course Seven", code:"NX910RI", desc:"Some Intersting Desc. about this Course", crd:7, totalEnrolled:0, capacity:16}
      ]
    };
  };

  fetchCL = () => {
    let token = getCookie('my-token');
    axios.get('http://localhost:3001/CourseList', {headers: {'x-json-web-token': token}})
      .then((res) => {
        this.setState({items: res.data});})
      .catch((error) => {
        console.log(error);
    });
  };

  componentDidMount(){
    this.fetchCL();
  };

  addToSP(){

  }

  render(){
    return(
      <div>
        <div>
          <h1>Here is the Full Courses List of The University! </h1>
        </div>

        <CourseList list={this.state.items} addtoSP={()=>this.addToSP}/>
      </div>
    );
  };
};