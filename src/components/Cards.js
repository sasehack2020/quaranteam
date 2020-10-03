import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import states from './states.json'
import { Link } from 'react-router-dom';

export default class Cards extends React.Component {

  constructor(props) {
    super(props);
    this.state = { state: null };
  }

  logState(e) {
    this.setState({ state: e.target.value });
  }

	render(){
		return (
			<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="https://allbusinesssystems.com/wp-content/uploads/2017/05/Exam-Room-Casegoods-1-Stance.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Covid Quiz</h5>
      <p class="card-text">Do you want to know if you have COVID or just the flu? Take this quiz to find out.</p>
      <Button variant="secondary">
        <Link to={'/quiz'}>
          Take the quiz!
        </Link>
      </Button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://th.bing.com/th/id/OIP.Olot3z24rM7z8g-AytkHPgHaE7?pid=Api&rs=1" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Nearby Covid Testing Centers</h5>
      <p class="card-text">Do you want to get tested for COVID? Check here for the nearest testing center where you are located.</p>
      <Form as='form' id="centers">
        <Form.Group controlId="state">
          <Form.Label>Choose your state</Form.Label>
          <Form.Control as="select" name="state" id="state" form="centers" onChange={(e) => this.logState(e)}>
            {Object.keys(states).map(name => <option value={states[name]}>{name}</option>)}
          </Form.Control>
        </Form.Group>
      </Form>
      <Button variant="secondary">
        <Link to={`/map?state=${this.state.state}`}>
          Go!
        </Link>
      </Button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://kathmandupathlab.com/wp-content/uploads/2017/11/lab4.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Drugs and Their Side Effects</h5>
      <p class="card-text">Are you concerned about the lasting side effects of your prescribed drug? Check here for your drug and its common side effects.</p>
      <Button variant="secondary">
        not done yet
      </Button>
    </div>
  </div>
</div>
    );
	}
}

