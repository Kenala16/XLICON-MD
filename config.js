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
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEU0Zzg5MHJkaGNkTlRZUlNBaE9lK0Vzc3BPZllWUXZGaWk4eWhBQ2QwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWxGL01DS0lMbUdoZEc4NmxYTTAxMFVsVm02OVFTTFVEaDMrNGNCKzB5RT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRVd4KzRyb3JvZkxnUWJ3Q3BJYTRmSlN6UXFmM0QvTVAwOG5GaVJpZUdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRdDMvNFlpWmM5bzgyQ2EweEg4RFZqN2RTQXY5anAyUU5kcFh2Mmp4NTNZPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNDUFdiYXRWc3JYb0x6YVJSMlZSN2NzSE5qVi9Fbmx6ZXVuT2pOc3lQWEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkI0UWQwTmlsVFg1WmJUa2laazV2cWdnTkF4eXFQYUhFckdHOFd3TEpaSGc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRzlqOXl2UkY0M1pBUmROSVpXVFV3Q291M01YeFJNYW9RQTlMeEMrcW93R0lTMVllcVJDQk44NVczNTlaTGNyZVFaYXFQMERJV2tYTEVZZFFiamFoQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjUyLCJhZHZTZWNyZXRLZXkiOiIyTTdjUmhuVWZMRzdGSXNFMXl0Vjl2clZlVkoraVpQME9naE1rYVVFWUtBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmNkNqWjJyelR5ZUtja1RUV1RybTdRIiwicGhvbmVJZCI6IjcxMmYxYmE5LTU3ZjctNDFiYy04M2JiLTMxMDJjMTRmOGZmMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrWS9ZclBPV1ZZeU90blpmMmJlZjNWQ0pXSnM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdWQ1dZcTJRZ2tYTWs5eUZMbklmOGp4T3Z2cz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05QSS9yZ0RFTkhUcTZvR0dBTT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYXdVY04zRC9XYk9OeW13Q25ENTBVQkl6Wjgzc2R5ZVpwZzFaNUZGUlhUVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVDdvcXBuMEhZNE5XN2ZEYmlxUWNoSktEc3U1dzl5ai9zS2Q1M2RJaUF5VE5qVks5d0NyaW5WSG1LbVpOaGxWTmV0Y1M5SFY0OWlQMXhBSXZXajZKQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IlcrY2dLVW1sR1dXSmZRR0JHUU9jcjVvY21ZR0JHeFdHRVhRSkJLRHRzTEdpZDBqOEpyTmhsV3h3NE5XNVY2cUFqUkZwVTRFb08xd0F5NmxlclVUemdBPT0ifSwibWUiOnsiaWQiOiIyNjM3MTQ5MDYyMTY6NDlAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE0OTA2MjE2OjQ5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldzRkhEZHcvMW16amNwc0FwdytkRkFTTTJmTjdIY25tYVlOV2VSUlVWMDEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTk0MDgzNDB9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'ᴋᴇᴋᴇᴛsᴏ ʙᴏᴛ',
  packname:  process.env.PACK_NAME || 'MADE BY ᴋᴇɴᴅʀɪᴄᴋ'  
  botname:   process.env.BOT_NAME === undefined ? "ᴋᴇᴋᴇᴛsᴏ ʙᴏᴛ" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'ᴋᴇɴᴅʀɪᴄᴋ' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '!' : process.env.PREFIX,
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
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'ᴋᴇᴋᴇᴛsᴏ ʙᴏᴛ' : process.env.HEROKU_APP_NAME
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
