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

	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a
						className="ui button"
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
						target="_blank"
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					{/* Becareful do use this code. XSS Attacks in React */}
					<span
						dangerouslySetInnerHTML={{ __html: result.snippet }}
					></span>
				</div>
			</div>
		);
	});
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
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
