
import React from 'react';
import { Card, Button } from 'react-bootstrap';

export function Shift(props){
    return <Card style={{ width: '18rem', color:'black' }}>
                    <Card.Body>
                    <Card.Title>{props.day}</Card.Title>
                    <Card.Text>
                        {props.engineer}
                    </Card.Text>
                    </Card.Body>
                </Card>

}



