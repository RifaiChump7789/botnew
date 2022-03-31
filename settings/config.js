const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain
global.anticall = false
global.anti_delete = false

// setting
global.ownername ="RifaiChump"
global.ownernumber = "6289501564737"
global.botname = "Rifai-BoT"
global.thumbnail = fs.readFileSync("./settings/rifai.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/c50321dd75b720ceaf68f.jpg"
global.mzstore = fs.readFileSync("./settings/mz.jpg")
global.mlstore = fs.readFileSync("./settings/ml.jpg")
global.jokistore = fs.readFileSync("./settings/room.jpg")
global.lolkey = 'e966d3aac613b61dabd35cc6' //register lolhuman.xyz klo mau apikey
global.zenzkey = '8423e19c13' //register zenzapi.xyz klo mau apikey
global.limit = {
		free:30,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})