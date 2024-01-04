const path = require("path");

//THIS EXPRESSION WILL GIVES ME A PATH TO THE DIRECTORY THAT CONTAINS THE MAIN MODULE - app.js
module.exports = path.dirname(process.mainModule.filename);

/** KEY  NOTES: 
    
    1. path.dirname(path) function :
         - returns the dir name of a path arg

    2.process.mainModule : 
        Refers to the module that starts the app(app.js)

    3. process.mainModule.filename:
        Returns file name that spun up this module 
        
    OUTPUT: 
    /home/nir/Desktop/projects/udemy/Max/NodeJS/projects/node-express-ssr/online-shop-app/app.js
    

    4.process.dirname() :returns the dirname for a given path name

 */
