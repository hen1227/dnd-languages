let express  = require('express');
const fs = require('fs')
var cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const path = require('path')  
const dndLanguage = require("./dnd-languages")

let app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post('/dnd-languages/upload', bodyParser.urlencoded({ extended: false }), (req, res) => dndLanguage.upload(req, res))
app.post('/dnd-languages/getCount', bodyParser.urlencoded({ extended: false }), (req, res) => dndLanguage.getCount(req, res))
app.get('/dnd-languages/database/languages.json', function(req, res) {
	fs.readFile('/server/dnd-languages/database/languages.json', (err, data) => {
		if(err){
		  console.log('Something went wrong');
		  res.end("failed to load")
		} else {
		  const obj = JSON.parse(data);
		  res.send(obj)
		}
	})
})
app.get('/dnd-languages/database/*.zip', function(req, res) { res.sendFile('/server/'+req.url) })
app.get('/dnd-languages/database/*.tflite', (req, res) => { res.sendFile('/server/'+req.url) })
app.get('/dnd-languages/database/*.png', (req, res) => { res.sendFile('/server/'+req.url) })

app.listen(80, function(){
	console.log("Server started on port: 80")
})

app.get('*', (req, res) => {
	res.send("Couldn't find your request");
});


process.on('exit', function () {
    console.log('About to exit, waiting for remaining connections to complete');
});