import mongoose from "mongoose";

const dbURL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/task-manager'

export default mongoose.connect(dbURL)