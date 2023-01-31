module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		'babel-plugin-styled-components',
		[
			'module-resolver',
			{
				root: ['.'],
				extensions: [
					'.ios.js',
					'.android.js',
					'.js',
					'.ts',
					'.tsx',
					'.json',
				],
				alias: {
					'@components': './src/components',
					'@shared': './src/shared',
					'@': './src',
				},
			},
		],
	],
};
