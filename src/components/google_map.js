import React, {Component} from 'react';

class GoogleMap extends Component {
	// this is a lifecycle method, gets called automatically when the component gets rendered to the screen
	componentDidMount() {
		const google = window.google;
		// creating an embedded google map in our app, it takes a reference to the html node where it will be rendered and an options object
		new google.maps.Map(this.refs.map, {
			zoom: 4, 
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}
	render() {
		// ref allows us to get a direct refernce to an html element that has been rendered to the page
		return <div ref="map"></div>;
	}	
}

export default GoogleMap;