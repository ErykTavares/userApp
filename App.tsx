/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useColorScheme, View } from 'react-native';
import Header from './src/components/header';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<View style={backgroundStyle}>
			<Header />
		</View>
	);
}

export default App;
