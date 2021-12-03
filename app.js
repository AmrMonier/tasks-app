import mongoose from './src/middlewares/mongoose.js';

mongoose.then(() => {
    console.log('connected to the Database');
}).catch(err => {
    console.log('failed to connect to the database');
})