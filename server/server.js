const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Load routes dynamically from /routes folder
const routesPath = path.join(__dirname, "routes");
fs.readdirSync(routesPath).forEach((file) => {
  const route = require(path.join(routesPath, file));
  const routeName = file.replace(".js", "");
  app.use(`/api/${routeName}`, route); // e.g. /api/auth
});

app.listen(5000, () => console.log("✅ Server started on port 5000"));
