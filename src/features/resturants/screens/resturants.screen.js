import React from "react";
import { SafeArea, SearchBar, SearchBarView } from "./resturants.screen.styles";
import { ResturantInfoCard } from "../components/resturant-info-card.component";
import { FlatList } from "react-native";

export const ResturantsScreen = () => (
	<SafeArea>
		<SearchBarView>
			<SearchBar placeholder='Search' />
		</SearchBarView>
		<FlatList
			data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
			renderItem={() => <ResturantInfoCard />}
			keyExtractor={(item) => item.name}
			contentContainerStyle={{ padding: 16 }}
		/>
	</SafeArea>
);
