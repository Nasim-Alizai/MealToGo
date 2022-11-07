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
	padding: 10px;
`;
const SearchBar = styled(Searchbar)`
	height: 35px;
`;
const ResturantList = styled.View`
	flex: 1;
	padding: 16px;
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
