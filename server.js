<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

//mongodb
// const uri = require("./data").MONGO_DB;

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Projects Intial Server is done')
  })

// mongoose
//   .connect(uri)
//   .then(() => console.log("mongoDb connected"))
//   .catch((err) => console.log(err));

// const Appointment = require("./routes/data");
// app.use("/data", Appointment);


// app.use(express.static(path.join(__dirname, "sparkleautoservices/build")));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("sparkleautoservices/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "/sparkleautoservices/build/index.html"));
//   });
// }

app.listen(port, () => console.log(`server started on ${port}`));
=======
const express = require('express');
// const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// const twilio = require('twilio')





// const client = new twilio(account,authToken);


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true});

const connection = mongoose.connection;
// ------twillio---

connection.once('open', () =>{

    console.log('MongoDb database connection established successfully');
})


const excerciseRouter = require('./routes/excercises')
// const userRouter = require('./routes/users')
// const apprrovedRouter = require('./routes/approovedexcercises')
//  const gur = require('../src/gur')
app.use('/excercises',excerciseRouter);
// app.use('/users',userRouter)
// app.use('/approoved',apprrovedRouter)
//  app.use('/lub',gur)




app.use(express.json());

app.listen(port, () =>{
    console.log(`server is running on port : ${port}`);
});
>>>>>>> fbe128ece026d02a1b67fed6dd51582a9dce6a90
