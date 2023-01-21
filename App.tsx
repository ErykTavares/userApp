/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Header from '@components/header';
import React from 'react';
import { useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<View style={backgroundStyle}>
			<Header title="People List" />
		</View>
	);
}

export default App;
