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

// pull images from cdn instead of storing locally
Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

async function getData(url) {
	const response = await fetch(url);
	return response.json()
}

export default class AppMap extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], isLoading: true, centroid: [] };
    }

    async componentWillMount() {
        const centers = await getData(`https://sheetlabs.com/NCOR/covidtestcentersinUS?state=${this.props.state}`);
        const centroid = centers.reduce((acc, cur, idx, src) => [acc[0]+parseFloat(cur.lat), acc[1]+cur.lon], [0, 0]).map(x => x/centers.length);
        this.setState({ isLoading: false, data: centers, centroid: centroid });
    }

    render() {
        if (!this.state.isLoading) {
            return (
                <Map center={this.state.centroid} zoom={1}>
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