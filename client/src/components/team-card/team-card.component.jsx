import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import './team-card.styles.css';

function TeamCard(props) {
	return (
		<div className='card-container'>
			<Card>
				<img alt='img' src={props.imageUrl} className='profile-image' />
				<CardBody>
					<CardTitle>{props.name}</CardTitle>
					<CardText>
						<p>{props.description}</p>
					</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

export default TeamCard;
