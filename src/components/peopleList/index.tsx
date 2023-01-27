import React from 'react';
import { ListRenderItem, SafeAreaView, Text } from 'react-native';
import { ListStyle } from './style';

interface IPeopleListProps {
	usersList?: DUser.IUser[];
}

const PeopleList: React.FC<IPeopleListProps> = ({ usersList }) => {
	const handleRenderItem: ListRenderItem<DUser.IUser> = ({
		item,
	}): JSX.Element => <Text>{item?.name?.first}</Text>;

	return (
		<SafeAreaView>
			<ListStyle<React.ElementType>
				data={usersList}
				renderItem={handleRenderItem}
				keyExtractor={(_item: any, index: number) => index.toString()}
			/>
		</SafeAreaView>
	);
};

export default PeopleList;
