var express = require('express');
var app = express();
app.use(express.static('public'));

var server_port = 3000;
var server_ip_address = '127.0.0.1';

const respHttpOptions = { 
	root: 'public',
	dotfiles: 'deny',
	headers: {
		'x-request-id' : '12345'
	}

}

app.get('/', function(req, res){
	res.sendFile(
	'index.html', respHttpOptions, (err) => {
		if (!err)
			console.log("Error not thrown");
		else
			console.log("Error thrown: " + err.message) ;
	});
});
try{
app.listen(server_port, server_ip_address, function(){
	console.log("listening on " + server_ip_address + ", server_port " + server_port);
});
}
catch(e){
	console.log(e.message);
}
