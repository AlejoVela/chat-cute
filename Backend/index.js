const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/db.js')
require('dotenv').config();
const User = require('./Routes/user');

const app = express();


app.use(express.json());
app.use(cors());
app.use('/api/user', User);

app.listen(process.env.PORT || 3000, () => 
    console.log(`server is running on port ${process.env.PORT}`)
  )

dbConnection();