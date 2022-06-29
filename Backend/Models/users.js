const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  age: Number,
  creationDate: { type: Date, default: Date.now},
  active: { type: Boolean, default: true }
});

userSchema.method.generateJWT = function () {
  return jwt.sign(
    {
        _id: this._id,
        userName: this.userName,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        active: this.active,
        email: this.email,
        iat: moment().unix()
    },
    process.env.SECRET_KEY_JWT
  );
}

const user = mongoose.model("user", userSchema);

module.exports = user;