import React, { Component } from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Map,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import '../map.css';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// pull images from cdn instead of storing locally
Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

async function getData(url) {
	const response = await fetch(url);
	return response.json()
}

export default class AppMap extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], isLoading: true, centroid: [], hasGeo: true };
    }

    async componentWillMount() {
        if (this.props.state == null) {
            return this.setState({ hasGeo: false });
        }
        const centers = await getData(`https://sheetlabs.com/NCOR/covidtestcentersinUS?state=${this.props.state}`);
        const centroid = centers.reduce((acc, cur, idx, src) => [acc[0]+parseFloat(cur.lat), acc[1]+cur.lon], [0, 0]).map(x => x/centers.length);
        this.setState({ isLoading: false, data: centers, centroid: centroid });
    }

    render() {
        if (!this.state.hasGeo) {
            return (
                <Card text="dark">
                    <Card.Body>
                        <Card.Title>Please select a state first</Card.Title>
                        <Button variant="secondary" href={`${process.env.PUBLIC_URL}`}>Try again</Button>
                    </Card.Body>
                </Card>
            );
        }
        if (!this.state.isLoading) {
            return (
                <Map center={this.state.centroid} zoom={4}>
                    <TileLayer
   		        		attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   		        		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   		      	/>
                    {this.state.data.map(json => {
                        return (
                            <Marker position={[parseFloat(json.lat), json.lon]}>
                                <Popup>
                                    <h3>{json.centername}</h3>
                                    <h4>{json.address}</h4>
                                    <Button variant="secondary"><a href={json.url}>Schedule an appointment</a></Button>
                                </Popup>
                            </Marker>
                        );
                    })}
                </Map>
            );
        }
        else {
            return <Spinner/>
        }
    }
}