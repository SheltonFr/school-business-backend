const Router = require("express").Router
const swaggerUI = require("swagger-ui-express");
const swaggerJson = require("../swagger.json")


const router = Router();


router.use("/", swaggerUI.serve)
router.get("/", swaggerUI.setup(swaggerJson))

module.exports = router;

