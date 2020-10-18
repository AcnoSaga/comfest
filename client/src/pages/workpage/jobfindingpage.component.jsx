import React from 'react';
import WorkerCard from '../../components/worker-card/worker-card.component';
import ClipLoader from 'react-spinners/ClipLoader';
import {
	executeQueryAndReturnData,
	firestore,
} from '../../firebase/firebase.utils';

import './workpage.styles.css';
import JobCard from '../../components/job-card/job-card.component';

const baseQuery = firestore.collection('jobs');

class JobFindingPage extends React.Component {
	constructor() {
		super();
		this.state = {
			listOfJobs: null,
		};
	}

	async componentDidMount() {
		executeQueryAndReturnData(baseQuery).then((data) => {
			this.setState({
				listOfJobs: data,
			});
		});
	}

	render() {
		return (
			<div className='wcard-container'>
				{this.state.listOfJobs == null ? (
					<ClipLoader size={150} color={'#123abc'} loading={true} />
				) : (
					this.state.listOfJobs.map((job) => {
						return (
							<JobCard
								title={job.title}
								description={job.description}
								phoneNumber={job.phoneNumber}
								location={job.location}
							/>
						);
					})
				)}
			</div>
		);
	}
}

export default JobFindingPage;
