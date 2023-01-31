import styled from 'styled-components/native';

export const HeaderStyle = styled.View`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	shadow-color: '#000';
	shadow-opacity: 0.2;
	shadow-radius: 1.41px;
	elevation: 2;
	shadow-offset: {
	width: 0;
	height: 1;
	};
`;

export const TitleStyle = styled.Text`
	font-size: 32px;
	color: #5e5e5e;
	font-family: 'Poppins-SemiBold';
`;
