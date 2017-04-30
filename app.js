var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var Form = require('./models/form').Form;
var nodemailer = require('nodemailer');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/asset')));

/**
 * Create reusable transport object using the default SMTP transport
 */
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xxxxxx@gmail.com',
        pass: 'xxxxxx'
    },
    // Warning only use it when the host is untrusted
    tls: {
         rejectUnauthorized: false
    }

});

app.post('/api', function(req, res) {
    
    // Setup email data
    let mailOptions = {
        from: '<' + req.body.email + '>',
        to: 'pccm_77@hotmail.com',
        subject: 'Email from my webpage, of ' + req.body.fname + ' ' + req.body.sname,
        text: req.body.message
    };

    // Send data via email
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log("Error sending the email " + error);
        } else {
            console.log("Email sent correctly");
        }
    });

    // Save data in database
    var form = new Form(req.body);
    form.save().then(function() {
        var result = JSON.stringify({ result: 'success'});
        res.send(result);
    }, function(err) {
        var result = JSON.stringify({ result: 'error'});
        res.send(result);
    })
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;