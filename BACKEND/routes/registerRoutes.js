let registerController = require("../controller/registerController.js");
let express = require("express");
let router  = express.Router();
router.post("/",registerController.insertUsers);
module.exports = router;