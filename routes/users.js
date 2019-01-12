const express = require("express");
const router = express.Router();
const Users = require("../model/users");

// Get All Users
router.get("/get", (req, res) => {
  Users.find({})
    .then(result => res.send(result))
    .catch(err => console.log("Err---->", err));
});

// Get Specific User found by ID
router.get("/get/:id", (req, res) => {
  Users.findById(req.params.id, function(err, user) {
    console.log("user-------------->", user);
    res.send(user);
  });
});

// Add User
router.post("/adduser", (req, res) => {
  console.log("<========Post Request====>", req.body);
  const user = new Users(req.body);
  user.save();
  res.send(req.body);
});

// Delete User
router.delete("/get/:id", (req, res) => {
  Users.findByIdAndRemove(req.params.id, function(err, user) {
    res.send("User Deleted Successfully");
  });
});

// Update User
router.put("/update/:id", (req, res) => {
  console.log("<========Put Body Age====>", req.body.age);
  console.log("<========Put ID====>", req.params.id);
  Users.findById(req.params.id, function(err, user) {
    user.age = req.body.age;
    user.save(function(err, updatedUser) {
      res.send(updatedUser);
    });
  });
  const user = new Users(req.body);
  user.update({});
});

module.exports = router;
