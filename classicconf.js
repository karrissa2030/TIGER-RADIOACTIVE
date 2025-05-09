/*Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu Apalagi Lari Dari Tanggung Jawab

Base Ori : Hw Mods
Base Haikal Hw Mods : Copyan Dari Base Dika

• [ Recode Bye > ZetsuboXygen777]
   # AND↓
   THANKS TO >
  XygenGod777( Watashi / 私 )
  Hw Mods Wa / Haikal (Base)
  Adiwajshing (Baileys)
  whiskeysockets (Baileys)
  Thunder X7 (Inspirate)
  Pak Tzy (Inspirate)
  Maintainer (Taira Makino)
  Maintener2(Samue-l1)
  Maintener3(Arlodragon)
  ♥️ ありがとう
                 >
*/
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk'
global.ig = 'kipkoech' // ubah aja
global.email = 'samuelcircute@gmail.com' //serah
global.region = 'kenya' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'DRAGON' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['254746764468'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '𝚻𝚰𝐆𝚵𝚪 𝐑𝚫𝐃𝚰𝚯𝚫𝐂𝚻𝚰𝛁𝚵 𝛁1' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝚻𝚰𝐆𝚵𝚪 𝐑𝚫𝐃𝚰𝚯𝚫𝐂𝚻𝚰𝛁𝚵 𝛁1' // ubah aja ini nama sticker
global.author = '༻࿇𝚻𝚮𝚵𝚵 𝐃𝚪𝚫𝐆𝚯𝚴❖༺' // ubah aja ini nama sticker
global.prefa = '.'
global.sessionName = '{"noiseKey":{"private":{"type":"Buffer","data":"INbGk+hwMQPkzihl2aCYex1Zfwbcrp/5mh7Xv/O6cHE="},"public":{"type":"Buffer","data":"LnNA1tN4ZZPiX7FYSBQZShk3cNIP37DI57k1/0L1PUY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"kMo+rV7PyBygqk/+/bnuaF8aZsOHD+qMcQtSs+lvBWs="},"public":{"type":"Buffer","data":"ankwLtxjitmuVCVY4xbse/HMEYU+9jzZVmcyu2UiZjQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"ULkfaGzcMB9MQ5lbsfpFkjwwTaFhUE5dB6uRCji3v1I="},"public":{"type":"Buffer","data":"joWRM32soqx7wRauPzemS7QytrIW40+lwQMSvAAUdjw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"0Kk8sii2sqv9osCdZ1P8YfElLsOjczxvUhDAvTiPPkA="},"public":{"type":"Buffer","data":"jppHTwe5GQIZdHjCccLIZ2sf4sEPXsUNAKIIUV6lZEg="}},"signature":{"type":"Buffer","data":"owVhNtV0ZdWF05uJaZekRn7PnnmRs3s7/RsEz1eVt0hnh3PJHdXweD1ezvVB8ODxuESh/4qWuGUhI5aB6u+kCQ=="},"keyId":1},"registrationId":71,"advSecretKey":"4W8LM+s53kSURb+0SKkNJ8+i4v0Il0uU3jIPwkcIjgU=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"vDgF4fA8TiabD06NBcxUuQ","phoneId":"7675147c-0ff4-40de-82f3-5bb77f485e17","identityId":{"type":"Buffer","data":"CDiYc+vG+CyJ/Yxrc3nIft9uUMI="},"registered":true,"backupToken":{"type":"Buffer","data":"hmNuGpqgerwTNKxcsBcwnWwPIPc="},"registration":{},"pairingCode":"Z8FQYCL2","me":{"id":"254740069407:65@s.whatsapp.net"},"account":{"details":"CMWk4LsEEJiw+cAGGAsgACgA","accountSignatureKey":"AV7HUx2qQ7rOs5sGjSCdqdQS+QVgzDwxM2rWlqbcNmk=","accountSignature":"3Mxac0f0ftZG5DC6jEouIVRhac9UkD1i/d5IECbrKvOmhY6uOi3/cmec/UDPk5JLU/GbLUC5GcLrtudsqzsrDg==","deviceSignature":"ofJci6qQkl+kqpXEHjSNZxODXqAkN6wWzOFeI6dT064virKx8xR1djz3Pmi9mTKjv3FiCU8bxsNLhTdkDutsCg=="},"signalIdentities":[{"identifier":{"name":"254740069407:65@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BQFex1MdqkO6zrObBo0gnanUEvkFYMw8MTNq1pam3DZp"}}],"platform":"android","lastAccountSyncTimestamp":1746819111,"myAppStateKeyId":"AAAAAEZe"}'  //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.autolike = process.env.autolikestatus || "TRUE"
global.autoread = process.env.autoread || "TRUE"
global.wlcm = []
global.wlcmm = []
global.anticall = true
global.rn = 'typing
global.readMessages = process.env.readMessages || "TRUE"
/*
Declaring Menu type

V1 = Photo
V2 = Video
V3 = Text
V4 = Button

*/
global.menutype = "v1"
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
