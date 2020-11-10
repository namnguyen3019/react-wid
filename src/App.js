import React, { useState } from 'react';
import Accordion from './components/Accordion';
import DropDown from './components/DropDown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
	const [selected, setSelected] = useState(options[0]);

	useState(() => {
		console.log('selected Change');
	}, [selected]);

	return (
		<div className="ui container">
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/search">
				<Search />
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
			<Route path="/dropdown">
				<DropDown
					label="Choose a color"
					selected={selected}
					options={options}
					onSelectedChange={setSelected}
				/>
			</Route>
		</div>
	);
};

export default App;
