let signinController = require("../controller/signInController.js");
let express = require("express");
let router = express.Router();
router.post("/",signinController.findUserByEmail);
module.exports = router;