import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const resturantsRequest = (location = "41.878113,-87.629799") => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location];
		if (!mock) reject("not found !");
		resolve(mock);
	});
};

export const resturantsTransform = ({ results = [] }) => {
	const mappedResult = results.map((resturant) => {
		resturant.photos = resturant.photos.map((p) => {
			return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
		});
		return {
			...resturant,
			isClosedTemporarily: resturant.business_status === "CLOSED_TEMPORARILY",
			isOpenNow: resturant.opening_hours && resturant.opening_hours.open_now,
		};
	});
	return camelize(mappedResult);
};
