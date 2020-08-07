
import React from 'react';
import * as CONSTANTS from './../constants';
import {Shift} from './../components/Shift';
import {Container, Row} from 'react-bootstrap';

class ListingsContainer extends React.Component {
   constructor(props) {
       super(props);
       
       this.state = {
       };


    }
   componentDidMount() {
      fetch('http://localhost:3001/')
         .then(response => response.json())
         .then(shifts => {
            this.setState(shifts)
         });
    }

   

    render() {
      var listings = [];
      var shifts = Object.values(this.state);
      console.log(shifts);
      shifts.forEach(shift => {
         listings.push(<Row key = {shift.id}>
                        <Shift day={shift.id+1} engineer={shift.supportersToday[0].name} key={shift.id}></Shift>
                        <Shift day={shift.id+1} engineer={shift.supportersToday[1].name} key={shift.id+shifts.length}></Shift>
                     </Row>)
      })
      // for(let i=0;i<CONSTANTS.Days.length; i+=2){
      //    listings.push(<Row key = {i/2}>
      //                      <Shift day={i+1} engineer={engineer} key={i}></Shift>
      //                      <Shift day={i+2} engineer={engineer} key={i+1}></Shift>
      //                   </Row>)
      // }
      // var listings = CONSTANTS.Days.map((day, i)=>
      //     <Shift day={day} engineer={engineer} key={i}></Shift>
      // )
      // console.log(listings);
       return (
          <Container>
              {listings}
          </Container>
       )
    }
 }

export default ListingsContainer;