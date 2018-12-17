const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";




client.on('ready', function(){
    var ms = 100000 ;
    var setGame = [`iSryBot BETA : V2 `,`&help - &inv`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);100000






client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '517879024815570944').setName("W");
client.channels.find('id', '517879024815570944').setName("We");
client.channels.find('id', '517879024815570944').setName("Wel");
client.channels.find('id', '517879024815570944').setName("Welc");
client.channels.find('id', '517879024815570944').setName("Welco");
client.channels.find('id', '517879024815570944').setName("Welcom");
client.channels.find('id', '517879024815570944').setName("Welcome");
client.channels.find('id', '517879024815570944').setName("Welcome T");
client.channels.find('id', '517879024815570944').setName("Welcome To");
client.channels.find('id', '517879024815570944').setName("Welcome To L");
client.channels.find('id', '517879024815570944').setName("Welcome To Le");
client.channels.find('id', '517879024815570944').setName("Welcome To Leg");
client.channels.find('id', '517879024815570944').setName("Welcome To Lege");
client.channels.find('id', '517879024815570944').setName("Welcome To Legen");
client.channels.find('id', '517879024815570944').setName("Welcome To Legend");
client.channels.find('id', '517879024815570944').setName("Welcome To Legends");
  }, 3000);
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
