const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";





client.on('message',function(message) {

    let messageArray = message.content.split(' ');

    let muteRole = message.guild.roles.get('اي دي الرتبة') || message.guild.roles.find('name', 'Muted');

    let muteMember = message.mentions.members.first();

    let muteReason = messageArray[2];

    let muteDuration = messageArray[3];

   if(message.content.startsWith(prefix + "mute")) {

       if(!muteRole) return message.guild.createRole({name: 'Muted'}).then(message.guild.channels.forEach(chan => chan.overwritePermissions(muteRole, {SEND_MESSAGES:false,ADD_REACTIONS:false})));

       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send('ℹ **Error:** ``خصائص مفقودة``');

       if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send('ℹ **Error:** ``خصائص مفقودة مني``');

       if(!muteMember) return message.channel.send('ℹ **Error:** ``منشن شخص``');

       if(!muteReason) return message.channel.send('ℹ **Error:** ``حدد سباّ``');

       if(!muteDuration) return message.channel.send('ℹ **Error:** ``حدد وقت زمني``');

       if(!muteDuration.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send('ℹ **Error:** ``حدد وقت زمني صحيح``');

       message.channel.send(`✅ **تم اعطاء العضو ميوت : ${muteMember}**`);

       muteMember.addRole(muteRole);

       muteMember.setMute(true)

       .then(() => { setTimeout(() => {

           muteMember.removeRole(muteRole)

           muteMember.setMute(false)

       }, mmss(muteDuration));

       });

   }

});






client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **bc1** ' ,' **بث جماعي + للكل + مطور** ')
.addField('     **bc2**  ' ,' **بث جماعي + للكل + غير مطور** ')
.addField('     **bc3** ' , '**بث جماعي + للأونلاين + غير مطور + منشن للشخص**') 
.addField('     **bc4** ' , '**بث جماعي + للكل + غير مطور + منشن للشخص**') 
.addField('     **ping** ' ,' ** سرعة اتصال البوت**')
.addField('     **كت تويت** ' , '**هذي لعبة الكت تويت**')
.addField('     **هل تعلم ** ' ,' **  لعبة هل تعلم  ** ')
.addField('     **clear ** ' ,' **  لمسح الشات بدون رقم  ** ')
.addField('     **say ** ' ,' **  عشان يتكلم عنك  ** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});














client.on('message', message => {
           let args = message.content.split(' ').slice(1);
    if(message.content.split(' ')[0] == '$color'){
            const embedd = new Discord.RichEmbed()
      .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
    .setColor(`ff0000`)
 
     if(!isNaN(args) && args.length > 0)
     
 
 if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
 
 
        var a = message.guild.roles.find("name",`${args}`)
                 if(!a)return;
 const embed = new Discord.RichEmbed()
                     
      .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
  
    .setColor(`${a.hexColor}`)
   message.channel.sendEmbed(embed);
           if (!args)return;
 setInterval(function(){})
                   let count = 0;
                   let ecount = 0;
         for(let x = 1; x < 201; x++){
            
             message.member.removeRole(message.guild.roles.find("name",`${x}`))
           
             }
                 message.member.addRole(message.guild.roles.find("name",`${args}`));
         
             
     }
 });










client.on("message", message => {

            if (message.content.startsWith(prefix + "bc4")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});












client.on('message', function(message) {
    if(!message.channel.guild) return;
    if(message.content === 'colors create') {
    if(message.member.hasPermission('MANAGE_ROLES')) {
    setInterval(function(){})
    message.channel.send('يتم انشاء 200 لون انتضر | ▶️')
    }else{
    message.channel.send('ما معاك البرمشن المطلوب |❌🚫')/////////Mal Team
    }
    }//////////////////Mal TeAM
    });///////////Malteam
    
    client.on('message', message=>{
    if (message.content === 'colors create'){
    if(!message.channel.guild) return;
    if (message.member.hasPermission('MANAGE_ROLES')){
    setInterval(function(){})
    let count = 0;
    let ecount = 0;
    for(let x = 1; x < 200; x++){
    message.guild.createRole({name:x,
    color: 'RANDOM'})
    }
    }///////////////Mal TeAM    
    }
    });////////////////////////////////Malteam








client.on('message', message => {
const prefix = "t";
        if (message.content === prefix + "ime") {
            if (!message.channel.guild) return message.reply('** This command only for servers **');  
var currentTime = new Date(),
            hours = currentTime.getHours() + 0 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds();
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


                var Date15= new Discord.RichEmbed()
                .setThumbnail(message.author.avatarURL) 
                .setTitle("**الوقت وتاريخ**")
                .setColor('RANDOM')
                .setTimestamp()
                .addField('Time',
                "『"+ hours + ":" + minutes + "』") 
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year + "』")

                 message.channel.sendEmbed(Date15);
        }
    });






client.on('guildMemberAdd', (member) => {
    var channel = member.guild.channels.find('name', 'log');
channel.send(`@${member.user.tag} تم اعطاء العضو رتبت ممبر`)
member.addRole(member.guild.roles.find('name', 'Members'));
});









client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose: ** Welcome to server Legends **:rose: 
:crown:**You are the member number**  ${member}:crown:  
yo  ${member.guild.memberCount} `) 
}).catch(console.error)
})








client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| ✅  | ❤  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});












client.on('message', message => {
    if (message.content.startsWith("افتار")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
    var prefix = "!"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});









  client.login(process.env.BOT_TOKEN);
