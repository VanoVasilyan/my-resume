import React from 'react';

const OtherItem = ({ textContent, type }) => {
	return (
		<div className='item'>
			<div className='type'>{type}</div>
			<div className='textcontent'>{textContent}</div>
		</div>
	);
};

export default OtherItem;
