require("dotenv").config();
require("express-async-errors");
const path = require("path");
const express = require("express");
const app = express();

//const cors = require("cors");

// extra security packages
const helmet = require("helmet");
const xss = require("xss-clean");
// connec db
const connectDB = require("./db/dbConnect");

// routes
const hospitalRoute = require("./routes/hospitalList");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/errorHandler");

const PORT = process.env.PORT || 5010;

app.set("trust proxy", 1);

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.json());
//app.use(cors());
app.use(helmet());
app.use(xss());

app.use("/api/v1", hospitalRoute);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
