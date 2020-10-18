import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
	apiKey: 'AIzaSyC_0_yxIwxYnp9C_CxClXSIqVjuFAefnY0',
	authDomain: 'comfest-2a7a2.firebaseapp.com',
	databaseURL: 'https://comfest-2a7a2.firebaseio.com/',
	projectId: 'comfest-2a7a2',
	storageBucket: 'comfest-2a7a2.appspot.com',
	messagingSenderId: '254926447167',
	appId: '1:254926447167:web:70778ffcbefeae40fa4e8a',
	measurementId: 'G-MWX9C1GQ09',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	console.log(userAuth);

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const executeQueryAndReturnData = async (query) => {
	const queryResult = await query.get();
	return queryResult;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
