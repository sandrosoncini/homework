const express = require("express");
const logger = require("morgan");
const cookieParser = require ("cookie-parser");
const path = require("path");
const methodOverride =require ("method-override");


const app = express()

const baseRouter = require("./routes/home")
const cohortRouter = require('./routes/cohorts')

app.set('view engine', 'ejs')

//use our logger middleware to log requests to te 
app.use(logger("dev"))
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))// HTML forms
app.use(express.static(path.join(__dirname, "public")));
app.use(
    // Without this, we cannot accept DELETE or PATCH or PUT requests from
    // the browser!
    methodOverride((req, res) => {
      if (req.body && req.body._method) {
        const method = req.body._method;
        // This modifies the request object
        // it changes it from a POST request
        // to be whatever the value for _method was
        // within the form that was just submitted
        return method;
      }
    })
  );

  app.use('/', baseRouter)
  app.use('/cohorts', cohortRouter)

  const PORT =  7000;
  const DOMAIN = "localhost";
  app.listen(PORT, DOMAIN, () => {
    console.log(`💁 Server is listening at http://${DOMAIN}:${PORT}`);
  });