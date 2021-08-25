const { Telegraf, Markup, Extra } = require('telegraf');
const figlet = require('figlet');
const fs = require('fs-extra');
const txtt = require('./lib/txtt.js');
const adk = require('./lib/adk.js');
const photo = require('./lib/photo.js');
const videox = require('./lib/video.js');
const sticker = require('./lib/sticker.js');
const data = JSON.parse(fs.readFileSync('./lib/data/data.json'));
const admin = JSON.parse(fs.readFileSync('./lib/data/admin.json'));
const token = "xxxxxxxxxx;
const options = { channelMode: true, polling: true }
const bot = new Telegraf(token, options);


//=============================//
console.log('-----------------------------------------------------------');
console.log(figlet.textSync('BOT ADKHAR'));
console.log("                        www.rn0x.com ")
console.log("               Starting Bot Adhkar || Telegram")
console.log('-----------------------------------------------------------');
//============================//

//========= القائمة الرئيسية =========//

const home = Markup.inlineKeyboard([
  [Markup.button.callback('قرآن كريم', 'quran'),
  Markup.button.callback('أذكار', 'adhkar')],
  [Markup.button.callback('أذكار الصباح', 'adhkar2'),
  Markup.button.callback('أذكار المساء', 'adhkar3'),
  Markup.button.callback('أذكار النوم', 'adhkar4')],
  [Markup.button.callback('صور', 'photos'),
  Markup.button.callback('فيديو', 'videos'),
  Markup.button.callback('ملصقات', 'stickers')],
  [Markup.button.url('تحميل البوت', 'https://www.rn0x.com')]
])


bot.start((ctx) => {

  let stx = `
  مرحبا 👋 بكم في ${ctx.botInfo.first_name} 
  
  ➸ username: [ ${ctx.chat.username} ]
  ➸ name: [ ${ctx.chat.first_name} ]
  ➸ id: [ ${ctx.chat.id} ]
  
  
  # مميزات البوت
  
  1- قرآن كريم 📖
  2- أذكار عشوائية 🔄
  3- أذكار الصباح ☀️
  4- أذكار المساء 🌑 
  5- أذكار النوم 😴
  6- صور عشوائية 🖼️
  7- فيديو عشوائي 🎥
  8- ملصق عشوائي 🪧
  9- تحميل البوت 📥
  
  بمجرد بداء البوت بي الامر /start سيقوم البوت بإرسال لك رسائل بشكل تلقائي [صور و فيديو وأذكار] 🚩
  
  ⚠️ ملاحظة : عند حذف المحادثات مع البوت سيتم التوقف عن إرسال الرسائل لك ولإعادة التفعيل ارسل كلمة /start
  
  `
  ctx.reply(stx, home)
  if (!data.includes(ctx.chat.id)) {
    data.push(ctx.chat.id);
    fs.writeFileSync('./lib/data/data.json', JSON.stringify(data))
    console.log('save :' + ctx.chat.id)
  }
})

bot.action('start', async (ctx) => {
  let stx = `
  مرحبا 👋 بكم في ${ctx.botInfo.first_name} 
  
  ➸ username: [ ${ctx.chat.username} ]
  ➸ name: [ ${ctx.chat.first_name} ]
  ➸ id: [ ${ctx.chat.id} ]
  
  
  # مميزات البوت
  
  1- قرآن كريم 📖
  2- أذكار عشوائية 🔄
  3- أذكار الصباح ☀️
  4- أذكار المساء 🌑 
  5- أذكار النوم 😴
  6- صور عشوائية 🖼️
  7- فيديو عشوائي 🎥
  8- ملصق عشوائي 🪧
  9- تحميل البوت 📥
  
  بمجرد بداء البوت بي الامر /start سيقوم البوت بإرسال لك رسائل بشكل تلقائي [صور و فيديو وأذكار] 🚩
  
  ⚠️ ملاحظة : عند حذف المحادثات مع البوت سيتم التوقف عن إرسال الرسائل لك ولإعادة التفعيل ارسل كلمة /start
  
  `
  await ctx.reply(stx, home)
  await ctx.deleteMessage().catch((error) => { console.error('Error when sending: ', error); });
})




//========= القائمة الرئيسية =========//

//========= وظائف الأزرار =========//
bot.action('quran', async (ctx) => {
  await ctx.reply(
    txtt.t7,
    Markup.inlineKeyboard([Markup.button.callback('العودة', 'start')]))
  await ctx.deleteMessage().catch((error) => { console.error('Error when sending: ', error); });
})

bot.action('adhkar', async (ctx) => {
  let listadk = adk[Math.floor(Math.random() * adk.length)]
  await ctx.reply(
    listadk,
    Markup.inlineKeyboard([
      Markup.button.callback('التالي', 'adhkar'),
      Markup.button.callback('العودة', 'start')
    ])
  )
  await ctx.deleteMessage().catch((error) => { console.error('Error when sending: ', error); });
})

