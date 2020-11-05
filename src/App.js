import React from 'react';
import Accordion from './components/Accordion';

const options = [
	{ label: 'The Color Red', value: 'red' },
	{ label: 'The Color Green', value: 'Green' },

	{ label: 'The Color Blue', value: 'Blue' },
];

const App = () => {
	return (
		<div className="ui container">
			<Accordion options={options} />{' '}
		</div>
	);
};

export default App;
