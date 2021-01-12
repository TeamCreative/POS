const router = require("express").Router();
let Excercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Excercise.find()
    .then((excercises) => res.json(excercises))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const monday = req.body.monday;
  const tuesday = req.body.tuesday;
  const wednesday = req.body.wednesday;
  const thrusday = req.body.thrusday;
  const friday = req.body.friday;
  const saturday = req.body.saturday;
  const sunday = req.body.sunday;
  const totalhours = req.body.totalhours;
  //    const date = Date.parse(req.body.date)
  const style = false;
  const newExcercise = new Excercise({
    username,
    description,
    monday,
    tuesday,
    wednesday,
    thrusday,
    friday,
    saturday,
    sunday,
    totalhours,
    // date,
    style,
  });

  newExcercise
    .save()
    .then(() => res.json("excercise added:"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").get((req, res) => {
  Excercise.findById(req.params.id)
    .then((excercise) => res.json(excercise))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  Excercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted"))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/update/:id").post((req, res) => {
  Excercise.findById(req.params.id)
    .then((excercise) => {
      excercise.username = req.body.username;
      excercise.description = req.body.description;
      excercise.duration = req.body.duration;
      excercise.monday = req.body.monday;
      excercise.tuesday = req.body.tuesday;
      excercise.wednesday = req.body.wednesday;
      excercise.thrusday = req.body.thrusday;
      excercise.friday = req.body.friday;
      excercise.saturday = req.body.saturday;
      excercise.sunday = req.body.sunday;
      excercise.totalhours = req.body.totalhours;
      excercise.style = req.body.style;

      excercise
        .save()
        .then(() => res.json(`Roster for ${excercise.description} updated`))
        .catch((err) => res.status(400).json("Error" + err));
    })
    .catch((err) => res.status(400).json("Error" + err));
});

//email request test
let nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "perfectrupinder@gmail.com",
    pass: "Lookmeme1",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// verifying the connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages!");
  }
});

router.route("/access").post(async (req, res, next) => {
  var description = req.body.description;
  var monday = req.body.monday;
  var tuesday = req.body.tuesday;
  var wednesday = req.body.wednesday;
  var thrusday = req.body.thrusday;
  var friday = req.body.friday;
  var saturday = req.body.saturday;
  var sunday = req.body.sunday;

  var content = ` Hello ${description}, \n\n Please find the Roster for Next Week: \n\n Monday :${monday} \n Tuesday :${tuesday} \n Wednesday :${wednesday} \n Thrusday :${thrusday} \n Friday :${friday} \n Saturday :${saturday} \n Sunday :${sunday}  \n\n\n please let me know if you have any questions or need changes \n \n Cheers, \n Manjinder Singh`;

  var mail = {
    from: "perfectrupinder@gmail.com",
    to: "perfectrupinder@gmail.com ",
    subject: "Roster for this Week",
    text: content,
  };

  await transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: " Email failed , please contact help desk",
      });
    } else {
      res.json({
        status: `Email Sent Successfully to ${description}`,
      });
    }
  });
});

//email request test

module.exports = router;
