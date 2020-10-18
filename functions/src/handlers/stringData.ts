import * as functions from 'firebase-functions';

export const stringDataValidator = (...vars: string[]) => {
	try {
		vars.forEach((variable) => {
			if (!(typeof variable === 'string') || variable.length === 0) {
				// Throwing an HttpsError so that the client gets the error details.
				throw new functions.https.HttpsError(
					'invalid-argument',
					'The function must be called with ' +
						'proper arguments, all string arguments'
				);
			}
		});
	} catch (err) {
		throw err;
	}
};