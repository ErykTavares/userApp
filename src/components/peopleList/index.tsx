import React from 'react';
import { Text, View } from 'react-native';

interface IPeopleListProps {
	usersList?: DUser.IUser[];
}

const PeopleList: React.FC<IPeopleListProps> = ({ usersList }) => {
	return (
		<View>
			{usersList?.map((item) => (
				<Text key={item?.id?.value}>{item?.name?.first}</Text>
			))}
		</View>
	);
};

export default PeopleList;
