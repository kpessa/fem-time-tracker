import React from 'react';

export default function CardDetails({ time, timeframes }) {
	return (
		<div className={`flex md:flex-col md:items-start items-center justify-between w-full`}>
			<h1 className={`font-sans text-[32px] md:text-[56px] tracking-tight font-light`}>{timeframes[time]?.current}hrs</h1>
			<p className="font-sans text-[15px] text-updated">
				{time === 'monthly' ? 'Last Month' : time === 'weekly' ? 'Last Week' : 'Yesterday'} - {timeframes[time]?.previous}hrs
			</p>
		</div>
	);
}
