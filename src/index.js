const express = require('express')
const path = require("path")
const hbs = require("hbs")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require('./routes/routes.js')
//const path = require('path')
const app = express()



///for cookies

// const cookieParser = require("cookie-parser");
// app.use(cookieParser());


app.use(bodyParser.json())
mongoose.connect("mongodb+srv://komalbansod_04:BdcyrSiZZa4v5y76@komal04.fvnel.mongodb.net/outShade?retryWrites=true&w=majority", {

    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))
const staticPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../views")
app.use(express.static(staticPath))
app.use(express.static(viewsPath))
app.set("view engine", "hbs")
app.get("/", (req, res) => {
    res.render("index  ")
})


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log(`the express is run on ` + (process.env.PORT || 3000))
})