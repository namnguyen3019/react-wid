

const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
	params: {
		action: 'query',
		list: 'search',
		origin: '*',
		format: 'json',
		srsearch: term,
	},
});