import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import userRoute from "./mango-module/user/user.route";
const app = express()
app.use(cors())
app.use(express.json());
app.use(userRoute);
app.listen(config.port, () => {
  console.log(config);
  
  console.log(`Mango Server api listening on port `)
})

app.get("/" , (req : Request, res : Response) =>{
  res.json({success : true , message : "Mango Server Is Running !!!"});
})

async function server() {
  try{
    await mongoose.connect(config.database_url!)
    console.log(`Mango Server server connected to database `);
    
  }catch(error){
    console.log(error);
  }
}
server();