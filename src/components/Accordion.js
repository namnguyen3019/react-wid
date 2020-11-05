import React, { useState } from 'react';

const Accordion = ({ options }) => {
	const [activeIndex, setActiveIndex] = useState('');

	const onTitleClick = (index) => {
		setActiveIndex(index);
	};
	const renderItems = options.map((item, index) => {
		const active = index === activeIndex ? 'active' : '';
		return (
			<React.Fragment key={item.label}>
				<div
					className={`title ${active}`}
					onClick={() => onTitleClick(index)}
				>
					<i className="dropdown icon"></i>
					{item.label}
				</div>
				<div className={`content ${active}`}>
					<p>{item.value}</p>
				</div>
			</React.Fragment>
		);
	});
	return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordion;
