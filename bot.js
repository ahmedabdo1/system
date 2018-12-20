const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";
















client.on("message", msg => {
    if(msg.author.bot) return;
if(msg.channel.type === 'dm') return;

let p = "!";
let msgarray = msg.content.split(" ");
let cmd = msgarray[0];
let args = msgarray.slice(1);



if(cmd === `${p}kick`){


    let kUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!kUser) return msg.channel.send("Can't find user!");
let kreason = args.join(" ").slice(22);
if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send("No can do pal!");
if(kUser.hasPermission("KICK_MEMBERS")) return msg.channel.send("That person can't be kicked");

let kickembed = new Discord.RichEmbed()
.setDescription("~kick~")
.setColor("BLACK")
.addField("Kiced User", `${kUser} with ID: ${kUser.id}`)
.addField("Kicked By", `<@${msg.author.id}> with ID: ${msg.author.id}`)
.addField("Kicked In", msg.channel)
.addField("Time", msg.createdAt)
.addField("Reason", kreason)

let kickChannel = msg.guild.channels.find(`name`,"log");
if(!kickChannel) return msg.channel.send("Can't find `log` channel.");

msg.guild.member(kUser).kick(kreason);
kickChannel.send(kickembed)
    return;

}

});











client.on('message', msg => {
if(msg.content === 'سيستم') {
msg.reply('**نعم يحب**');
}
});





client.on('message', msg => {
if(msg.content === 'hello') {
msg.reply('hi');
}
});


client.on('message', msg => {
if(msg.content === 'السلام عليكم') {
msg.reply('وعليكمم السلام');
}
});


client.on('message', msg => {
if(msg.content === 'hi') {
msg.reply('**Hello welcome .**');
}
});


client.on('message', msg => {
if(msg.content === 'system') {
msg.reply('**im here , what u want ? **');
}
});


client.on('message', msg => {
if(msg.content === 'System') {
msg.reply('**im here , what u want ? **');
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
