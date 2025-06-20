import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express()
app.use(cors())
app.use(express.json());
const port = 5000;

app.listen(port, () => {
  console.log(`Library Management api listening on port ${port}`)
})

async function server() {
  try{
    await mongoose.connect("")
    console.log(`Library Management server is running port ${port}`);
    
  }catch(error){
    console.log(error);
  }
}
server();