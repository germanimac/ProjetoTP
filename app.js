var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var consign = require('consign');


app.set('view engine', 'ejs');
app.set('views', process.cwd()+'/app/view');


app.use(express.static(process.cwd()+'/app/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());
app.use(function (req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});

app.listen(process.env.PORT || 5000);


consign()
	.include( process.cwd()+'/routes')
	.then( process.cwd()+'/controller')
	.into(app);
module.exports = app;