var express = require("express");
var app	= express();
var messages = ["test message"];
var students = [{"name":"jimmy", "occupation": "coder"}, {"name":"bobby"}, {"name":"susan"},
{"name":"todd"}, {"name":"timothy"}, {"name":"phineas"}];
app.configure(function() {
	app.use(express.bodyParser());
	app.use(function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	});
});

app.get('/students', function (req, res) {
	console.log(req.query);
	var order = req.query.order;
	var sortedStudents = students.sort();
	if(order=='desc') {
		sortedStudents = sortedStudents.reverse();
	}
	res.send(sortedStudents);
});

app.get('/occupation/:first', function (req, res) {
	res.end("occupation with 1 route vars");
});

app.get('/occupation/first/:second', function (req, res) {
	res.end("occupation with 2 route vars");
});

app.get('/occupation/:first/:second/:third', function(req, res){
	console.log('im here');
	console.log(req.params);

	console.log('query vars');
	console.log(req.query);

	res.send(messages);
	res.end(JSON.stringify(messages));
});

app.post('/posted',function(req, res){
	var posting = req.body;
	messages.push(posting);
	console.log(posting);
	console.log("postinggg");
	res.end();
});

app.get('/posted', function(req, res) {
	console.log('gettting');
	res.end(JSON.stringify(messages));
});

app.listen(8765);
console.log('Listening on port 8765');