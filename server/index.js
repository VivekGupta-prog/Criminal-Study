const express = require("express");
const app = express();

app.get("/", (req,res) => {
  const path = require("../src/index.js");
  console.log( __dirname + path);
});

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
































// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const router = require("./router");
// const app = express();
// const port = process.env.PORT || 7000;


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // mount all routes on /api path
// app.use('/api',router);

// // catch 404 and forward to error handler
// app.use((req, res) => {
//   res.status(404).send("Not Found");
// });

// // error handler, send stacktrace only during development
// // this.app.use(errorHandler(stack));
// mongoose.connect('mongodb://localhost/user', { useNewUrlParser: true });
// app.listen(port, () => console.log(`Listening on port ${port}`));
// const db = mongoose.connection;

