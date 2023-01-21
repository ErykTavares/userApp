import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style';

interface IHeaderProps {
	title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default Header;
