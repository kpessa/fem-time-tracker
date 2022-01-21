import React from 'react';

import CardHeader from './CardHeader';
import CardDetails from './CardDetails';

export default function Card({ icon, bgColor, title, timeframes, time }) {
	let style = {
		backgroundColor: bgColor,
	};

	return (
		<div>
			<div style={style} className={`relative m-[24px]  h-160 rounded-t-2xl`}>
				<img src={icon} className="absolute right-[14px]" />
			</div>
			<div className="relative m-[24px] p-6 rounded-2xl bg-card hover:bg-[#33397A] hover:cursor-pointer mt-[-122px] m:mt-[-115px] z-10">
				<CardHeader title={title} />
				<CardDetails timeframes={timeframes} time={time} />
			</div>
		</div>
	);
}
