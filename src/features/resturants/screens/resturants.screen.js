import React from "react";

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

export const ResturantsScreen = () => (
	<>
		<SafeAreaView style={styles.container}>
			<View style={styles.search}>
				<Searchbar style={styles.searchbar} placeholder='Search' />
			</View>
			<View style={styles.list}>
				<ResturantInfoCard />
			</View>
		</SafeAreaView>
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: isAndroid ? StatusBar.currentHeight : 0,
	},
	search: {
		padding: 10,
	},
	list: {
		flex: 1,
		padding: 16,
	},
	searchbar: {
		height: 35,
	},
});
