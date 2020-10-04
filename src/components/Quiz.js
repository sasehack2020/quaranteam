import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Quiz extends React.Component {
  render(){
      return (
        <div style={{ 'padding': 20 }}>
        <h1>Which of these symptoms do you have?</h1>
        <Form as='form' method="POST">
          {['Body aches', 'Cough', 'Diarrhea', 'Fatigue', 'Fever/Chills/Shaking', 'Headache', 'Loss of taste or smell', 'Shortness of breath of difficulty breathing', 'Sneezing', 'Sore throat', 'Stuffy nose'].map(
            (symp) =>
            // lol simp
            <div key={`${symp}`} className="mb-3">
              <Form.Check
                type='checkbox'
                id={`${symp}`}
                label={`${symp}`}
                name={`${symp}`}
              />
            </div>
          )}
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
      );
  }
}