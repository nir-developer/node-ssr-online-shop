const express = require("express");

const router = express.Router();

const path = require("path");

//MY MODULES

//HELPER FUNCTION TO GET THE PARENT ROUTE
const rootDir = require("../util/path");

//GLOBAL DATA - TO SHARE DATA(NOT RECOMANDED)
const products = [];

//////////////////////////////////////////////
//admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  //IMPORTANT: Add the path parameter - so the the view main-layout.pug can check it and -render the active class
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

//admin/add-product => POST

//(BUT MUST HAVE M.W TO START PARSE THE REQUEST!)
router.post("/add-product", (req, res, next) => {
  // console.log(req.body);
  products.push({ title: req.body.title });

  //EXPRESS REDIRECT(set the statusCOde to 302 and HTTP HEADER Location to '/')
  res.redirect("/");
});

router.post("/product", (req, res, next) => {});

//EXPORT MULTIPLE VALUES
exports.routes = router;
exports.products = products;

//BEFORE
//IMPORT SINGLE VALUE
// module.exports = router;
