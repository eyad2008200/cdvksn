const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: "avatar-server",
    description: 'Get a server avatar.',
    aliases: ['avs'],
    run: async (client,message, args) => {

           const avatar = message.guild.iconURL({dynamic : true , size: 1024})

let button = new MessageActionRow()
      .addComponents(
            new MessageButton()
      .setStyle('LINK')
      .setLabel('Download')
      .setURL(avatar))
      
      let embed = new MessageEmbed()


.setAuthor(`${message.guild.name}`, `${message.guild.iconURL({dynamic:true})}`)
     .setTitle('Avatar Link')
	   .setURL(avatar)  
         
   .setImage(avatar)         .setColor(message.guild.me.displayColor)
   .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
              
      message.reply({embeds:[embed], components:[button] }).catch((err) => {
                                                console.log(`i couldn't reply to the message: ` + err.message)
                                        })
      },
};   