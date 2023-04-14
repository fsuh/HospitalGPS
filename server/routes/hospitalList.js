const express = require("express");
const router = express.Router();

const {
  getAllHospital,
  getOneHospital,
} = require("../controller/hospitalList");

router.route("/hospital").get(getAllHospital);
router.route("/hospital/:id").get(getOneHospital);

module.exports = router;
