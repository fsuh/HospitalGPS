const Hospital = require("../models/hospital");
const { StatusCodes } = require("http-status-codes");
const customError = require("../errors");

const getAllHospital = async (req, res) => {
  const { city, address, postinumero, sort } = req.query;

  const queryObject = {};

  if (city) {
    queryObject.city = { $regex: city, $options: "i" };
  }
  if (address) {
    queryObject.address = { $regex: address, $options: "i" };
  }

  if (postinumero) {
    queryObject.postinumero = { $regex: postinumero, $options: "i" };
  }

  let result = Hospital.find(queryObject).select(
    "_id hospitalName address postinumero location city service"
  );
  if (sort === "a-z") {
    result = result.sort("hospitalName");
  }
  if (sort === "z-a") {
    result = result.sort("-hospitalName");
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const hospitals = await result;
  const totalHospitals = await Hospital.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalHospitals / limit);

  res.status(StatusCodes.OK).json({ hospitals, totalHospitals, numOfPages });
};

const getOneHospital = async (req, res) => {
  const { id: hospitalId } = req.params;
  const hospital = await Hospital.findOne({ _id: hospitalId });
  if (!hospital) {
    throw new customError.NotFoundError(`No hospital with id: ${hospitalId}`);
  }
  res.status(StatusCodes.OK).json({ hospital });
};

module.exports = { getAllHospital, getOneHospital };
