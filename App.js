import React from "react";
import "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { ResturantsContextProvider } from "./src/services/resturants/resturants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

import {
	useFonts as useOs,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLa, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";

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
				<LocationContextProvider>
					<ResturantsContextProvider>
						<Navigation />
					</ResturantsContextProvider>
				</LocationContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style='auto' />
		</>
	);
}
