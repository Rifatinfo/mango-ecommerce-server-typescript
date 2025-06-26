import { model, Schema } from "mongoose";
import { IMango } from "./mango.interface";

const mangoSchema = new Schema<IMango>({
   name : {type : String, trim : true , required : true},
   variety : {type : String, trim : true, require : true},
   unite : {type : String , enum : ["KG" , "Ton"] , default : "KG", required : true},
   stock : {type : Number, min : 0},
   origin : String,
   season : {type : String, enum : ["Summer" , " Winter"]}  
}) 

const Mango = model<IMango>("Mango" , mangoSchema);
export default Mango ; 