import React, { Fragment } from 'react';

const SearchBox = ({ searchField,searchChanges }) => {
	return (
		<Fragment>
			<input
			type="search"
			placeholder="search here"
			onChange={searchChanges}
			 />
		</Fragment>
	);
}

export default SearchBox;