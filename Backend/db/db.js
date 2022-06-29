const mongoose =  require('mongoose');

const dbConnection = async () => {
  try {
    mongoose.connect(
      process.env.DB_CONNECTION
    )
    console.log("Connection With Mongo is Successfully");
  } catch (error) {
    throw new Error(`Error to connect with the DB: ${error}`)
  }
}

module.exports = {
  dbConnection
};