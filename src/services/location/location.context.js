import React, { useState, createContext, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationsContext = createContext();

export const LocationsContextProvider = ({ children }) => {
	const [location, setLocation] = useState(null);
	const [keyword, setKeyword] = useState("san francisco");
	const [isLoading, setIsloading] = useState(false);
	const [error, setError] = useState(null);

	const onSearch = (searchKeyword) => {
		setIsloading(true);
		setKeyword(searchKeyword);
		locationRequest(searchKeyword)
			.then(locationTransform)
			.then((result) => {
				setIsloading(false);
				setLocation(result);
			})
			.catch((err) => {
				setIsloading(false);
				setError(err);
			});
	};

	useEffect(() => {
		onSearch(keyword);
	}, []);

	return (
		<LocationsContext
			value={{ isLoading, error, location, search: onSearch, keyword }}>
			{children}
		</LocationsContext>
	);
};
