import React from 'react';
import _ from 'lodash';

const Contact = ({ contact }) => {
	return (
		<div className='contact'>
			<div className='type'>Contacts</div>
			<p>Email: {contact.mail}</p>
			<p>Phone: {contact.phone}</p>
			<p>Address: {!_.isEmpty(contact) && contact.address}</p>
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
