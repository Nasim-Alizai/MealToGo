import { mocks } from "./mock";

import camelize from "camelize";

export const resturantsRequest = (location) => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location];
		if (!mock) reject("not found !");
		resolve(mock);
	});
};

const resturantsTransform = (result) => {
	return camelize(result);
};

resturantsRequest()
	.then(resturantsTransform)
	.then((transformedResponse) => {
		console.log(transformedResponse);
	})
	.catch((err) => {
		console.log(err);
	});
