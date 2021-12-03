import mongoose from './src/middlewares/mongoose.js';
import express from 'express'
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from './src/routes/userRoutes.js'
import tasksRoutes from './src/routes/tasksRoutes.js'

mongoose.then(() => {
    console.log('connected to the Database');
    const app = express()
    const PORT = process.env.PORT || 5000
    app.use(bodyParser.json())
    app.use(cors())
    app.use('/users', userRoutes)
    app.use('/tasks', tasksRoutes)

    app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`))
}).catch(err => {
    console.log('failed to connect to the database');
})