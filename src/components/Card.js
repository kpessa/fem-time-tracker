import React from 'react';

import CardHeader from './CardHeader';
import CardDetails from './CardDetails';

export default function Card({ icon, bgColor, title, time, timeLast }) {
	let style = {
		backgroundColor: bgColor,
	};

	return (
		<div>
			<div style={style} className={`relative m-[24px] md:w-255 h-160 rounded-t-2xl`}>
				<img src={icon} className="absolute right-[14px]" />
			</div>
			<div className="relative m-[24px] md:w-255 p-6 rounded-2xl bg-card mt-[-122px] m:mt-[-115px] z-10">
				<CardHeader title={title} />
				<CardDetails time={time} timeLast={timeLast} />
			</div>
		</div>
	);
}
