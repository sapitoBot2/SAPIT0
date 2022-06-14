const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
} catch (e) {
} finally {
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.db.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let menu = `
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨OLA 👋, ${name}!!*

🗓️ FECHA: _HOY ES LUNES 14 DE JUNIO DEL 2022_

*Suscríbete al canal oficial de SAPITOBOT©*
_https://youtube.com/channel/UCcIQfBQ-F8R8LJFKUMUICkw_

USUARIO: ${name}😊



 *Numero del creador del Bot*: _wa.me/595983186566?text=hola_👋
 
 *Numero del SubBot Oficial*: No hay xdx.     
 
 Numero del Bot Oficial:_wa.me/595983186566?text=love_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┃ *< COMANDOS >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟🔰 _a_
┣ ඬ⃟🔰 _${usedPrefix}cat_
┣ ඬ⃟🔰 _${usedPrefix}dog_
┣ ඬ⃟🔰 _${usedPrefix}logos_
┣ ඬ⃟🔰 _${usedPrefix}runtime_
┣ ඬ⃟🔰 _${usedPrefix}tiktok *[url]*_
┣ ඬ⃟🔰 _${usedPrefix}sticker *[url]*_
┣ ඬ⃟🔰 _${usedPrefix}attp *[texto]*_
┣ ඬ⃟🔰 _${usedPrefix}google *[texto]*_
┣ ඬ⃟🔰 _${usedPrefix}imagen *[texto]*_
┣ ඬ⃟🔰 _${usedPrefix}play *[texto]*_
┣ ඬ⃟🔰 _${usedPrefix}play2 *[texto]*_
┣ ඬ⃟🔰 _${usedPrefix}ytmp3 *[url]*_
┣ ඬ⃟🔰 _${usedPrefix}ytmp4 *[url]*_
┣ ඬ⃟🔰 _${usedPrefix}tts *[lenguaje] [texto]*_
┣ ඬ⃟🔰 _${usedPrefix}toimg *[sticker]*_
┣ ඬ⃟🔰 _${usedPrefix}sticker *[imagen]*_
┣ ඬ⃟🔰 _${usedPrefix}tourl *[imagen]*_
┣ ඬ⃟🔰 _${usedPrefix}tourl *[video]*_
┣ ඬ⃟🔰 _${usedPrefix}tourl *[audio]*_
┣ ඬ⃟🔰 _${usedPrefix}fat *[nota de voz]*_
┣ ඬ⃟🔰 _${usedPrefix}bass *[nota de voz]*_
┣ ඬ⃟🔰 _${usedPrefix}blown *[nota de voz]*_
┣ ඬ⃟🔰 _${usedPrefix}deep *[nota de voz]*_
┣ ඬ⃟🔰 _${usedPrefix}fast *[nota de voz]*_
┣ ඬ⃟🔰 _${usedPrefix}robot *[nota de voz]*_
┣ ඬ⃟🔰 _${usedPrefix}slow *[nota de voz]*_
┣ ඬ⃟🔰 _${usedPrefix}tupai *[nota de voz]*_
┣ ඬ⃟🔰 _${usedPrefix}vibra *[nota de voz]*_
┣ ඬ⃟🔰 _${usedPrefix}nightcore *[nota de voz]*_
┣ ඬ⃟🔰_${usedPrefix}earrape *[nota de voz]*_
┣ ඬ⃟🔰 _${usedPrefix}reverse *[nota de voz]*_
┣ ඬ⃟🔰 _${usedPrefix}smooth *[nota de voz]*_
┣ ඬ⃟🔰 _${usedPrefix}enable antilink_
┣ ඬ⃟🔰 _${usedPrefix}disable antilink 
┣ ඬ⃟🔰_${usedPrefix}toplind@s_
┣ ඬ⃟🔰_${usedPrefix}doxeo_
┣ ඬ⃟🔰_${usedPrefix}gay_
┣ ඬ⃟🔰_${usedPrefix}report_
┣ ඬ⃟🔰_${usedPrefix}serbot_
  _AUDIOS_ 🔊
┣ ඬ⃟🔊 ${usedPrefix}Desamor 
┣ ඬ⃟🔊 ${usedPrefix}NO DIGAS ESO PAPU 
┣ ඬ⃟🔊 ${usedPrefix}a
┣ ඬ⃟🔊 ${usedPrefix}Murio el grupo 
┣ ඬ⃟🔊 ${usedPrefix}Yoshi.  
┣ ඬ⃟🔊 ${usedPrefix}Calla fan de bts











   
   
   
 estos comados solo puede ser usado por el owner del bot
   
   
   
 


┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *< OWNER >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💫 _${usedPrefix}update_
┗━━━━━━━━━━━━━┛
`.trim()
let mentionedJid = [who]
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: menu,
locationMessage: { 
jpegThumbnail: fs.readFileSync('./Menu2.jpg') },
hydratedFooterText: '©SapitoBot',
hydratedButtons: [{
urlButton: {
displayText: '𝙶𝙸𝚃𝙷𝚄𝙱',
url: 'https://https://github.com/sapitoBot2/SAPIT0'
}},
{
urlButton: {
displayText: '𝙲𝚁𝙴𝙰𝙳𝙾𝚁',
url: '://wa.me/595983186566'    
}},
{
quickReplyButton: {
displayText: null,
id: null,
}},
{
quickReplyButton: {
displayText: null,
id: null,
}},
{
quickReplyButton: {
displayText: null,
id: null,
}}]}}
}), { userJid: m.sender, quoted: m });
return await conn.relayMessage(
m.chat,
template.message,
{ messageId: template.key.id })    
    
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(menucompleto|comandos|allmenu|info|speed|estado|menú|menu|help|\?)$/i
handler.fail = null
module.exports = handler
