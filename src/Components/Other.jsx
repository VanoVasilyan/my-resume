import React from 'react';
import OtherItem from './OterItem';

const Other = ({ content }) => {
	return (
		<div className='other'>
			{content.map((el) => {
				return (
					<OtherItem
						type={el.type}
						key={el.type}
						textContent={el.textContent}
					/>
				);
			})}
		</div>
	);
};

export default Other;
