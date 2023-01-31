/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Header from '@components/header';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import PeopleList from '@components/peopleList';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from '@/assets/style/theme';
import { MainStyle } from '@/assets/style/globalStyle';

const App = (): JSX.Element => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [theme, setTheme] = useState('light');
	const [users, setUsers] = useState<DUser.IUser[]>([]);

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
		<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
			<MainStyle>
				<Header title="People List" />
				<View>
					{users.length > 0 ? <PeopleList usersList={users} /> : null}
				</View>
			</MainStyle>
		</ThemeProvider>
	);
};

export default App;
