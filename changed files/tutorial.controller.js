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
 // Save Tutorial in the database
    tutorial
      .save(tutorial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      });
  };

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.username;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Tutorial.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving user."
        });
      });
  };
