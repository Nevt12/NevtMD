/*let fetch = require('node-fetch')
let handler  = async (m, { conn }) => {
  conn.sendButtonLoc(m.chat, await (await fetch(flu + 'Truth')).buffer(), `${pickRandom(global.truth)}`, wm, 'Bener?😂', `beneran`, m)
}
handler.help = ['truth']
handler.tags = ['game']
handler.command = /^(truth)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.truth = [
"Acara tv apa yang paling kamu benci?\nBerikan alasannya!",
"Apa baju yang (menurutmu) paling jelek yang pernah kamu pakai, dan kapan kamu memakainya?",
"Apa hal paling buruk (gosip) yang pernah kamu bilang tentang temenmu?",
"Apa hal paling memalukan dari dirimu?",
"Apa hal paling memalukan dari temanmu?",
"Apa hal pertama yang kamu lihat saat kamu melihat orang lain (lawan jenis)?",
"Apa hal pertama yang terlintas di pikiranmu saat kamu melihat cermin?",
"Apa hal terbodoh yang pernah kamu lakukan?",
"Apa hal terbodoh yang pernah kamu lakukan?",
"Apa ketakutan terbesar kamu?",
"Apa mimpi terburuk yang pernah kamu alami?",
"Apa mimpi terkonyol yang sampai sekarang kamu kamu ingat?",
"Apa pekerjaan paling konyol yang pernah kamu bayangin kamu akan jadi?",
"Apa sifat terburukmu menurut kamu?",
"Apa sifat yang ingin kamu rubah dari dirimu?",
"Apa sifat yang ingin kamu rubah dari temanmu?",
]*/
/*
Made by Aine
*/

/*let handler = async (m, { conn }) => {
	let img = 'https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg'
    let trut = [
"Pernah ngambil uang ortu apa ga?",
"Pernah bohong sama ortu apa aja?\nCoba ceritakan tentang kebohongannya",
"Apa makanan yang kamu sukai?",
"Siapa yang mau di jadikan pacar di gc ini?",
"Apa mimpi terburukmu?",
"Apa hal paling memalukan dari temanmu?",
"Pernah suka sama siapa aja? berapa lama?",
"Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)",
"Apa ketakutan terbesar kamu?",
"Pernah suka sama orang dan merasa orang itu suka sama kamu juga?",
"Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
"Pernah gak nyuri uang nyokap atau bokap? Alesanya?",
"Hal yang bikin seneng pas lu lagi sedih apa?",
"Pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?",
"Pernah jadi selingkuhan orang?",
"Hal yang paling ditakutin",
"Siapa orang yang paling berpengaruh kepada kehidupanmu",
"Hal membanggakan apa yang kamu dapatkan di tahun ini",
"Siapa orang yang bisa membuatmu sange :v",
"Sapa orang yang pernah buatmu sange",
"(bgi yg muslim) pernah ga solat seharian?",
"Siapa yang paling mendekati tipe pasangan idealmu di sini",
"Suka mabar(main bareng)sama siapa?",
"Pernah nolak orang? alasannya kenapa?",
"Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget",
"Pencapaian yang udah didapet apa aja ditahun ini?",
"Kebiasaan terburuk lo pas di sekolah apa?"
]  // tambahin kata kata sendiri 
	conn.sendFile(m.chat, img, 'maker.jpeg', `*Truth*\n\n“${pickRandom(trut)}”`, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['truth']
handler.tags = ['fun']
handler.command = /^(truth|kebenaran|kejujuran)$/i
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
*/

/*
Made by Aine
*/

