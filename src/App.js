import './App.css';

import Card from './components/Card';
import Profile from './components/Profile';

import iconWork from './images/icon-work.svg';
import iconPlay from './images/icon-play.svg';
import iconStudy from './images/icon-study.svg';
import iconExercise from './images/icon-exercise.svg';
import iconSocial from './images/icon-social.svg';
import iconSelfCare from './images/icon-self-care.svg';

export default function App() {
	return (
		<div className="w-full v-full flex justify-center items-center">
			<div className="max-w-screen-xl sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<Profile />
				<Card icon={iconWork} bgColor={'#FF8B64'} title="Work" time={'32hrs'} timeLast={'Last Week - 36hrs'} />
				<Card icon={iconPlay} bgColor={'#55C2E6'} title="Play" time={'10hrs'} timeLast={'Last Week - 36hrs'} />
				<Card icon={iconStudy} bgColor={'#FF5E7D'} title="Study" time={'4hrs'} timeLast={'Last Week - 7hrs'} />
				<Card icon={iconExercise} bgColor={'#4BCF82'} title="Exercise" time={'4hrs'} timeLast={'Last Week - 5hrs'} />
				<Card icon={iconSocial} bgColor={'#7335D2'} title="Social" time={'5hrs'} timeLast={'Last Week - 10hrs'} />
				<Card icon={iconSelfCare} bgColor={'#F1C75B'} title="Self Care" time={'2hrs'} timeLast={'Last Week - 2hrs'} />
			</div>
		</div>
	);
}
