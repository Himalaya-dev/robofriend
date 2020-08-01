import React from 'react'
import Card from './card'
import './cardList.css'

const CardList = ({info}) => {
	//console.log("Checking for array");
	//console.log(info.isArray());
	//console.log(info);
	/*if(true){
		throw new Error("ERROR!!!!");
	}*/

	const cardArray = info.map((user, index) => {
			return(<Card key={info[index].id} id={info[index].id} name={info[index].name} email={info[index].email} />);
		}
	)
	return(
		<div>
			{cardArray}
		</div>
	);
}
export default CardList;