import React from 'react';
import Contact from './Contact';
import Other from './Other';

const Body = ({ content, contact }) => {
	return (
		<div className='body'>
			<Contact contact={contact} />
			<Other content={content} />
		</div>
	);
};

export default Body;
