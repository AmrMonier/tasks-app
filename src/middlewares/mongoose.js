import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const dbURL = process.env.DB_URL 

export default mongoose.connect(dbURL)