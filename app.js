const express = require("express")
const app = express();
const body = require("body-parser")
app.use(body.urlencoded())
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"))

app.get("/", (req,res) => {
        res.cookie("o","o")
	res.redirect(`/home?lol=${req.query.lol}`) 
})
app.get('/home', (req,res) => {
	res.render("lol",{lol:req.query.lol, lola:"lol"});
})
app.use((req,res,next) => {
	res.render("404")
	next()
})
app.listen(8080);


