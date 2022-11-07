import React from "react";
import { Image } from "react-native";
import { Card, Paragraph, Text, Title } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/stars";
import open from "../../../../assets/open";

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

const Row = styled.View`
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
`;

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
					<Image source={{ uri: icon }} style={{ width: 20, height: 20 }} />
				</Row>
				<Paragraph>{address}</Paragraph>
			</Card.Content>
		</Card>
	);
};
