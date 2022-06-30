import React from 'react';

const Card = (props) => {
	const {name, email} = props;
	return (
		<div className ='bg-light-green dib br3 pa3 ma2 grow bw2 shawdow-2 tc'>
			<img alt= 'robots' src={`https://robohash.org/${props.id}?200x200`} />
			<div>
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>
	);
}

export default Card;