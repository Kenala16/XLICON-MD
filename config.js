const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "263714906216"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Kendrick:<password>@keketso.jgebuhb.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'panashekenala@gmail.com'
global.github = 'https://github.com/Kenala16/XLICON-MD'
global.location = 'Zimbabwe'
global.gurl = 'https://instagram.com/head_over_hillz_zw/' // add your username
global.sudo = process.env.SUDO || '263714906216' 
global.devs = '263714906216';
global.website = 'https://github.com/kenala16/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0NqMXVJbjI4eDltK3M2RFo4dXBycm5yaVpDUjFIM3o3eGE3dWFCQ1FXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmxVd0FEWkJrNVQ4UDB3R3YrcGU4N3l3UDV1OTJvenRmQ2daelZtSEZTUT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT2xscDRPTE5PNGpmT2hDdFpldFlid1NnMVJIbElWYXJGWTc3dVdCZEVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTdTBneHJiTDVqUVJGbXROSzZiYmdFQWF6UFFCSWxUZ0trS3djZ3M1WndnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhJMXRCc3lHOGhWcFp0MVhJRmZ0ZHN2K05TamVlUW9LNDY3VkxIRTNRR2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV2UjZKNEVlMUh1QXJoZmRPNHhRNWR3LzlYT0toVU4vanFIc3NTeEs3aGc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0QzA2WWJvVUZXL21vVGp6MklMcVVhYklaU2xWYXJMK3NJUit5OEVlVXFNZlJtc0hncHlCTVY2VGczRXRVMDdVU3ZDdUpCWVc0OVorOUpjL1p4dlRoUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI0NCwiYWR2U2VjcmV0S2V5IjoiNkRQQUtobGViTnNxWEdubHRBbTN5cEJLR1pnSXhxUjdzZUw2Z3FJSURoYz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSzh2SUNhcEVTRHl4dkhIR2JXT0R3QSIsInBob25lSWQiOiIxMzk1ZDZmOC1lZmJkLTQyZDEtOGYwMy1jYTFlYzc1ZGMxM2QiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnd1eklhUlVNNmZlM1VuRFJ3dTc3QWFVY0lNPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJueEtMbWhuT3pNSS91MG9LMkY1eG9SbmIxMk09In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNL1U3NUFGRU9DNG1ha0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImwvV2VjdzlPaVBveDg3LzhBZi8yWHhnUHZQMjh0WkRSVjdNSlVYMkNJejQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik5YM1JlakhMMXRnaTJjVFpRRmoyMFk4eGp1d21hZ1M5RnpTS285YmRxT1ZpejJ6OUxPRDhKMUIrbENTRjQ4VURBcDB4NXREUlY2SUpMalNqdmcvOERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOQUEwQmVNWk5VVzFKNURpeHhVNkNxcnU5bkRKWWMxblV2Y2xVMEFxRlNLaTYwUklGNlVDTXcwMWVUeEsxSmQ2VHdNYkp3Qm5oSE5yOEkzVlNuejVpZz09In0sIm1lIjp7ImlkIjoiMjYzNzE0OTA2MjE2OjExQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNDkwNjIxNjoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaZjFubk1QVG9qNk1mTy8vQUgvOWw4WUQ3ejl2TFdRMFZlekNWRjlnaU0rIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk3MDEyODM2fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'KEKETSO BOT',
  packname:  process.env.PACK_NAME || 'MADE BY KENDRICK'  
  botname:   process.env.BOT_NAME === undefined ? "KEKETSO BOT" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'KENDRICK' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hi its Kendrick am alive' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '0fce0d68-a17d-41ef-b48b-0509f1c922f5' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'keketso bot' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'KENDRICK',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
