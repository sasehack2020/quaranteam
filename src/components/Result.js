import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Card style={{ 'padding': 20 }}>
                <Card.Body>
                    <Card.Title>You likely have {this.props.inf}</Card.Title>
                    <Button variant="secondary">
                        Email someone you know
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}