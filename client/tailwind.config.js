module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			// backgroundImage: {
			// 	home: "url('/public/images/home-bg.jpg')",
			// },
			// content: {
			// 	language: "url('/public/icons/language.svg')",
			// },

			colors: {
				primary: '#e50914',
				black_opa_40: 'rgba(0,0,0,.5)',
				black_opa_90: 'rgba(0,0,0,.9)',
			},

			transitionProperty: {
				height: 'height',
			},
		},
	},
	plugins: [],
};
