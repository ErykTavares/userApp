/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Header from '@components/header';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PeopleList from '@components/peopleList';

const App = (): JSX.Element => {
	const [users, setUsers] = useState<DUser.IUser[]>([]);

	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	const userGet = useCallback(async (): Promise<void> => {
		await axios
			.get('https://randomuser.me/api/', {
				params: {
					nat: 'us',
					results: 5,
				},
			})
			.then((res) => {
				const { results } = res.data;
				setUsers(results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		userGet();
	}, []);

	return (
		<View style={backgroundStyle}>
			<Header title="People List" />
			<View>
				{users.length > 0 ? <PeopleList usersList={users} /> : null}
			</View>
		</View>
	);
};

export default App;
