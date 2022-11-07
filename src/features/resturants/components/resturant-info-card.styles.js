import styled from "styled-components/native";
import { Title, Paragraph } from "react-native-paper";

export const CardTitle = styled(Title)`
	font-family: ${(props) => props.theme.fonts.body};
	padding-top: ${(props) => props.theme.space[2]};
`;
export const AddressCard = styled(Paragraph)`
	font-family: ${(props) => props.theme.fonts.body};
`;

export const Rating = styled.View`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[1]};
	padding-bottom: ${(props) => props.theme.space[1]};
`;

export const Row = styled.View`
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`;
