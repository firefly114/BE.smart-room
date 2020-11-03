/* eslint-disable no-console */
require("dotenv").config();
const app = require("./app");
const http = require("http");

const port = process.env.PORT;

if(!port) {
  process.exit(1);
}

app()
  .then((app) => {
    const server = http.createServer();

    server.on("request", app);
    server.on("error", (error) => {
      console.error(error);
      process.exit(1);
    });

    server.listen(port, () => console.log("App listening on port", port));

    process.on("unhandledRejection", (reason, promise) => {
      console.log({
        level: "error",
        message: `Unhandled Rejection at: ${promise} \n reason: ${reason}`,
      });
      process.exit(1);
    });

    process.on("uncaughtException", (err) => {
      console.log({
        level: "error",
        message: "uncaughtException: ".concat(err),
      });
      process.exit(1);
    });

  })
  .catch((error) => {
    console.error(error);
    // return process.exit(1);
  });
