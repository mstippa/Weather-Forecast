import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(nums) {
	return _.round(_.mean(nums));
}

export default (props) => {
	return (
		<div>
			<Sparklines data={props.weather} width={60} height={30} margin={5}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="mean" />
			</Sparklines>
			<div>{average(props.weather)}</div>	
		</div>	
	);
}