bot.action('adhkar2', async (ctx) => {
  await ctx.reply(
    txtt.t2,
    Markup.inlineKeyboard([
      Markup.button.callback('العودة', 'start')
    ])
  )
  await ctx.deleteMessage().catch((error) => { console.error('Error when sending: ', error); });
})

bot.action('adhkar3', async (ctx) => {
  await ctx.reply(
    txtt.t1,
    Markup.inlineKeyboard([
      Markup.button.callback('العودة', 'start')
    ])
  )
  await ctx.deleteMessage().catch((error) => { console.error('Error when sending: ', error); });
})

bot.action('adhkar4', async (ctx) => {
  await ctx.reply(
    txtt.t4,
    Markup.inlineKeyboard([
      Markup.button.callback('العودة', 'start')
    ])
  )
  await ctx.deleteMessage().catch((error) => { console.error('Error when sending: ', error); });
})


bot.action('photos', async (ctx) => {
  let listphoto = photo[Math.floor(Math.random() * photo.length)]
  await ctx.replyWithPhoto({ url: listphoto }, Markup.inlineKeyboard([
    Markup.button.callback('التالي', 'photos'),
    Markup.button.callback('العودة', 'start')
  ])
  )
  await ctx.deleteMessage().catch((error) => { console.error('Error when sending: ', error); });
})

bot.action('videos', async (ctx) => {
  let listvideo = videox[Math.floor(Math.random() * videox.length)]
  await ctx.replyWithVideo({
    url: listvideo
  }, Markup.inlineKeyboard([
    Markup.button.callback('التالي', 'videos'),
    Markup.button.callback('العودة', 'start')
  ])
  )
  await ctx.deleteMessage().catch((error) => { console.error('Error when sending: ', error); });
})

bot.action('stickers', async (ctx) => {
  let liststicker = sticker[Math.floor(Math.random() * sticker.length)]
  await ctx.replyWithSticker({
    url: liststicker
  }, Markup.inlineKeyboard([
    Markup.button.callback('التالي', 'stickers'),
    Markup.button.callback('العودة', 'start')
  ])
  )
  await ctx.deleteMessage().catch((error) => { console.error('Error when sending: ', error); });
})



bot.hears('الفاتحة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/001.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
  
})

bot.hears('البقرة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/002.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });

})

