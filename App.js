import { ResturantsScreen } from "./src/features/resturants/screens/resturants.screen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

import {
	useFonts as useOs,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLa, Lato_400Regular } from "@expo-google-fonts/lato";

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
				<ResturantsScreen />
			</ThemeProvider>
			<ExpoStatusBar style='auto' />
		</>
	);
}
