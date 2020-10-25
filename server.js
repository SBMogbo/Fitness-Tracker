
const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");

var MONGODB_URI= process.env.MONGODB_URI ||"mongodb://localhost/workout"; mongoose.connect(MONGODB_URI ,{ useNewUrlParser: true,
useFindAndModify:false
});

const app = express();
const PORT =process.env.PORT || 3005;
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const databaseUrl = "workout";
const collections = ["exercise"];

const db = mongojs(databaseUrl,collections);
db.on("error", error =>{
  console.log("Database Error",error)
});

const apiRoutes= require("./routers/apiRouter");
const ViewRoutes= require("./routers/viewroutes");

app.use (apiRoutes);
app.use (ViewRoutes);

// Listen on port 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
