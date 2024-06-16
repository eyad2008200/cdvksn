const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: "صورة",
    description: `تظهر صورة شخص.`,
    aliases: ['av'],
    run: async (client,message, args) => {
              const member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.get(args[0]) || message.author;
  

           const avatar = member.displayAvatarURL({ size: 1024, dynamic: true });

let button = new MessageActionRow()
      .addComponents(
            new MessageButton()
      .setStyle('LINK')
      .setLabel('Download')
      .setURL(avatar))
  
      .addComponents(
            new MessageButton()
      .setStyle('LINK')
      .setLabel('Profile')
      .setURL(`https://discord.com/users/${member.id}`))
      
      let embed = new MessageEmbed()
        
     .setAuthor(`${member.tag}`, member.displayAvatarURL({dynamic:true}))     
     .setTitle('Avatar Link')
	    .setURL(avatar)   
        
   .setImage(avatar)
        .setColor(message.guild.me.displayColor)
        
   .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
              
      message.reply({embeds:[embed], components:[button] }).catch((err) => {
                                                console.log(`i couldn't reply to the message: ` + err.message)
                                        })
      },
};   