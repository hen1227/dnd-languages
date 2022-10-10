let express  = require('express');
var fs = require('fs')
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const dndLanguage = require("./dnd-languages")
const cors = require('cors');


let app = express();
let port = process.env.PORT || 5000

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post('/dnd-languages/upload', bodyParser.urlencoded({ extended: false }), (req, res) => dndLanguage.upload(req, res))
app.post('/dnd-languages/getCount', bodyParser.urlencoded({ extended: false }), (req, res) => dndLanguage.getCount(req, res))
app.get('/dnd-languages/database/languages.json', function(req, res) {
	fs.readFile('database/languages.json', (err, data) => {
		if(err){
		  console.log('Something went wrong');
		  console.log(err);
		  res.end("failed to load")
		} else {
		  const obj = JSON.parse(data);
		  res.send(obj)
		}
	})
})
app.get('/dnd-languages/database/*.zip', function(req, res) {res.sendFile(__dirname+req.url.slice(14)) })
app.get('/dnd-languages/database/*.tflite', (req, res) => { res.sendFile(__dirname+req.url.slice(14)) })
app.get('/dnd-languages/database/*.png', (req, res) => { 
	console.log(__dirname + req.url.slice(14));
	res.sendFile(__dirname+req.url.slice(14)) })

app.listen(port, function(){
	console.log("Server started on port: "+port)
})

app.get('*', (req, res) => {
	res.send("Couldn't find your request");
});


process.on('exit', function () {
    console.log('About to exit, waiting for remaining connections to complete');
});
