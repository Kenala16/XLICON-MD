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
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0w3dGNGR0YzNmFPTVZzSjZDOGw1b2ZWeVFnRmpUNlpxUC9YelFxZXVWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR2lwWndXR3A3VHY1VytELzU2dmllMFZhT2xHOHBkQU85SGZseUYwRnhnVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRmc4VkZObXhJaVRhME8zNmF1WFVKQk5HdGFUb0NaWFlYNkJGbGNld200PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5ejFWcTBENVRNQ2VmRkMrWktjelVCbXMrY3h3ZXE2NkpWc2JXQlJOMkY4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtNVWlhUjlHd1BSVVZ1SVpXYURjbmFWS1BqcWY4QkY1bGdLWDZickk4a3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlphSFV3YW9oZE1RRHJ6SnFwU1lwbzM5cDZvL21CRU0rcDBERU55MjRJRGc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFZStVdVNpOXBmcVllRm91MXBVRC90QU9yUXR1SFJqNnBaendTUlUrd1JHY0NZRGNOT0djcXVGd0tpMmtIWTBWNFd1Vm5xUkY5djJicUtNZ3lrTlhodz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEwNywiYWR2U2VjcmV0S2V5IjoiRVV1L2U1QUpKaFYrQldLTmFaUVl1RVA0b0hlVldaSXZxUEg4a25WZmZMND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoia0V3Y0ZjenNTam1taGY1bTZlVzBPZyIsInBob25lSWQiOiJhNTJhZTdiZC04Nzc1LTQzZmItYmI3Yy03YTIwYzFjN2M4M2MiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkhMZmNPZGRUSi9VYnRBMHR5V01BSGxFaUc4PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQYlE2MWFucWxrUGJhLzdEY0JqZ2tKOCtCNFU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOS0Y3ZVVFRUtmVGk2b0dHQU09IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InI1QXp6ZWprTHFzcFk2MVNKcnc5RWlseU9FR2lKU3RuS0h1ODNNR3Z5WDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdZVXJ2a3RlTkxpeEo3OExvcmtEQkpRcFpsNzlCOTNOVk1Fd1dJZG9xejlUUWJaVXFOYmFmM1Y2NEZieXlrLyt3bTN4YVhwUVFBVnRyRTk3RW1pU0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOMzc3c3p2S1VSNTBOS21ucXJZcDZhYjdUTGJrWUpNQUw0eU5PalR0WXRleGtBOEpoWUt2UHNhTmwweGNOc0ZhODNaZGpkV0xwTVFqNVl2UDRnRnJpQT09In0sIm1lIjp7ImlkIjoiMjYzNzE0OTA2MjE2OjQyQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNDkwNjIxNjo0MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhK1FNODNvNUM2cktXT3RVaWE4UFJJcGNqaEJvaVVyWnloN3ZOekJyOGwvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk4ODg0MDA5fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'KEKETSO BOT',
  packname:  process.env.PACK_NAME || 'MADE BY KENDRICK'  
  botname:   process.env.BOT_NAME === undefined ? "KEKETSO BOT" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'KENDRICK' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
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
