module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			orange: '#FF8B64',
			blue: '#55C2E6',
			updated: '#BBC0FF',
			card: '#1C204B',
		},
		fontFamily: {
			sans: [
				'Rubik',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji',
			],
		},
		fontSize: {
			sm: '15px',
			base: '16px',
			lg: '40px',
			xl: '56px',
		},
		extend: {
			margin: {
				'-115': '-115px',
			},
			height: {
				160: '160px',
			},
			width: {
				255: '255px',
			},
		},
	},
	plugins: [],
};
