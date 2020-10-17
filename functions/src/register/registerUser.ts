import * as functions from 'firebase-functions';
import { authHandler } from '../handlers/auth';
import { stringDataValidator } from '../handlers/stringData';

export const registerUser =  functions.https.onCall(async (data, context) => {
    try {
        authHandler(context);
        stringDataValidator(data.path, data.body);
    } catch (err) {
        throw err;
    }

  });