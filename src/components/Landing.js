import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
export default class Landing extends React.Component {

	render(){
    return(
		<div className="carousel">
			<Carousel>
  			<Carousel.Item>
    <img
      className="d-block w-100"
      src="https://allbusinesssystems.com/wp-content/uploads/2017/05/Exam-Room-Casegoods-1-Stance.jpg"
      alt="First Slide"
    />
    <Carousel.Caption>
      <h3>Take the Covid Quiz.</h3>
      <p>Do you have COVID or the flu? Take the quiz to determine your next steps.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://th.bing.com/th/id/OIP.Olot3z24rM7z8g-AytkHPgHaE7?pid=Api&rs=1"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Locate your nearest testing center.</h3>
      <p>Want to know where you should get tested according to your location? Click here for your nearest testing center.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://kathmandupathlab.com/wp-content/uploads/2017/11/lab4.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Drugs and their Side Effects.</h3>
      <p>Worried about your prescribed drugs and their side effects? Click here for common side effects associated with your drug.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    );
	}
}