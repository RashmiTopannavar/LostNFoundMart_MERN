import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre('save', async function (next) {  //runs before password is saved to the database.
  
  // Check if the password field has not been modified
  if (!this.isModified('password')) {
    next(); // If not modified, skip the hashing process and proceed to the next middleware
  }

  // Generate a salt with a cost factor of 10
  const salt = await bcrypt.genSalt(10);

  // Hash the password using the generated salt and assign it to the user's password field
  this.password = await bcrypt.hash(this.password, salt);
});


const User = mongoose.model('User', userSchema);

export default User;