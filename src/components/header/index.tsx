import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>header here!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: '100px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#121212',
	},

	title: {
		fontSize: 32,
		color: 'white',
	},
});

export default Header;
