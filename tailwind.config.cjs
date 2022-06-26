/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				rubik: ['Rubik', 'sans-serif']
			},
			colors: {
				brand: '#EEB76B'
			}
		}
	},
	plugins: []
};
