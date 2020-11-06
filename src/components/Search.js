import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('kobe');
	const [results, setResults] = useState([]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get(
				'https://en.wikipedia.org/w/api.php',
				{
					params: {
						action: 'query',
						list: 'search',
						origin: '*',
						format: 'json',
						srsearch: term,
					},
				}
			);
			console.log(data.query.search);
			if (term) {
				setResults(data.query.search);
			}
		};

		if (term && !results.length) {
			search();
		} else {
			const timeOutId = setTimeout(() => {
				search();
			}, 2000);

			return () => {
				clearTimeout(timeOutId);
			};
		}
	}, [term, results.length]);
	return (
		<div>
			<form className="ui form">
				<label> Search something </label>
				<input
					type="text"
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default Search;
