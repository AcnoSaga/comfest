import React from 'react';
import WorkerCard from '../../components/worker-card/worker-card.component';
import ClipLoader from 'react-spinners/ClipLoader';
import {
	executeQueryAndReturnData,
	firestore,
} from '../../firebase/firebase.utils';

import './workpage.styles.css';

const baseQuery = firestore.collection('workers');

class WorkPage extends React.Component {
	constructor() {
		super();
		this.state = {
			listOfWorkers: null,
		};
	}

	async componentDidMount() {
		executeQueryAndReturnData(baseQuery).then((data) => {
			this.setState({
				listOfWorkers: data,
			});
		});
	}

	render() {
		return (
			<div className='wcard-container'>
				{this.state.listOfWorkers == null ? (
					<ClipLoader size={150} color={'#123abc'} loading={true} />
				) : (
					this.state.listOfWorkers.map((worker) => {
						return (
							<WorkerCard
								name={worker.displayName}
								profession={worker.profession}
								phoneNumber={worker.phoneNumber}
								location={worker.location}
							/>
						);
					})
				)}
			</div>
		);
	}
}

export default WorkPage;
