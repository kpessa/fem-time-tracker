import React from 'react';

import img from '../images/image-jeremy.png';

export default function Profile({ time, setTime }) {
	return (
		<div className="md:col-span-1 md:row-[1/_span_3] sm:col-span-2 md:h-[530px] h-[200px] m-[24px] sm:mt-[24px] mt-[80px] rounded-2xl bg-card box-border">
			<div className="bg-[#5747EA] w-full md:h-[354px] h-[133px] rounded-2xl p-[35px] pr-[10px] flex md:flex-col">
				<div className="relative">
					<div className="absolute h-[64px] w-[64px] md:h-[78px] md:w-[78px] border-4 rounded-full"></div>
					<img className="h-[64px] w-[64px] md:h-[78px] md:w-[78px]" src={img} />
				</div>
				<div className="flex flex-col justify-center ml-3 md:ml-0">
					<p className="md:mt-[43px] font-sans text-[#BBC0FF]">Report for </p>
					<h1 className="font-sans text-[24px] md:text-[40px] leading-[28px] md:leading-[48px] font-light">Jeremy Robson</h1>
				</div>
			</div>
			<div className="font-sans text-[18px] grid grid-cols-3 text-center h-[60px] place-content-center md:grid-cols-1 md:mt-[20px] md:h-[130px] md:place-items-start md:ml-[32px] md:place-content-around">
				<p className={`${time !== 'daily' && 'text-[#7078C9]'} hover:cursor-pointer`} onClick={() => setTime('daily')}>
					Daily
				</p>
				<p className={`${time !== 'weekly' && 'text-[#7078C9]'} hover:cursor-pointer`} onClick={() => setTime('weekly')}>
					Weekly
				</p>
				<p className={`${time !== 'monthly' && 'text-[#7078C9]'} hover:cursor-pointer`} onClick={() => setTime('monthly')}>
					Monthly
				</p>
			</div>
		</div>
	);
}
