
import React from 'react';
import { Card } from 'react-bootstrap';

export function Shift(props){
    return <Card style={{ width: '18rem', color:'black' }}>
                    <Card.Body>
                    <Card.Title>Day {props.day}, {props.shift}</Card.Title>
                    <Card.Text>
                        {props.engineer}
                    </Card.Text>
                    </Card.Body>
                </Card>

}



