import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import './team-card.styles.css';

function TeamCard(props) {
	console.log(props.imageUrl);
	return (
		<div className='card-container'>
			<Card>
				<img alt='img' src={props.imageUrl} className='profile-image' />
				<CardBody>
					<CardTitle className='card-title'>{props.name}</CardTitle>
					<CardText>
						<p>{props.description}</p>
					</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

export default TeamCard;
