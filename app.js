const express = require("express");
const path = require("path");

const app = express();

//PUG TEMPLATE ENGINE(2 steps) - pug is supported out of the box
//NOTE - The default is : app.set('views', 'views') - but in this case I must store views in the views folder!
// app.set("view engine", "pug");
app.set("view engine", "ejs");
app.set("views", "views");

//npm i --save body-parser
const bodyParser = require("body-parser");

////////////////////////////////
//MY MODULES
// const adminRoutes = require("./routes/admin");
const adminData = require("./routes/admin");

const shopRoutes = require("./routes/shop");

// const errorRoutes = require("./routes/404");

/////////////////////////////////
const PORT = 8080;
//
//extended:false - to get rid of warning !
app.use(bodyParser.urlencoded({ extended: false }));

//express static m.w
app.use(express.static(path.join(__dirname, "public")));

//FILTERING ROUTES WITH EXPRESS ROUTER - add first segment
app.use("/admin", adminData.routes);
app.use("/", shopRoutes);

//THE CATCH ALL M.W - PAGE NOT FOUND - TO RENDER ERROR PAGE - PERFECT!
//THE {pageTitle:'Page Not Found'} will be passed to the EJS/PUG  template engine
//SO I WILL BE ABLE TO REFERENCE IT IN THE TEMPLATE 404.ejs
app.use((req, res, next) => {
  res.render("404", { pageTitle: "Page Not Found" });
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  //res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  // res.status(404).send("<h1>Page not found</h1>");
});

//EXPRESS -SHORT WAY OF http.createServer + .http.listen
app.listen(PORT, () => console.log(`server starts listen on port ${PORT}`));

// console.log(process.mainModule);
