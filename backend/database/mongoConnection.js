const mongoose = require('mongoose');
require('dotenv').config();

const uri =  process.env.MONGODB_URL_CONNECTION;

mongoose.connect(
    uri,
    { useNewUrlParser: true,
      useUnifiedTopology: true }, 
    () => { console.log("connected to database")}
);
 

