const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("in m.w for / route");
  //SEND HTML FILE !! INSTEAD OF TEXT HTML AS BELOW
  res.status(200).sendFile(path.join(__dirname, "../", "views", "shop.html"));
  // res.status(200).send("<h1>The HOME Page</h1>");
});

module.exports = router;
