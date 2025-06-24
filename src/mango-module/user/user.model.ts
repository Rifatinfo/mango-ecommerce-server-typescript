import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    name: { type: String, required: true, min: 3, max: 225 },
    email: {
        type: String, required: true  ,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: props => `${props.value} is not valid email sign!`
        },
        immutable : true
    },
    phone: { type: String, required: [true, 'User phone number required'] },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: {
           values : ["Admin", "Customer"],
           message : '{VALUE} is not supported'
        },
        required: true
    }
})

const User = model<IUser>("user", userSchema);
export default User;