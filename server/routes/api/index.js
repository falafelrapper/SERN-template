const router = require("express").Router();
const rstRoutes = require("./rstRoutes");

// react-mongo-template routes
router.use("/react-mysql-template", rstRoutes);

module.exports = router;