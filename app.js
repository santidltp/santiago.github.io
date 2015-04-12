// Require the express library:
var express = require('express');
var favicon = require('serve-favicon'); //favicon
var nodemailer = require('nodemailer');
var bodyParser   = require('body-parser');

// Create an app:
var app = express();
//set up engine
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(__dirname + '/public'));
app.engine('.html', require('ejs').__express);
//icon
app.use(favicon(__dirname + '/public/img/favicon.ico'));



// Optional since express defaults to CWD/views

app.set('views', __dirname + '/views' );

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('html').
app.set('view engine', 'ejs');

// Provide routes with route handler functions:
app.get('/', function (req, res) {
res.render('index.ejs');
// res.send("heeeeeeelo");
});

app.get('/time', function (req, res) {
 res.render('time.ejs');
console.log(req.body.email);
});

app.get('/send', function (req, res) {
   var name = req.body.name;
    var email = req.body.email;
    
    var message = req.body.message;

    var mailOpts, smtpTrans;

    smtpTrans = nodemailer.createTransport('SMTP', {
        service: 'Hotmail',
        auth: {
            user: "santidltp@hotmail.com",
            pass: "santiago1"
        }
    });

    mailOpts = {
      
        to: email,
        subject: subject,
        text: message
    };

    smtpTrans.sendMail(mailOpts, function (error, response) {
        //Email not sent
        if (error) {
            res.send(false);
        }
        //Yay!! Email sent
        else {
            res.send(true);
        }
    });
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
module.exports = app;