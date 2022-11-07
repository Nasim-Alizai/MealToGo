import React from "react";
import { Card, Paragraph, Title } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/stars";

const CardTitle = styled(Title)`
	font-family: ${(props) => props.theme.fonts.body};
	padding-top: ${(props) => props.theme.space[2]};
`;
const AddressCard = styled(Paragraph)`
	font-family: ${(props) => props.theme.fonts.body};
`;

const Rating = styled.View`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[1]};
	padding-bottom: ${(props) => props.theme.space[1]};
`;

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

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<Card>
			<Card.Cover source={{ uri: photos[0] }} />
			<Card.Content>
				<CardTitle>{name}</CardTitle>
				<Rating>
					{ratingArray.map(() => (
						<SvgXml xml={star} width={20} height={20} />
					))}
				</Rating>
				<Paragraph>{address}</Paragraph>
			</Card.Content>
		</Card>
	);
};
