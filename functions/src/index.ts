import * as admin from 'firebase-admin';

admin.initializeApp();


export { registerUser } from './register/registerUser';
export { updateInfo } from './update/updateInfo';
