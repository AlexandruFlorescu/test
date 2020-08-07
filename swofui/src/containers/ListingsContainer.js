
import React from 'react';
import {Shift} from './../components/Shift';
import {Container, Row} from 'react-bootstrap';

class ListingsContainer extends React.Component {
   constructor(props) {
       super(props)
       
       this.state = {
       }


    }

   componentDidMount(){
      fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(shifts => {
         this.setState(shifts)
      });
   }

    render() {
      var listings = []
      var shifts = Object.values(this.state)
      shifts.forEach(shift => {
         listings.push(<Row key = {shift.id}>
                        <Shift day={shift.id+1} shift='Morning' engineer={shift.supportersToday[0].name} key={shift.id}></Shift>
                        <Shift day={shift.id+1} shift='Afternoon' engineer={shift.supportersToday[1].name} key={shift.id+shifts.length}></Shift>
                     </Row>)
      })
       return (
          <Container>
              {listings}
          </Container>
       )
    }
 }

export default ListingsContainer;