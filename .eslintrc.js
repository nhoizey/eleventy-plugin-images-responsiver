module.exports = {
	extends: ['plugin:prettier/recommended'],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	rules: { 'prettier/prettier': 'error' },
	settings: {},
};
