import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Invalid E-Mail')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 8

    },
    age: {
        type: Number,
        default: 0
    }
  }
);

export default mongoose.model('User', UserSchema);
