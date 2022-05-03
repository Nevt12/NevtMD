/*let yts = require('yt-search')
let handler = async (m, { text }) => {
  if (!text) throw 'Cari apa?'
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
Duration: ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

module.exports = handler*/

const { youtubeSearch } = require('@bochilteam/scraper')
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
  if (!text) throw `Cari apa?\ncontoh: *${usedPrefix}${command} dj i hope you're happy*`
  
  let results = await youtubeSearch(text)
  let thumb = results.video[0].thumbnail
  let anu = thumb+'.png'
  let { video, channel } = results 
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `    
📌 *Title:* ${v.title}
⌚ *Duration:* ${v.durationH}
⏲️ *Uploaded:* ${v.publishedTime}
👁️ *Viewers:* ${v.viewH} 
🚀 *Link:* ${v.url}
`
      case 'channel': return `
📌 *Channel:* ${v.channelName}
🧑‍🤝‍🧑 *Subscriber:* ${v.subscriberH} 
🎥 *Total Video:* ${v.videoCount} video
🚀 *Link:* ${v.url}
`
    }
  }).filter(v => v).join('\n==========================')
  try {
  conn.sendMedia(m.chat, anu, m, {caption: `🔎 *YouTube Search*\n`+teks, jpegThumbnail: await(await fetch(anu)).buffer()})
  } catch {
    throw teks
  }
}
handler.help = ['ytsearch <query>']
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i

module.exports = handler
