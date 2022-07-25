const fs = require("fs")
function decodeBase64Image(dest, dataString) {
	let buff = Buffer.from(dataString, 'base64'); 
	fs.writeFileSync(dest, buff);
	console.log("Image added to:  " + dest)
}

module.exports = {

    upload: function upload(req, res) {
        let realJson = JSON.parse(Object.keys(req.body)[0] +Object.values(req.body)[0]);
        const files = fs.readdirSync('database/'+realJson.language+'/'+realJson.letter+'/')
        var letterExt = files.length + 1;
        decodeBase64Image('database/'+realJson.language+'/'+realJson.letter+'/Letter'+letterExt.toString()+".jpg", realJson.image.replace(/\ /g, '+'));
        
        res.status(200).json({"Status": "Uploaded Successful!", "Message": "The "+letterExt.toString()+"th "+realJson.letter+" has been uploaded to the database" });
    },
    getCount: function getCount(req, res) {
        console.log(req.body)
        var response = []
        const dir = fs.readdirSync('database/'+req.body.language+'/')
        for (const symbol of dir){
            const len = fs.readdirSync('database/'+req.body.language+'/'+symbol).length
            response.push(len)
        }
        res.status(200).json({"Symbols":dir,"Numbers":response});
    }
}