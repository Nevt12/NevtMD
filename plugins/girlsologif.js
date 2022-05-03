//
const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const gs = require('nekos.life')
const neko = new gs()

let handler  = async (m, { conn, text }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  pp = (await neko.nsfw.girlSoloGif()).url
                     await sticker(false, pp, 'NSFW Neko', author).then(gege => {
                     conn.sendMessage(m.chat, gege, 'stickerMessage', { quoted: m })
                     })
  //if (!text) throw 'Uhm...Teksnya?'
}
handler.help = ['girlsologif']
handler.tags = ['nsfw']
handler.command = /^girlsologif$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.limit = false 
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
