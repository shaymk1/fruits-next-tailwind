/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				ovsyanka: "'ovsyanka', 'Grotesque'",
				jonesy: "'jonesy' , 'script'",
				basting: "'basting', 'script'",
				higelak: "'higelak', 'script'",
				fondue: "'fondue', 'script'",
				veggy: "'veggy', 'display'",
				musicals: "'musicals', 'script'",
			},
		},
	},
	plugins: [],
};
