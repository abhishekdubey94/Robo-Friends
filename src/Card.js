import React from 'react';

/*const Card = (props) => {
	return(
		<div className="tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5">
			<img alt="robots" src={`https://robohash.org/${props.id}?200x200`}/>
			<div>
				<h2>{props.name} </h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}*/

const Card = ({ name,id,username,email }) => {
	return(
		<div className="tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5">
			<img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name} </h2>
				<p>{email}</p>
			</div>
		</div>
	);
}


/*const Card = (props) => {
	{name,id.username,email} = props;
	return(
		<div className="tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5">
			<img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name} </h2>
				<p>{email}</p>
			</div>
		</div>
	);
}*/

export default Card;