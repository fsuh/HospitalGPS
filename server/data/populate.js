require("dotenv").config();
const data = require("./hospital_information.json");
const Hospital = require("../models/hospital");
const connectDB = require("../db/dbConnect");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Hospital.deleteMany();
    await Hospital.create(data);
    console.log("success!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
