import React from 'react';
import Cards form './Card'

class Cards extends React.Component {

	render(){
		return {
			<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Covid Quiz</h5>
      <p class="card-text">Do you want to know if you have COVID? Take this quiz to find out.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Nearby Covid Testing Centers</h5>
      <p class="card-text">Do you want to get tested for COVID? Check here for the nearest testing center where you are located.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Drugs and Their Side Effects</h5>
      <p class="card-text">Are you concerned about the lasting side effects of your prescribed drug? Check here for your drug and its common side effects.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
		}
	}
}

export default Cards