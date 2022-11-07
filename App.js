import React from "react";
import { ResturantsScreen } from "./src/features/resturants/screens/resturants.screen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/features/resturants/screens/resturants.screen.styles";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const SettingsScreen = () => (
	<SafeArea>
		<Text>setting</Text>
	</SafeArea>
);
const MapsScreen = () => (
	<SafeArea>
		<Text>maps</Text>
	</SafeArea>
);

import {
	useFonts as useOs,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLa, Lato_400Regular } from "@expo-google-fonts/lato";
import { Text } from "react-native-paper";

export default function App() {
	let [oswaldFontsLoaded] = useOs({
		Oswald_400Regular,
	});
	let [latoFontsLoaded] = useLa({
		Lato_400Regular,
	});
	if (!oswaldFontsLoaded || !latoFontsLoaded) {
		return null;
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={({ route }) => ({
							tabBarIcon: ({ color, size }) => {
								let iconName;

								if (route.name === "Resturant") {
									iconName = "md-restaurant";
								} else if (route.name === "Settings") {
									iconName = "md-settings";
								} else if (route.name === "Maps") {
									iconName = "md-map";
								}
								return <Ionicons name={iconName} size={size} color={color} />;
							},
							tabBarActiveTintColor: "tomato",
							tabBarInactiveTintColor: "gray",
						})}>
						<Tab.Screen name='Resturant' component={ResturantsScreen} />
						<Tab.Screen name='Maps' component={MapsScreen} />
						<Tab.Screen name='Settings' component={SettingsScreen} />
					</Tab.Navigator>
				</NavigationContainer>
			</ThemeProvider>
			<ExpoStatusBar style='auto' />
		</>
	);
}
