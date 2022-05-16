module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				'2xl': '1450px',
			},

			colors: {
				primary: '#e50914',
				black_opa_40: 'rgba(0,0,0,.5)',
				black_opa_90: 'rgba(0,0,0,.9)',
			},
		},
	},
	plugins: [],
};
