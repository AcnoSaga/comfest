import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { authHandler } from '../handlers/auth';
import { stringDataValidator } from '../handlers/stringData';


export const updateInfo = functions.https.onCall(async (data, context) => {
    try {
        authHandler(context);
        stringDataValidator(data.displayName, data.imageUrl, data.phoneNumber, data.description);
    } catch (err) {
        throw err;
    }
    if (context.auth !== null) {
        const userRef = admin.firestore().collection('users').doc(context.auth!.uid);
        const userData: any = {
            displayName: data.displayName,
            imageUrl: data.imageUrl,
            phoneNumber: data.phoneNumber,
            description: data.description,
        };
        if (data.profession !== null) {
            userData.profession = data.profession
        }
        await userRef.update(userData);
        return { success: true }
    } else {
        return { success: false }
    }

});