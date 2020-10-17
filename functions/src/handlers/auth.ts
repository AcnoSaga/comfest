
import * as functions from 'firebase-functions';

export const authHandler = (context: functions.https.CallableContext) => {
	if (!context.auth) {
		// Throwing an HttpsError so that the client gets the error details.
		throw new functions.https.HttpsError(
			'unauthenticated',
			'The function must be called while authenticated.'
		);
	}
};
