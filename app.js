const express = require("express")
const app = express();
const body = require("body-parser")
app.use(body.json())

app.set('view engine', 'ejs');

app.get("/", (req,res) => {
	res.redirect("/home") 
})
app.get('/home', (req,res) => {
	res.render("lol",{lol:req.query.lol, lola:"lol"});
})
app.listen(8080);

