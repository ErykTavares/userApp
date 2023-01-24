import React from 'react';
import { HeaderStyle, TitleStyle } from './style';

interface IHeaderProps {
	title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
	return (
		<HeaderStyle>
			<TitleStyle>{title}</TitleStyle>
		</HeaderStyle>
	);
};

export default Header;
