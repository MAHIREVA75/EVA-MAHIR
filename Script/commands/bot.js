const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID,  messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " ,"আমাকে না ডেকে আমার বস মাহির কে একটা GF দাও-😽🫶🌺","- ভালোবাসা নামক আবলামি করতে মন চাইলে আমার বস মাহির এর ইনবক্স চলে যাও-🙊🥱👅 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 🌻:- https://www.facebook.com/THE.FATHER.OFF.GALIBAZ.MAHIR.5","- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗 -বস মাহির তরে মারবে - 🥱 - উফফ সেই স্বাদ..!🥵🤤💦","-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বস মাহির এর মনটা ছাড়া-🥴😑😏","- তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛🤣👈","‎ফকিন্নি পোলাপান-!!😹","‎টোকাই সেলিব্রেটি-!!😹","‎টাকার অভাবে মরা গরু খাস-!!😹","‎ টাকার অভাবে গয়া মারা খাস-!!🤣😆 ","‎বস মাহির কে Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","‎চুমু খাওয়ার বয়স টা আমার বস মাহির চকলেট🍫খেয়ে উড়িয়ে দিল 🤗","‎Mantion_দিস না _মাহির বস এর মন মন ভালো নেই আস্কে-!💔🥀","‎👉আমার বস ♻️ 𝐌𝐀𝐇𝐈𝐑 এখন বিজি আছে । তার ইনবক্সে এ মেসেজ দিয়ে রাখো ‎‎‎‎‎‎‎‎‎https://www.facebook.com/THE.FATHER.OFF.GALIBAZ.MAHIR.5🔰                                        ♪√বস ফ্রি হলে আসবে🧡😁😜🐒", "শুনবো না😼তুমি আমার বস মাহির কে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" , "I love you janu🥰" , "আরে Bolo আমার জান ,কেমন আছো?😚 " , "Bot বলে অসম্মান করছিস,😰😿" , "Hop beda😾,Boss বল boss😼" ,"-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧","—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস মাহির এর সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗","—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস মাহির এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️","সুন্দর মাইয়া মানেই-🥱আমার বস মাহির' এর বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗","-আজ থেকে আমার বস মাহির  কাউকে পাত্তা দিবে না -!😏-কারণ মাহির বস ফর্সা হওয়ার ক্রিম কিনছে -!🙂🐸","বার বার Disturb করেছিস কোনো😾,আমার বস মাহির এর এর সাথে ব্যাস্ত আসি😋" ,"মাইয়া হলে আমার বস মাহির কে Ummmmha দে 😒" , "-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸", "চুপ থাক ,নয় তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করছিস কোনো😾,আমার জানু মাহির এর সাথে ব্যাস্ত আছি😋" , "-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧","বোকাচোদা এতো ডাকিস কেন🤬" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হ্যাঁ বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","হুম জান তোমার ওই খানে উম্মম্মাহ😑😘" , "আহ সোনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘" , " jang hanga korba😒😬" , "হুম জান তোমার ওইখানে উম্মম্মাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকে বস মাহির এর কে একটা GF দে 🙄" , "আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈" , "🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻","আমি এখন বস মাহির এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻","ঝাং থুমালে আইলাপিউ পেপি-💝😽","উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈","জান তোমার নানি'রে আমার হাতে তুলে দিবা-🙊🙆‍♂","আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧","ঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦","চুনা ও চুনা আমার বস মাহির এর হবু বউ রে কেও দেকছো খুজে পাচ্ছি না😪🤧😭","স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻","জান হাঙ্গা করবা-🙊😝🌻","জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽","ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼","আমার বস মাহির চৌধুরী'র পক্ষ থেকে তোমারে এতো এতো ভালোবাসা-🥰😽🫶 আমার বস মাহির চৌধুরী'র  জন্য দোয়া করবেন-💝💚🌺🌻","জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽","জান বাল ফালাইবা-🙂🥱🙆‍♂","-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦","oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂","-আপনার সুন্দরী বান্ধুবীকে আমার বস মাহির কে দান করেন-🥱🐰🍒","-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস মাহির কে-🐸😾🔪","-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧","-𝗢𝗶𝗶 আন্টি-🙆‍♂️-তোমার মেয়ে চোখ মারে-🥺🥴🐸","তাকাই আছো কেন চুমু দিবা-🙄🐸😘","আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇","-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗","কি ব্যাপার আপনি শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻","দিনশেষে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧","-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻","-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻","-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস উল্লাস ধরতে পারছে না-🐸🥲","-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️","-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜","এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂","-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸","হুদাই আমারে  শয়তানে লারে-😝😑☹️","-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦","-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧","-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","-এই আন্টির মেয়ে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋","-ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸","-ওই বেডি তোমার বাসায় না আমার বস মাহির মেয়ে দেখতে গেছিলো-🙃-নাস্তায় আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বস মাহির  কে জানে মারার কি দরকার-🙄🤧","-একদিন সে ঠিকই ফিরে তাকাবে-😇-আর মুচকি হেসে বলবে ওর মতো আর কেউ ভালবাসেনি-🙂😅","-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না জান তোমারে আমি অনেক ভালোবাসি-🥺🤧","কি'রে গ্রুপে দেখি একটাও বেডি নাই-🤦‍🥱💦","-🫵তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵","বেশি Bot Bot করলে leave নিবো কিন্তু😒😒 " , "আমি আবাল দের সাতে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","মেয়ে হলে বস মাহির'এর সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিস,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "আমি গরীব এর সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰","- শখের নারী  বিছানায় মু'তে..!🙃🥴","-𝐈'𝐝 -তে সব 𝐖𝐨𝐰 𝐖𝐨𝐰 বুইড়া বেডি-🐸💦","🥛-🍍👈 -লে খাহ্..!😒🥺","- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒","~আমি মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে  যাবে..!😅💔","🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔","~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀","- কারেন্ট একদম বেডি'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪","- সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি য়ামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼","- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস উল্লাস কে সন্দেহ করে.!🐸","- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀","- পুরুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের নারী...!🥺💔👈","- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔","- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺","-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈","-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧","•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺","- যেই আইডির মায়ায় পড়ে ভুললি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂" ,];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "MISS YOU") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘  🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("__-কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই-!!😾👋😡", threadID);
   };
   
    if ((event.body.toLowerCase() == "help") || (event.body.toLowerCase() == "help")) {
     return api.sendMessage("type /help", threadID);
   };
  
   if ((event.body.toLowerCase() == "Shakib") || (event.body.toLowerCase() == "shakib")) {
     return api.sendMessage("__-সাকিব কে কেউ ডাকিস না সাকিব এখন মাগিদের চিপায় ভিডিও কলে নুনু দেখাচ্ছে-!!🥵🍆💦🤰", threadID);
   };
  
   if ((event.body.toLowerCase() == "ওই কিরে") || (event.body.toLowerCase() == "oi keray") ||(event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("মধু মধু রসমালাই 🍆⛏️🐸🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "🫦") || (event.body.toLowerCase() == "💋")) {
     return api.sendMessage("__-কিরে হালা লুচ্চা, এগুলো কি ইমুজি দেস-!!😾🔪", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও-!!😚", threadID);
   };

   if ((event.body.toLowerCase() == "tor ball") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("__-বাল বাল করিস কেন-😾🔪 তোর বাল উঠে নাই নাকি-!!🙄👋🤖", threadID);
   };

  if ((event.body.toLowerCase() == "mahir") || (event.body.toLowerCase() == "Mahir vai") || (event.body.toLowerCase() == "@MAHIR ") || (event.body.toLowerCase() == "মাহির")) {
     return api.sendMessage("__-মাহির বস এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন-!!😍😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞ 𝐌𝐀𝐒𝐇𝐈𝐊-𝐌𝐀𝐇𝐈𝐑  ☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐌𝐀𝐇𝐈𝐑.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/THE.FATHER.OFF.GALIBAZ.MAHIR.5\nতার সাতে যোগা যোগ করবেন WhatsApp :- +0197993****", threadID);
   };

   if ((event.body.toLowerCase() == "Boss") || (event.body.toLowerCase() == "tor boss ke")) {
     return api.sendMessage("𝐌𝐘 𝐂𝐑𝐄𝐀𝐓𝐎𝐑:𝐌𝐀𝐒𝐇𝐈𝐊-𝐌𝐀𝐇𝐈𝐑 😍😘 হাই আমি মেসেঞ্জার ROBOT  আামার বস  𝐌𝐀𝐇𝐈𝐑  আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "boter admin")) {
     return api.sendMessage("𝐇𝐄 𝐈𝐒 𝐌𝐀𝐒𝐇𝐈𝐊-𝐌𝐀𝐇𝐈𝐑-😍😽-তাকে সবাই মাহির নামে  চিনে-!!😎🤙", threadID);
   };

   if ((event.body.toLowerCase() == "ai") || (event.body.toLowerCase() == "Ai")) {
     return api.sendMessage("If you want to use the AI command, type /ai ", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("__-তুই চুপ চুপ কর পাগল ছাগল-!!😾🔪", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "sala ami tor boss") || (event.body.toLowerCase() == "sala ami mahir") || (event.body.toLowerCase() == "cup sala ami mahir") || (event.body.toLowerCase() == "madari")) {
     return api.sendMessage("__-সরি মাহির বস মাফ করে দেন আর এমন ভুল হবে না-!!🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "@𝐀𝐑𝐎𝐇𝐈 ________// ;* :/ 3:)") || (event.body.toLowerCase() == "@𝐀𝐑𝐎𝐇𝐈 ________// ;* :/ 3:) ")) {
     return api.sendMessage("__-খবরদার কেউ এই আইডি মেনশন দিবি না এটা আমার বস মাহির এর বউ এর আইডি-!!😠😾🔪🐸😍😘", threadID);
   };

  if ((event.body.toLowerCase() == "Eva") || (event.body.toLowerCase() == "eva")) {
     return api.sendMessage("__-খবরদার কেউ এই নাম ধরে ডাক দিবি না এটা আমার বস মাহির এর বউ লাগে-!!😾🔪🌚😍", threadID);
   };
  
  if ((event.body.toLowerCase() == "mim") || (event.body.toLowerCase() == "Mim")) {
     return api.sendMessage("__-মিম নামের মেয়েরা ১২ ভাতারি হয়-!!🌚🐸😐", threadID);
   };

  if ((event.body.toLowerCase() == "Akhi") || (event.body.toLowerCase() == "akhi")) {
     return api.sendMessage("__-খবরদার কেউ এই নাম ধরে ডাক দিবি না এটা আমার বস মাহির এর বোন লাগে-!!😾🔪🌚😍", threadID);
   };

  if ((event.body.toLowerCase() == "@ᎷᎪᏚᎻᏆᏦ ᎷᎪᎻᏆᎡ─꯭─꯭─꯭─꯭─꯭╱╱😘😕😈 ") || (event.body.toLowerCase() == "মিতা")) {
     return api.sendMessage("🥰-মাহির-🌺 আমার বস মাহিরের মিতা লাগে লুচ্ছি বেডি'রা দূরে থাক😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️__-তুমি পঁচা তোমাকে কিস দিবো না-!!🤭😁", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️__-এতো ধন্যবাদ না দিয়ে পারলে আমার বস মাহির কে তোর গার্লফ্রেন্ড টা দিয়ে দে-!!🥹🤪😐", threadID);
   };

   if ((event.body.toLowerCase() == "....") || (event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️__-রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না-!!🥰", threadID);
   };

   if ((event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "humm")) {
     return api.sendMessage("️__-হুম চোদাইস না মাথা এমনিতেই গরম আছে-!!😾🔪🙁", threadID);
   };

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("️𝐌𝐘 𝐍𝐀𝐌𝐄 °_>𝐈𝐓'𝐒-𝐌𝐄-𝐌𝐀𝐒𝐇𝐈𝐊-𝐁𝐎𝐓-!!🥱😎🤟", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ER BACCA") || (event.body.toLowerCase() == "bot er bacca")) {
     return api.sendMessage("️__-আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে-!!😆😝🌚", threadID);
   };

   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ss daw")) {
     return api.sendMessage("️__-এখান থেকে সর দুরে গিয়া মর-!!😾😒", threadID);
   };

   if ((event.body.toLowerCase() == "moriom") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrap Kor Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nanire xudi")) {
     return api.sendMessage("️__-এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস-!!🥱😴😾🔪 ", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("️__-কি গো কলিজা তোমার কি মন খারাপ-!!🥺💔", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️__-এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো-!!😍😘", threadID);
   };

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "Aj kew nai bole")) {
     return api.sendMessage("️__-চিন্তা করো কেন আমি তো আছি🫶/nতোমাকে রাইতে ভালোবাসবো-!!😘😐🐸", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("খালি কি তোরাই প্রেম করবি আমার বস মাহির কে একটা GF দে<🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("__-ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে-!!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("__-ভালোবাসা নামক আবলামী করতে চাইলে  ইনবক্সে চলে যা পাগল ছাগল-!!😾🔪", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("__-আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি-!!🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("__-আমার সাদা মনে কোনো কাদা নাই-!!🌝💔", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("__-সব মুতার জায়গায় গুঁতা দেওয়ার ধান্দা-!!🥵💦🍆", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("__-কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি-!!🤰🥵💦🍆", threadID);
   };

   if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho")) {
     return api.sendMessage("__-না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
     return api.sendMessage("__-হুম ঝাং আমি তোমাকে রাইতে ভলোপাসি <🥵💦🍆", threadID);
   };

   if ((event.body.toLowerCase() == "ami Mahir") || (event.body.toLowerCase() == "kire")) {
     return api.sendMessage("__-হ্যা বস মাহির কেমন আছো-!!😽☺️", threadID);
   };
  mess = "{name}"
  
  if (event.body.indexOf("/Bot") == 0 || (event.body.indexOf("/bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
