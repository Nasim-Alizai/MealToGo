import { ResturantsScreen } from "./src/features/resturants/screens/resturants.screen";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

export default function App() {
	return (
		<>
			<ResturantsScreen />
			<ExpoStatusBar style='auto' />
		</>
	);
}
