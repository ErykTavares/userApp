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
import AwesomeAlert from 'react-native-awesome-alerts';
import PeopleList from '@components/peopleList';

function App(): JSX.Element {
	const [users, setUsers] = useState<DUser.IUser[]>([]);

	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	const userGet = useCallback(async (): Promise<void> => {
		axios
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
				<AwesomeAlert
					showProgress={false}
					title="Error"
					message={
						err?.response?.data?.message || 'Something went wrong'
					}
					closeOnTouchOutside={true}
					closeOnHardwareBackPress={true}
					showCancelButton={true}
				/>;
			});
	}, []);

	useEffect(() => {
		userGet();
	}, []);

	return (
		<View style={backgroundStyle}>
			<Header title="People List" />
			<View>{users ? <PeopleList usersList={users} /> : null}</View>
		</View>
	);
}

export default App;
