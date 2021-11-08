const db = require("../models");
const Tutorial = db.tutorials;
  // Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Tutorial
    const tutorial = new Tutorial({
      username: req.body.username,
      pass: req.body.pass,
      Reenterpassword: req.body.Reenterpassword,
      entermobileno: req.body.entermobileno,
      enteremailid: req.body.enteremailid,
      isloggedin: req.body.isloggedin ? req.body.isloggedin : false
    });