let handler = async (m, { conn }) => {
	let img = 'https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg'
    let trut = [
    "Acara tv apa yang paling memuakkan? Berikan alasannya!", 
    "Apa baju yang (menurutmu) paling jelek yang pernah kamu pakai, dan kapan kamu memakainya?",
    "Apa binatang patronus yang cocok untuk kamu?", "Apa hal paling buruk yang pernah kamu bilang tentang temenmu?",
    "Apa hal paling memalukan dari dirimu?",
    "Apa hal paling memalukan dari temanmu?", 
    "Apa hal pertama yang kamu lihat saat kamu melihat orang lain (beda gender)?",
    "Apa hal pertama yang terlintas di pikiranmu saat kamu melihat cermin?",
    "Apa hal terbodoh yang pernah kamu lakukan?", "Apa hal terbodoh yg pernah kamu lakukan ?",
    "Apa ketakutan terbesar kamu?",
    "Apa mimpi terburukmu?", "Apa mimpi terkonyol yang pernah kamu inget?",
    "Apa pekerjaan paling konyol yang pernah kamu bayangin kamu akan jadi?",
    "Apa sifat terburukmu menurut kamu?",
    "Apa sifat yang ingin kamu rubah dari dirimu?",
    "Apa sifat yang ingin kamu rubah dari temanmu?",
    "Apa yang akan kamu lakuin bila pacarmu bilang hidung atau jarimu jelek?",
    "Apa yg kamu fikirkan sebelum kamu tidur ? ex: menghayal tentang jodoh,dll.",
    "Apakah hal yang menurutmu paling menonjol dari dirimu?",
    "Bagian tubuh temanmu mana yang paling kamu sukai dan ingin kamu punya?",
    "Bagian tubuhmu mana yang paling kamu benci?", 
    "Dari semua kelas yang ada di sekolah, kelas mana yang paling ingin kamu masuki dan kelas mana yang paling ingin kamu hindari?",
    "Deksripsikan teman terdekat mu!",
    "Deskripsikan dirimu dalam satu kata!",
    "Film dan lagu apa yang pernah bikin kamu nangis?",
    "Hal apa yang kamu rahasiakan sampe, sekarang dan gak ada satu orangpun yang tau?",
    "Hal paling romantis apa yang seseorang (beda gender) pernah lakuin atau kasih ke kamu?","Hal-hal menjijikan apa yang pernah kamu alami ?",
    "Jika kamu lahir kembali dan harus jadi salah satu dari temanmu, siapa yang akan kamu pilih untuk jadi dia?",
    "Jika punya kekuatan super/ super power ingin melakukan apa",
    "Jika sebentar lagi kiamat, apa yg kamu lakukan ?",
    "Kalo kamu disuruh operasi plastik dengan contoh wajah dari teman sekelasmu, wajah siapa yang akan kamu tiru?",
    "Kamu pernah mencuri sesuatu gak?",
    "Kamu takut mati? kenapa?",
    "Kapan terakhir kali menangis dan mengapa?",
    "kemampuan spesial kamu apa?",
    "Kok bisa suka sama orang yang kamu sukai?",
    "Menurutmu, apa sifat baik teman terdekatmu yang nggak dia sadari?",
    "Orang seperti apa yang ingin kamu nikahi suatu saat nanti?",
    "Pekerjaan paling ngenes apa yang menurutmu cocok untuk teman di sebelah kananmu?",
    "Pengen tukeran hidup sehari dengan siapa? (teman terdekat yang kalian sama-sama tahu) dan mengapa",
    "Pernahkah kamu diam-diam berharap hubungan seseorang dengan pacarnya putus? Siapa?",
    "Pilih PACAR atau TEMAN ? berikan alasannya !",
    "Quote apa yang paling kamu ingat dan kamu suka?",
    "Rahasia apa yg belum pernah kamu katakan sampai sekarang kepada teman mu ?",
    "Rolemodel (panutan) kamu siapa?",
    "Siapa di antara temanmu yang kamu pikir matre?",
    "Siapa di antara teman-temanmu yang menurutmu potongan rambutnya paling ngenes (paling nggak banget)?",
    "Siapa diantara temen-temenmu yang paling NGGAK fotogenik dan kalo difoto lagi ketawa mukanya kaya kuda?",
    "Siapa mantan terindah mu? dan mengapa kalian putus ?!",
    "Siapa nama artis yang pernah kamu cium fotonya diam-diam?",
    "Siapa nama guru cowok yang pernah kamu sukai dulu?",
    "Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
    "Siapa nama orang (beda gender) yang menurutmu akan asyik bila dijadikan pacar?",
    "Siapa nama orang yang kamu benci, tapi kamu rasa orang itu suka sama kamu (nggak harus beda gender)?",
    "Siapa nama orang yang pernah kamu ikutin diam-diam?",
    "Siapa orang (lawan jenis) yang paling sering terlintas di pikiranmu?",
    "Siapa orang yg paling menjengkelkan di antara teman teman mu ? alasannya!",
    "Siapa sebenernya di antara teman-temanmu yang kamu pikir harus di make-over?",
    "Siapa yang paling mendekati tipe pasangan idealmu di sini"
]
  // tambahin kata kata sendiri 
	conn.sendFile(m.chat, img, 'maker.jpeg', `*Truth*\n\n“${pickRandom(trut)}”`, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['truth']
handler.tags = ['fun']
handler.command = /^(truth|kebenaran|kejujuran)$/i
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

