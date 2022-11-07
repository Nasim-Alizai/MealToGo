import React from "react";
import { Card } from "react-native-paper";

export const ResturantInfoCard = ({ resturant = {} }) => {
	const {
		name = "haidar resturant",
		icon,
		photos = [
			"https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
		],
		address = "100 some random street",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily,
	} = resturant;

	return (
		<Card>
			<Card.Cover source={{ uri: photos[0] }} />
			<Card.Title title={name} />
		</Card>
	);
};
