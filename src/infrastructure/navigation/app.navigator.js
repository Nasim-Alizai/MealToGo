import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native-paper";
import { SafeArea } from "../../src/features/resturants/screens/resturants.screen.styles";
import { ResturantsScreen } from "../../src/features/resturants/screens/resturants.screen";

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

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Resturants: "md-restaurant",
	Maps: "md-map",
	Settings: "md-settings",
};

const creatScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
		tabBarActiveTintColor: "tomato",
		tabBarInactiveTintColor: "gray",
	};
};

export const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={creatScreenOptions}>
				<Tab.Screen name='Resturants' component={ResturantsScreen} />
				<Tab.Screen name='Maps' component={MapsScreen} />
				<Tab.Screen name='Settings' component={SettingsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};
