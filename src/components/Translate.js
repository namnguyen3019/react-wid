import React, { useEffect, useState } from 'react';
import Convert from './Convert';
import DropDown from './DropDown';

const options = [
	{ label: 'Vietnamese', value: 'vi' },
	{ label: 'English', value: 'en' },
	{ label: 'Korean', value: 'Ko' },
];
const Translate = () => {
	const [language, setlanguage] = useState(options[0]);
	const [text, setText] = useState('');

	useEffect(() => {
		console.log(text);

		return () => {};
	}, [text]);

	return (
		<div>
			<div className="ui input">
				<input type="text" onChange={(e) => setText(e.target.value)} />
			</div>

			<div>
				<DropDown
					label="Choose a language"
					selected={language}
					onSelectedChange={setlanguage}
					options={options}
				/>
			</div>
			<h3> Output </h3>
			<Convert language={language} text={text} />
		</div>
	);
};

export default Translate;
