import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar } from "react-native";

export const SafeArea = styled.SafeAreaView`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
export const SearchBarView = styled.View`
	padding: ${(props) => props.theme.space[2]};
`;
export const SearchBar = styled(Searchbar)`
	font-family: ${(props) => props.theme.fonts.body};
	height: ${(props) => props.theme.space[5]};
`;
