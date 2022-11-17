import { createNativeStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ResturantsScreen } from "../../features/resturants/screens/resturants.screen";

const ResturantStack = createNativeStackNavigator();

export const ResturantsNavigator = () => {
	return (
		<ResturantStack.Navigator headerMode='none'>
			<ResturantStack.Screen name='Resturants' component={ResturantsScreen} />
		</ResturantStack.Navigator>
	);
};
