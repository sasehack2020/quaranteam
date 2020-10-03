import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Quiz extends React.Component {

    render(){
        return (
<Form>
  <Form.Row>
    <Col>
    <Form.Label>First Name:</Form.Label>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
    <Form.Label>Last Name:</Form.Label>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>


  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Age:</Form.Label>
    <Form.Control as="select">
      <option>0-20</option>
      <option>20-30</option>
      <option>30-40</option>
      <option>40-55</option>
      <option>55+</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Gender:</Form.Label>
    <Form.Control as="select">
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="Zip Code">
    <Form.Label>Zip code: </Form.Label>
    <Form.Control type="zip code name" placeholder="Enter zip code (5 Digits)" />
  </Form.Group>

  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        1. Do you have Body Aches?
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
    </fieldset>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        2. Are you Coughing a lot?
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        3. Do you have Diarrhea?
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        4. Do you get tired easily?
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        5. Do you have a Fever/Chills/Shaking?
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        6. Do you have a Headache?
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        7. Have you had a Loss of Taste or Smell?
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        8. Do you have Shortness of breath or Diffuculty Breathing?
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        9. Are you Sneezing a lot?
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        10. Do you have a Sore Throat?
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        11. Do you have a Stuffy Nose?
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Yes"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="No"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        12. Time-Frame of these symptoms?
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Less than 24 hours"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="24 - 48 hours"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="48 - 72 hours"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>

  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form> );}}