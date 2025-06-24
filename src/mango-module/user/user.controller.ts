import { Request, Response } from "express";
import User from "./user.model";

const registerUser = async (req : Request, res : Response) => {
   const payload = req.body;
   const user = new User(payload);
   const data = await user.save();

   res.json({
    success : true,
    message : "User Register Successfully",
    data
   })
}

export {registerUser} ; 