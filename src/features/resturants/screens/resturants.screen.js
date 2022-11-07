import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import {
	StatusBar,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Platform,
} from "react-native";
import { ResturantInfoCard } from "../components/resturant-info-card.component";

const isAndroid = Platform.OS === "android";
const SafeArea = styled.SafeAreaView`
	flex: 1;
	margin-top: ${isAndroid ? StatusBar.currentHeight : "0"};
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
