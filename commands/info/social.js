const { MessageButton, MessageActionRow, MessageEmbed, Client, MessageSelectMenu } = require("discord.js");
const { glob } = require("glob");
const { promisify } = require("util");

module.exports = {
    name: "social",
    description: 'social media',
    aliases: [],
    run: async (client,message, args) => {
      
  let button = new MessageActionRow()
        .addComponents(
            new MessageButton()
  .setStyle('LINK')
  .setLabel('DISCORD')
  .setEmoji("959836744755335229")  .setURL(`https://discord.com/invite/KPyhpeGX`))//قابل للتغير 
    
       .addComponents(
            new MessageButton()
  .setStyle('LINK')
  .setLabel('INSTAGRAM')
  .setEmoji("959829569156816966") 
  .setURL(`https://www.instagram.com/1yuri.9?igsh=MWM1bHFiYnVwY2hudA==`))//قابل للتغير
    
         .setURL(`https://www.youtube.com/c/reo_y`) //قابل للتغير 

        .addComponents(
            new MessageButton()
  .setStyle('LINK')
  .setLabel('Instagram')
  .setEmoji("1027089227424469002")  
  .setURL(`https://www.instagram.com/1yuri.9?igsh=MWM1bHFiYnVwY2hudA==`))//قابل للتغير 
      
    let embed = new MessageEmbed()
      
.setImage(``)//قابل للتغير 
      
.setColor(message.guild.me.displayHexColor)
      
      .setTimestamp()
      
    message.reply({ embeds:[embed], components:[button] })
      
          },
};