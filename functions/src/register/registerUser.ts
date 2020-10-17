import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';


import { stringDataValidator } from '../handlers/stringData';

export const registerUser = functions.https.onCall(async (data, context) => {
    try {
        // authHandler(context);
        stringDataValidator(data.displayName, data.password, data.email, data.type);
    } catch (err) {
        throw err;
    }
    const userResult = await admin.auth().createUser({
        email: data.email,
        emailVerified: false,
        password: data.password,
        displayName: data.displayName,
        disabled: false
    });

    const userRef = await admin.firestore().collection('users').add({
        email: userResult.email,
        displayName: userResult.displayName,
        type: data.type,
    });

    return await userRef.get();
});