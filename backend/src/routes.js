const express = require("express");
const UseController = require("./controllers/UserController");

const routes = express.Router();

routes.get("/users", UseController.index);
routes.post("/register", UseController.store);
routes.put("/update/:id", UseController.setStatus);

module.exports = routes;
