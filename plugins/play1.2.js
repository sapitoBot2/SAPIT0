let fetch = require('node-fetch')

let handler = async (m, {command, conn, text}) => {

if (!text) throw `*❰ ❗ ❱ Ingrese el nombre/titulo o link para descargar la canción o vídeo de YouTube*\n\n*Ejemplo*\n*#play2 Bad Bunny tu no metes cabra remix*\n*#play Billie Eilish - Bellyache*`

if (command == 'play1') {

let espera = '*❰ ❗ ❱ Aguarde un momento en lo que envío su audio*'

m.reply(espera)

let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)

let json = await res.json()

conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}

if (command == 'play2') {

let espera = '*❰ ❗ ❱ Aguarde un momento en lo que envío su video*'

m.reply(espera)

let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp4?text="+text)

let json = await res.json()

conn.sendFile(m.chat, json.result.url, 'error.mp4', `*SapitoBot*`, m)}

}

handler.command = ['play1', 'play2']

module.exports = handler
