/*let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
conn.sendFile(m.chat, json.result.female, 'cwe.jpg', 'Cewe', m)
conn.sendFile(m.chat, json.result.male, 'pria.jpg',  'Cowo', m)

}
handler.help = ['ppcp', 'ppcouple']
handler.tags = ['internet']
handler.command = /^ppcp|ppcouple|couple$/i


module.exports = handler*/



let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
  let res = await fetch('https://api.xteam.xyz/randomimage/ppcouple?APIKEY=cristian9407')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.result.male, '', 'cowo', m)
  await conn.sendFile(m.chat, json.result.female, '', 'cewe', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet', 'anime']
handler.command = /^(ppcp|ppcouple)$/i
handler.limit = true

module.exports = handler

