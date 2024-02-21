// import { Firestore } from 'firebase-admin/firestore' ;
import admin from 'firebase-admin'

let app;
if(!admin.apps.length){
    app = admin.initializeApp({
        credential : admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY, // Replace escaped newline characters
        }),
    })
}

const adminDb = admin.firestore(app)
const adminAuth = admin.auth(app);

export {adminAuth ,adminDb} ;