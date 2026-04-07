import mongoose from "mongoose";

const connectToMongoDB=async ()=>{
    try{
        await mongoose.connect("mongodb+srv://ajayadhi23:381873aA!@cluster0.8o0ahum.mongodb.net/?appName=Cluster0" , 
            );
            console.log("connected to mongo db");
    }
    catch(error)
    {
    console.log("Error while connecting to mongoDB" , error.message)  ;
    }
}

export default connectToMongoDB;
