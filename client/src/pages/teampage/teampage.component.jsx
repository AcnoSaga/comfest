import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './teampage.styles.css';
import TeamCard from '../../components/team-card/team-card.component';

function TeamPage() {
	return (
		<Container className='team-container'>
			<Row>
				<Col>
					<TeamCard
						name='Aamish Ahmad Beg'
						description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
						imageUrl='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'
					/>
				</Col>
				<Col>
					<TeamCard
						name='Saad Khan'
						description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
						imageUrl='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'
					/>
				</Col>
				<Col>
					<TeamCard
						name='Saarth Shah'
						description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
						imageUrl='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'
					/>
				</Col>
				<Col>
					<TeamCard
						name='Yajat Pathak'
						description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
						imageUrl='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default TeamPage;
