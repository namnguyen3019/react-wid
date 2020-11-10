import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { KEY } from '../api/GoogleTranslate';

const Convert = ({ language, text }) => {
	const [translated, setTranslated] = useState();

	useEffect(() => {
		const translate = async () => {
			const res = await axios.post(
				'https://translation.googleapis.com/language/translate/v2',
				{},
				{
					params: {
						q: text,
						target: language.value,
						key: KEY,
					},
				}
			);
			setTranslated(res.data.data.translations[0].translatedText);
		};
		const timeOutId = setTimeout(() => {
			translate();
		}, 500);

		return () => {
			clearTimeout(timeOutId);
		};
	}, [text, language]);
	return <div>{translated}</div>;
};

export default Convert;
