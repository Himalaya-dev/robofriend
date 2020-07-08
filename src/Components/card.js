import React from 'react'
import './card.css'

const Card = ({ id, name, email }) => {
	return(
		<div className="dib">
			<img alt="profile" src={`https://robohash.org/${id}?set=set4`}/>
			<h2>{ name }</h2>
			<p>{ email }</p>
		</div>	
	);
}

export default Card;