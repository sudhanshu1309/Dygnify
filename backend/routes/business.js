const express = require("express");
const router = express.Router;

router.post("/saveUser", saveUser);

module.exports = router;
