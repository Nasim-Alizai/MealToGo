import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar } from "react-native";
import { ResturantInfoCard } from "../components/resturant-info-card.component";

const SafeArea = styled.SafeAreaView`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchBarView = styled.View`
	padding: ${(props) => props.theme.space[2]};
`;
const SearchBar = styled(Searchbar)`
	font-family: ${(props) => props.theme.fonts.body};
	height: ${(props) => props.theme.space[5]};
`;
const ResturantList = styled.View`
	flex: 1;
	padding: ${(props) => props.theme.space[3]};
`;

export const ResturantsScreen = () => (
	<SafeArea>
		<SearchBarView>
			<SearchBar placeholder='Search' />
		</SearchBarView>
		<ResturantList>
			<ResturantInfoCard />
		</ResturantList>
	</SafeArea>
);
