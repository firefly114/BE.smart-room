const express = require("express");

module.exports = async () => {
  const app = express();

  app.use(function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/", require("./routes"));

  app.get("/", (req, res) => res.status(200).json({ status: true }));
  app.use((req, res) =>
    res
      .status(404)
      .json({ status: false, message: "Not Found: ".concat(req.url) })
  );
  return app;
};
