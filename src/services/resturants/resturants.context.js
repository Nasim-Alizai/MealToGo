import React, { useState, useEffect, createContext, useMemo } from "react";
import { resturantsRequest, resturantsTransform } from "./resturants.service";

export const ResturantsContext = createContext();

export const ResturantsContextProvider = ({ children }) => {
	const [resturants, setResturants] = useState([]);
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState(null);

	const retriveResturants = () => {
		setIsloading(true);
		setTimeout(() => {
			resturantsRequest()
				.then(resturantsTransform)
				.then((resutls) => {
					setIsloading(false);
					setResturants(resutls);
				})
				.catch((err) => {
					setIsloading(false);
					setError(err);
				});
		}, 200);
	};

	useEffect(() => {
		retriveResturants();
	}, []);
	return (
		<ResturantsContext.Provider value={{ resturants, isLoading, error }}>
			{children}
		</ResturantsContext.Provider>
	);
};
