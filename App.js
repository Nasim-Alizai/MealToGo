import { ResturantsScreen } from "./src/features/resturants/screens/resturants.screen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

export default function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<ResturantsScreen />
			</ThemeProvider>
			<ExpoStatusBar style='auto' />
		</>
	);
}
