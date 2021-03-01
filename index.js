const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**ئەگەر بەخۆت نێیە ڤۆیس ئەمنیش نایێم😂**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`ريكلام هاته كرن هيفيت كين هينژي بكانhttps://discord.gg/Hz3AYTPMKA`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("815738134436249643").send(
`> <:Abo dlo_UPUP:789133182624464946> By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ڕیکلامەکە بنێرە بۆمن دایدەنێم☑️`) 
});




client.login("S6O2g0HK1hDUUEsR68rAebwqoPUr5rOY");//تۆکین لێرە دانێ
