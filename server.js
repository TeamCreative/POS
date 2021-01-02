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