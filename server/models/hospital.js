const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
  id: String,
  orderNum: String,
  hospitalName: String,
  address: String,
  postinumero: String,
  location: String,
  resisdentCode: String,
  city: String,
  language: String,
  organizationId: String,
  organizationName: String,
  serviceId: String,
  service: String,
});

module.exports = mongoose.model("Hospital", HospitalSchema);
