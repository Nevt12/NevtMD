let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
     if (!db.data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
     json = (await Neko.nsfw.neko()).url
   conn.sendFile(m.chat, json, 'neko.jpg', 'Nyaaa~', m, false)
}
handler.help = ['nsfwneko']
handler.tags = ['nsfw']
handler.command = /^nsfwneko$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
