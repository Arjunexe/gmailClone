import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = process.env.MONGO_URI 
const serverDB = ()=>{mongoose.connect(connectDB)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(error => console.error('MongoDB connection error:', error))}

export default serverDB;