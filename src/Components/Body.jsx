import React from 'react';
import Contact from './Contact';
import Other from './Other';

const Body = ({ aboutUserData, contact }) => {
	return (
		<div className='body'>
			<Contact contact={contact} />
			<Other aboutUserData={aboutUserData} />
		</div>
	);
};

export default Body;
