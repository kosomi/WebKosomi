var express 	= require('express');
var path		= require('path');
var app 		= express();

app.use(express.static(path.join(__dirname, '/')));
app.listen(5000, function(){
	console.log('Server is on 5000.');
});

