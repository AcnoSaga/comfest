import React from "react";
import WorkerCard from "../../components/worker-card/worker-card.component";
import ClipLoader from "react-spinners/ClipLoader";
import {
	executeQueryAndReturnData,
	firestore,
} from '../../firebase/firebase.utils';
import { cities } from '../../utils/cities';
import { professions } from '../../utils/professions';
import './workpage.styles.css';
import { Button } from 'reactstrap';

const baseQuery = firestore.collection("workers");

class WorkPage extends React.Component {
	constructor() {
		super();
		this.state = {
			listOfWorkers: null,
			location: '',
			profession: '',
		};
	}

	async componentDidMount() {
		executeQueryAndReturnData(baseQuery).then((data) => {
			this.setState({
				listOfWorkers: data,
			});
		});
	}

	handleChange = async (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
		this.setState({
			currentQuery: baseQuery.where(name, '==', value),
		});
		console.log(name);
		console.log(value);
		executeQueryAndReturnData(baseQuery).then((data) => {
			this.setState({
				listOfWorkers: data,
			});
		});
	};

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
