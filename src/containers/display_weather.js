import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart  from '../components/chart';
// import GoogleMap from '../components/google_map'


class DisplayWeather extends Component {

	renderWeather(city) {
		const cityName = city.city.name;
		const temps = city.list.map(weather => weather.main.temp);
		const humidities = city.list.map(weather => weather.main.humidity);
		const pressures = city.list.map(weather => weather.main.pressure);
		const curForecast = city.list[0].weather[0].description;
		// const {lat, lon} = city.city.coord
		return (
			<tr key={cityName}>
				<td>
					<Chart weather={temps} color="blue" />
				</td>
				<td>
					<Chart weather={pressures} color="red"/>
				</td>
				<td>
					<Chart weather={humidities} color="yellow"/>
				</td>
				<td>{curForecast}</td>
			</tr>
		);	
	}

	render(){
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Temperature(K)</th>
						<th>Pressure(hPa)</th>
						<th>Humidity(%)</th>
						<th>Current Forecast</th>
					</tr>	
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>		
			</table>
		);
	}

} 

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(DisplayWeather);