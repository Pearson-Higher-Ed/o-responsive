/*eslint-env node*/

module.exports = {
	options: {
		sass: 'demos/src/demo.scss',
		js: 'demos/src/demo.js',
		dependencies: 'o-fonts@^1.0.0'
	},
	demos: [
		{
			name: 'visibility',
			template: 'demos/src/visibility.mustache'
		}
	]
};
