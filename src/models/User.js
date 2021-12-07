import mongoose from 'mongoose';
import validator from 'validator';
import cryptography from "../utilities/cryptography.js";
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
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
});
UserSchema.statics.findByCredentials = async function (email, password) {
  const user = await this.findOne({ email });

  const isMatch = await cryptography.compare(password, user.password);

  if (!isMatch) {
    throw new Error("failed to login");
  }
  return user;
};

UserSchema.methods.toJSON = function () {
  let obj = this.toObject()
  delete obj.password
  delete obj.__v
  return obj
}
export default mongoose.model("User", UserSchema);
