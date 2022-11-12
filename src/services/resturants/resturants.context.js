import React, {
	useState,
	useEffect,
	createContext,
	useMemo,
	useContext,
} from "react";
import { LocationContext } from "../location/location.context";
import { resturantsRequest, resturantsTransform } from "./resturants.service";

export const ResturantsContext = createContext();

export const ResturantsContextProvider = ({ children }) => {
	const [resturants, setResturants] = useState([]);
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState(null);
	const { location } = useContext(LocationContext);

	const retriveResturants = (loca) => {
		setIsloading(true);
		setResturants([]);
		setTimeout(() => {
			resturantsRequest(loca)
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
		const locationString = `${location.lat},${location.lng}`;
		retriveResturants(locationString);
	}, [location]);
	return (
		<ResturantsContext.Provider value={{ resturants, isLoading, error }}>
			{children}
		</ResturantsContext.Provider>
	);
};
