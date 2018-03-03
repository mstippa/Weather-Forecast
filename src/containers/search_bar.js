import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../actions'

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			error: ''
		};
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({searchTerm: event.target.value});
	}

	validate() {
		return (this.state.searchTerm === '') 
	}

	onFormSubmit(event) {
		event.preventDefault();
		if (!this.validate()) {
			this.setState({error: ''});
			this.props.getWeather(this.state.searchTerm);
		} else {
			this.setState({error: 'NO CITY ENTERED!'});
		}
		this.setState({searchTerm: ''});
	}

	render() {
		return (
			<div>				
				<form className="input-group" onSubmit={this.onFormSubmit} id="input-group">
					<label htmlFor="input-group" id="input-label">{this.state.error}</label>
					<input 
						id="input"
						className="form-control"
						placeholder="Search for a city's five day forecast"
						onChange={this.onInputChange}
						value={this.state.searchTerm}
					/>
					<span className="input-group-btn">
						<button className="btn btn-secondary">Submit</button>
					</span>
				</form>
			</div>	
		);
	}
} 


export default connect(null, { getWeather })(SearchBar);