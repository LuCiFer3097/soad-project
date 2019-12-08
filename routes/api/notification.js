const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const passport = require("passport");

//model import
const Post = require("../../models/Post");
const Notification = require("../../models/notification");
const User = require("../../models/User");

const validatePostInput = require("../../validation/post");

router.get("/test", (req, res, next) => {
  res.json({ msg: "hello workds" });
});

router.get(
    "/all",
    passport.authenticate("jwt", { session: false }),
    (req,res,next) => {
        Notification.find({ to_whom: req.user.id })
        .then( notifications => {
            res.json(notifications);
        })
        .catch(err => {
            res.status(404).json({ nonotificationfound: "no notification found for the user" });
        });
});

module.exports = router;