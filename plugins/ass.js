let fetch = require('node-fetch')
let wm = global.botwm
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  res = await fetch(`https://api.xteam.xyz/randomimage/ass?APIKEY=cristian9407`)
  heum = await res.buffer()
  conn.sendButtonImg(m.chat, heum, 'wangy wangy wangy', wm, 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['ass']
handler.tags = ['nsfw']

handler.command = /^(ass)$/i
handler.owner = false
handler.mods = false
handler.premium = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

