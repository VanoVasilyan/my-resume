import React from 'react';

const Contact = ({ contact }) => {
	return (
		<div className='contact'>
			<div className='type'>Contacts</div>
			<p>Email: {contact.mail}</p>
			<p>Phone: {contact.phone}</p>
			<p>Address: {contact.address}</p>
			<p>
				<a href={contact.facebook}>Facebook</a>
			</p>
			<p>
				<a href={contact.gitHub}>GitHub</a>
			</p>
		</div>
	);
};

export default Contact;
