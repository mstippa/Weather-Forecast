import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import DisplayWeather from '../containers/display_weather';

export default class App extends Component {
  render() {
	    return (
	      <div className="App">
	      	<h1 className="title">Forecast Trends!</h1>
	      	<SearchBar />
	      	<DisplayWeather />
	      </div>
	    );
  }
}
