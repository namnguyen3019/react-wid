import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework',
	},
	{
		title: 'Why use React',
		content: 'React is a favorite JS library amaong engineers',
	},
	{
		title: 'How to use React',
		content: 'Quite easy but it takes time',
	},
];
const options = [
	{ label: 'The Color Red', value: 'red' },
	{ label: 'The Color Green', value: 'Green' },

	{ label: 'The Color Blue', value: 'Blue' },
];

const App = () => {
	return (
		<div className="ui container">
			{/* <Accordion items={items} />{' '} */}
			<Search />
		</div>
	);
};

export default App;
