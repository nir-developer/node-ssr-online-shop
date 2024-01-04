const express = require("express");

const router = express.Router();

const path = require("path");

//MY MODULES

//HELPER FUNCTION TO GET THE PARENT ROUTE
const rootDir = require("../util/path");

//admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  console.log("in m.w for /add-product route");
  res
    .status(200)
    //REPLACE THE  2 previous segments :__dirname and '..'  - by my expression!
    .sendFile(path.join(rootDir, "views", "add-product.html"));
  //OK!BUT USE THE HELPER!
  // .sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  // .send(
  //   '<form action="/admin/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  // );
});

//admin/add-product => POST
//NOTES!!
//PARSING THE REQUEST BODY:
//express has the body property on the req object
//(BUT MUST HAVE M.W TO START PARSE THE REQUEST!)
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  console.log("inside the m.w of /product ");
  //EXPRESS REDIRECT(set the statusCOde to 302 and HTTP HEADER Location to '/')
  res.redirect("/");
});

router.post("/product", (req, res, next) => {});

module.exports = router;
