import React from "react";
import { Image } from "react-native";
import { Card, Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/stars";
import open from "../../../../assets/open";
import {
	Rating,
	CardTitle,
	AddressCard,
	Row,
} from "./resturant-info-card.styles";

export const ResturantInfoCard = ({ resturant = {} }) => {
	const {
		name = "haidar resturant",
		icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
		photos = [
			"https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
		],
		address = "100 some random street",
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
	} = resturant;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<Card>
			<Card.Cover key={name} source={{ uri: photos[0] }} />
			<Card.Content>
				<CardTitle>{name}</CardTitle>
				<Row>
					<Rating>
						{ratingArray.map(() => (
							<SvgXml xml={star} width={20} height={20} />
						))}
					</Rating>
					{isClosedTemporarily && (
						<Text variant='label' style={{ color: "red" }}>
							Closed Temporarily
						</Text>
					)}
					{isOpenNow && <SvgXml xml={open} width={20} height={20} />}
					<Image
						key={icon}
						source={{ uri: icon }}
						style={{ width: 20, height: 20 }}
					/>
				</Row>
				<AddressCard>{address}</AddressCard>
			</Card.Content>
		</Card>
	);
};