bot.hears('آل عمران', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/003.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('النساء', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/004.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('المائدة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/005.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الأنعام', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/006.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الأعراف', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/007.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الأنفال', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/008.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('التوبة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/009.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('يونس', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/010.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('هود', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/011.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('يوسف', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/012.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الرعد', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/013.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('ابراهيم', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/014.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الحجر', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/015.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('النحل', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/016.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الإسراء', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/017.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الكهف', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/018.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('مريم', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/019.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('طه', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/020.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الأنبياء', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/021.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الحج', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/022.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('المؤمنون', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/023.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('النور', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/024.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الفرقان', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/025.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الشعراء', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/026.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('النمل', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/027.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('القصص', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/028.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('العنكبوت', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/029.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الروم', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/030.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('لقمان', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/031.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('السجدة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/032.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الأحزاب', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/033.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('سبأ', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/034.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('فاطر', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/035.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('يس', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/036.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الصافات', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/037.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('ص', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/038.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الزمر', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/039.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('غافر', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/040.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('فصلت', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/041.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الشورى', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/042.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الزخرف', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/043.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الدخان', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/044.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الجاثية', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/045.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الأحقاف', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/046.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('محمد', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/047.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الفتح', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/048.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الحجرات', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/049.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('ق', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/050.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الذاريات', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/051.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الطور', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/052.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('النجم', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/053.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('القمر', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/054.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الرحمن', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/055.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الواقعة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/056.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الحديد', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/057.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('المجادلة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/058.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الحشر', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/059.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الممتحنة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/060.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الصف', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/061.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الجمعة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/062.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('المنافقون', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/063.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('التغابن', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/064.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الطلاق', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/065.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('التحريم', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/066.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الملك', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/067.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('القلم', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/068.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الحاقة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/069.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('المعارج', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/070.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('نوح', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/071.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الجن', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/072.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('المزمل', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/073.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('المدثر', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/074.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('القيامة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/075.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الإنسان', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/076.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('المرسلات', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/077.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('النبأ', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/078.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('النازعات', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/079.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('عبس', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/080.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('التكوير', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/081.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الإنفطار', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/082.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('المطففين', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/083.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الانشقاق', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/084.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('البروج', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/085.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الطارق', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/086.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الأعلى', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/087.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الغاشية', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/088.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الفجر', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/089.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('البلد', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/090.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الشمس', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/091.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الليل', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/092.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الضحى', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/093.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الشرح', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/094.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('التين', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/095.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('العلق', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/096.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('القدر', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/097.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('البينة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/098.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الزلزلة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/099.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('العاديات', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/100.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('القارعة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/101.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('التكاثر', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/102.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('العصر', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/103.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الهمزة', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/104.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الفيل', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/105.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('قريش', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/106.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الماعون', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/107.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الكوثر', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/108.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الكافرون', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/109.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('النصر', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/110.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('المسد', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/111.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الإخلاص', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/112.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الفلق', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/113.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})

bot.hears('الناس', async (ctx) => {
  await ctx.replyWithAudio({ url: "http://bot.rn0x.com/bot/lib/quran/quranmp3/114.mp3" })
  .catch((erro) => { console.log('Error when sending: ', erro); });
})


//========= وظائف الأزرار =========// 

//========= البرودكاست =========//
bot.on("channel_post", ctx => {
  if (!data.includes(ctx.chat.id)) {
    data.push(ctx.chat.id);
    fs.writeFileSync('./lib/data/data.json', JSON.stringify(data))
    console.log('save :' + ctx.chat.id)
  }
});

setInterval(async function () {
  const date = new Date();

  if ((date.getHours() === 01 && date.getMinutes() === 00) || (date.getHours() === 04 && date.getMinutes() === 00) || (date.getHours() === 19 && date.getMinutes() === 00) || (date.getHours() === 22 && date.getMinutes() === 00) || (date.getHours() === 23 && date.getMinutes() === 00)){   
    for (let lop of data) {
      let listvideo = videox[Math.floor(Math.random() * videox.length)]
      await bot.telegram.sendVideo(lop, { url: listvideo })
        .catch((error) => {
          let del = data.indexOf(error.on.payload.chat_id);
          data.splice(del, 1)
          fs.writeFileSync('./lib/data/data.json', JSON.stringify(data))
          console.log('delete :' + error.on.payload.chat_id)

        });
    }
  }

  else if ((date.getHours() === 07 && date.getMinutes() === 00) || (date.getHours() === 10 && date.getMinutes() === 00) || (date.getHours() === 02 && date.getMinutes() === 00) || (date.getHours() === 05 && date.getMinutes() === 00) || (date.getHours() === 20 && date.getMinutes() === 00)){   
    for (let lop of data) {
      const listphoto = photo[Math.floor(Math.random() * photo.length)]
      await bot.telegram.sendPhoto(lop, { url: listphoto })
        .catch((error) => {
          let del = data.indexOf(error.on.payload.chat_id);
          data.splice(del, 1)
          fs.writeFileSync('./lib/data/data.json', JSON.stringify(data))
          console.log('delete :' + error.on.payload.chat_id)

        });
    }
  }

  else if ((date.getHours() === 13 && date.getMinutes() === 00) || (date.getHours() === 16 && date.getMinutes() === 00) || (date.getHours() === 08 && date.getMinutes() === 00) || (date.getHours() === 11 && date.getMinutes() === 00) || (date.getHours() === 14 && date.getMinutes() === 00) || (date.getHours() === 17 && date.getMinutes() === 00)){   
    for (let lop of data) {
      let listadhkar = adk[Math.floor(Math.random() * adk.length)]
      await bot.telegram.sendMessage(lop, listadhkar)
        .catch((error) => {
          let del = data.indexOf(error.on.payload.chat_id);
          data.splice(del, 1)
          fs.writeFileSync('./lib/data/data.json', JSON.stringify(data))
          console.log('delete :' + error.on.payload.chat_id)

        });
    }
  }


}, 60000);



//========= البرودكاست =========//

bot.command('bt', async (ctx) => {
  if (admin.includes(ctx.message.chat.id)){
  for (let lop of data) {
  await bot.telegram.sendMessage(lop, ctx.message.text.slice(3))
  .catch((error) => {   
    
    let err = error.response.description;
    let errid = error.on.payload.chat_id;

    if (err === "Forbidden: bot was blocked by the user"){
      let del = data.indexOf(errid);
      data.splice(del, 1)
      fs.writeFileSync('./lib/data/data.json', JSON.stringify(data))
      console.log('delete :' + errid);
    }

    else if (err === "Bad Request: message text is empty" && errid === ctx.message.chat.id){
       bot.telegram.sendMessage(ctx.message.chat.id, "من فضلك أكتب الامر /bt ثم الرسالة التي تريد نشرها ")
    }
  
  });
  }
 }

  else { await ctx.reply("لايمكن بث الرسائل الى جميع مشتركين إلا من قبل مشرفي البوت"); }

});

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
