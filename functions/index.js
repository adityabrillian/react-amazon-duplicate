const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51HR3uNGG5vk8W9E0Jfy2dkogi2ej60RxcSMSTnzDSxstnXDfiOJWV6IoQm58SLKOKHfkZ4bDOpEk8Kfrp3vpBij900CoSSuQFA'
);

// -----------------------------SETUP API------------------------------

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); // kirim dalam json format

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    // (can place here a params to...)

    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-c87f1/us-central1/api
