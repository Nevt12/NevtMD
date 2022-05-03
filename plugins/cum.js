let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
     json = (await Neko.nsfw.cumArts()).url
   conn.sendFile(m.chat, json, 'yuri.jpg', '', m, false)
}
handler.help = ['cum']
handler.tags = ['hentai']
handler.command = /^cum$/i
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
