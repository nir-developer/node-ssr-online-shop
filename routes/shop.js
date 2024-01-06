const express = require("express");
const path = require("path");
const router = express.Router();

//SUPER IMPORTANT - SHARING DATA(IN A WRONG DATA -USUALLY)
//!!!adminData will be effected BY ANY CHANGE DONE TO THE original products array
//EVEN IN A DIFFERENT INCONGINITO BROWSER - I GET THE NOTIFICATION
//- OUTPUT OF THE PRODUCTS ARRAY - WHEN EVER A NEW PRODUCT IS ADDED BY ANY USER FROM ANY REQUEST!!!
const adminData = require("../routes/admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;

  //COULD PASS path:/shop - BUT KEEP IT MATCHED - OK
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
  //SEND HTML FILE !! INSTEAD OF TEXT HTML AS BELOW
  //res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  // res.status(200).sendFile(path.join(__dirname, "../", "views", "shop.html"));
  // res.status(200).send("<h1>The HOME Page</h1>");
});

module.exports = router;
