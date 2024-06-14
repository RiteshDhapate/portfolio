const express = require("express");
const route = express.Router();
const  email  = require("../controllers/email");





route.post("/email",email)

module.exports = route;
