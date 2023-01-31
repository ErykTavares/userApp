import IThemeInterface from '@/shared/types/style';
import styled from 'styled-components/native';

export const MainStyle = styled.View`
	background: ${({ theme }: { theme: IThemeInterface }) =>
		theme?.SECONDARY_COLOR};
`;
