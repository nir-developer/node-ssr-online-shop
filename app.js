const express = require("express");

const app = express();
const path = require("path");
//npm i --save body-parser
const bodyParser = require("body-parser");

////////////////////////////////
//MY MODULES
const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

// const errorRoutes = require("./routes/404");

/////////////////////////////////
const PORT = 8080;
//
//extended:false - to get rid of warning !
app.use(bodyParser.urlencoded({ extended: false }));

//express static m.w
app.use(express.static(path.join(__dirname, "public")));

//app.use(express.urlencoded());//WORKS
//always runs : when : using use(not get/post) AND url starts with / AND no res.send!
// app.use("/", (req, res, next) => {
//   console.log("this m.w always runs");
//   next();
// });

//FILTERING ROUTES WITH EXPRESS ROUTER - add first segment
app.use("/admin", adminRoutes);
app.use("/", shopRoutes);
// app.use(adminRoutes);
// app.use(shopRoutes);

//Error: ENOENT: no such file or directory, stat '/home/nir/Desktop/projects/udemy/Max/NodeJS/projects/node-express-ssr/views/404.html'
//LAST M.W - PAGE NOT FOUND - TO RENDER ERROR PAGE - PERFECT!
app.use((req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  // res.status(404).send("<h1>Page not found</h1>");
});

//EXPRESS -SHORT WAY OF http.createServer + .http.listen
app.listen(PORT, () => console.log(`server starts listen on port ${PORT}`));

console.log(process.mainModule.filename);
// console.log(process.mainModule);
