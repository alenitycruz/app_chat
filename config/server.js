var express = require('express')

var consign = require('consign')

var bodyParser = require('body-parser')

var expressValidator = require('express-validator')

var app = express()

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(bodyParser.urlencoded({ extender: true}))
app.use(express.static('./src/public'))

app.use(expressValidator())

consign()
    .include('src/routes')
    .then('src/controllers')
    .then('src/models')
    .into(app)

    module.exports = app