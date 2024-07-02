// require ('dotenv').config({path:'./env'})

import  dototenv  from "dotenv";
import connectDB from "./db/index.js";

dototenv.config(
    {
        path:'./env'
    }
)

connectDB()








/*
//IFFE
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR")
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening at port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR: ",error)
        throw err
    }
}){}
    */