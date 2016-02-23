var markoRequire  = require('marko/node-require')
markoRequire.install()
require('lasso').configure({
    plugins:[
        'lasso-marko'
    ]
})
var express = require('express');
var app = express();

app.use(require('lasso/middleware').serveStatic())
app.get('/',require('./src/pages/home'))

app.listen(8080,function(){
    console.log('listening on port 8080')
})