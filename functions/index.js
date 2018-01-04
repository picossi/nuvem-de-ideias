const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const SENDGRID_API_KEY = functions.config().sendgrid.key
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    const msg = {
        to: '764samuka@gmail.com',
        from: 'samuel.souza.koch@gmail.com',
        subject: 'email top',
        templateId: '2b0398a3-29c8-42e9-839a-38f4b02b87f7'
    };
    return sgMail.send(msg).then(() => console.log('email sent')).catch((err) => console.log(err));
});

