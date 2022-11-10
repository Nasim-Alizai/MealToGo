import React, { useContext } from "react";
import { SafeArea, SearchBar, SearchBarView } from "./resturants.screen.styles";
import { ResturantInfoCard } from "../components/resturant-info-card.component";
import { FlatList, View } from "react-native";
import { ResturantsContext } from "../../../services/resturants/resturants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";

export const ResturantsScreen = () => {
	const { isLoading, error, resturants } = useContext(ResturantsContext);
	return (
		<SafeArea>
			{isLoading && (
				<View style={{ position: "absolute", top: "50%", left: "50%" }}>
					<ActivityIndicator
						animating={true}
						color={MD2Colors.red800}
						size={50}
						style={{ marginLeft: -25 }}
					/>
				</View>
			)}

			<Search />
			<FlatList
				data={resturants}
				renderItem={({ item }) => {
					return <ResturantInfoCard resturant={item} />;
				}}
				keyExtractor={(item) => item.name}
				contentContainerStyle={{ padding: 16 }}
			/>
		</SafeArea>
	);
};
