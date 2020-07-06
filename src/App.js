import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Body from './Components/Body';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			content: [
				{
					type: 'EDUCATION',
					textContent: 'Learned Web Programming : 2020'
				},
				{
					type: 'WORK EXPERIENCE',
					textContent: 'ZigZag'
				},
				{
					type: 'ABOUT ME',
					textContent:
						'Hello! I’m Vanik Vasilyan. I am 22 years old. I am interested in programming, I have knowledge of the JavaScript language. I am a hard-worker, I like to achieve my goals.'
				},
				{
					type: 'SKILLS',
					textContent:
						'HTML/CSS, JavaScript(ES6), OOP/ FP, Adobe Photoshop, GIT'
				},
				{
					type: 'LANGUAGES ',
					textContent: 'Russian, English'
				},
				{
					type: 'INTERESTS',
					textContent: 'Films,books,Music,Programming'
				}
			],
			contact: {
				mail: 'vanovasilyan@gmail.com',
				phone: '+37494470618',
				address: 'Armenia,Yerevan Avanesov str. 7/33',
				facebook: 'https://www.facebook.com/Vano.Vasilyan',
				gitHub: 'https://github.com/VanoVasilyan'
			}
		};
	}

	render() {
		return (
			<div className='App'>
				<Header />
				<Body content={this.state.content} contact={this.state.contact} />
			</div>
		);
	}
}

export default App;
