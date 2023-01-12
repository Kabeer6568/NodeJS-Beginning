const express = require("express");

const routers = express.Router();

routers.get("/", require("./get_users"));
routers.post("/" , require("./add_users"));
routers.delete("/", require("./delete_users"));

module.exports = routers;
