import React from 'react';
import img from '../Images/Vano.jpg';

const Header = () => {
	return (
		<div className='mainHead'>
			<div className='img'>
				<img src={img}></img>
			</div>
			<div className='name'> VANIK VASILYAN </div>
		</div>
	);
};

export default Header;
