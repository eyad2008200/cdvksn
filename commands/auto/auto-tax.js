const client = require("../../index");

const {
        MessageEmbed,
        Permissions,
        MessageAttachment,
        utils,
        Utils,
        MessageActionRow,
        MessageSelectMenu,
        MessageButton,
        Collection,
        ButtonInteraction,
        ColorResolvable,
        CommandInteraction,
        EmojiResolvable,
        Message,
        MessageReaction,
        TextChannel,
        User,
        MessageButtonStyle,
        GuildMember,
        WebhookClient,
        Client,
        Intents
} = require('discord.js');
const Discord = require('discord.js');
const tax = new Collection();
module.exports = tax;

let taxid = ['1225980183983554601'];

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if(taxid.includes(message.channel.id)){

  var args = message.content.split(' ').slice(0).join(' ')
if(!args) return;
  
if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    
    let embed = new MessageEmbed()
      
.setAuthor(` TAX Pro bot`, client.user.avatarURL({ dynamic: true }))

   .setThumbnail(client.user.avatarURL({ dynamic: true }))   
      
.addFields([
    {
    name: `Amount: `,
    value: `${tax}`
},
  {
    name: `Tax: `, 
    value: `${tax2}`
  }
])
        .setColor(message.guild.me.displayColor)
  .setTimestamp()
    
   message.reply({embeds: [embed]}).catch((err) => {
   console.log(err.message)
   });    
  }
}); 
