import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@clone.jiwkh8w.mongodb.net/?retryWrites=true&w=majority`
const Connection=async()=>{
    try{
await mongoose.connect(URL,{useUnifiedTopology:true});
console.log("Database is connected")
    }
    catch(error){
        console.log("error while connecting the database",error.message)

    }
}

export default  Connection;