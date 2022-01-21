import React, { useState } from 'react';
import './App.css';
import data from './data/data.json';

import Card from './components/Card';
import Profile from './components/Profile';

import iconWork from './images/icon-work.svg';
import iconPlay from './images/icon-play.svg';
import iconStudy from './images/icon-study.svg';
import iconExercise from './images/icon-exercise.svg';
import iconSocial from './images/icon-social.svg';
import iconSelfCare from './images/icon-self-care.svg';

export default function App() {
	const [time, setTime] = useState('weekly');

	let bgColors = ['#FF8B64', '#55C2E6', '#FF5E7D', '#4BCF82', '#7335D2', '#F1C75B'];
	let icons = [iconWork, iconPlay, iconStudy, iconExercise, iconSocial, iconSelfCare];
	data = data.map((item, idx) => {
		return { ...item, bgColor: bgColors[idx], icon: icons[idx] };
	});

	return (
		<div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<Profile time={time} setTime={setTime} />
			{data.map((item, idx) => {
				return <Card key={idx} {...item} time={time} />;
			})}
		</div>
	);
}
