import React from 'react';
import ellipsis from '../images/icon-ellipsis.svg';

export default function CardHeader({ title }) {
	let divStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	};

	return (
		<div style={divStyle}>
			<h1 className="font-sans text-base font-medium">{title}</h1>
			<img style={{ width: '16px' }} src={ellipsis} alt="ellipsis" />
		</div>
	);
}
