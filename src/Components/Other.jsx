import React from 'react';
import OtherItem from './OterItem';

const Other = ({ aboutUserData }) => {
	return (
		<div className='other'>
			{aboutUserData.map((userDataItem) => {
				const { type, textContent } = userDataItem;
				return <OtherItem type={type} key={type} textContent={textContent} />;
			})}
		</div>
	);
};

export default Other;
