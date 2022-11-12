import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../services/location/location.context";
import { SearchBarView } from "../screens/resturants.screen.styles";
import { SearchBar } from "../screens/resturants.screen.styles";

export const Search = () => {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState(keyword);

	useEffect(() => {
		search(searchKeyword);
	}, []);

	return (
		<SearchBarView>
			<SearchBar
				placeholder='Search'
				value={searchKeyword}
				onSubmitEditing={() => {
					search(searchKeyword);
				}}
				onChangeText={(text) => {
					setSearchKeyword(text);
				}}
			/>
		</SearchBarView>
	);
};
