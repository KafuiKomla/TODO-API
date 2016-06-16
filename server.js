/**
 * Created by kafui on 6/16/2016.
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(res,req){
    res.send('TODO API root!');
});
app.listen(PORT, function(){
    console.log('Express Listening on port: '+ PORT + '!');
});