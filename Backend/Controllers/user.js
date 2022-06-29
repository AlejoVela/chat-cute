const User = require('../Models/users');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  if(
    !req.body.userName ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password ||
    !req.body.age
  )
    res.status(400).send("There is no enough information to create this user")

  const existingUser = await User.findOne({ userName: req.body.userName });
  if (existingUser)
    res.status(400).send("This user is already exist");

  const hash = await bcrypt.hash(req.body.password, 10);

  const user = new User({
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.name,
    email: req.body.email,
    age: req.body.age,
    password: hash
  });

  const result = await user.save();
  if(!result) res.status(400).send("error to create user");
  res.status(201).send( result )
}

module.exports = { createUser };