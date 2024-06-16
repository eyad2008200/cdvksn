const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: "banner-server",
    description: 'Get a server banner.',
    aliases: [],
    run: async (client, message, args) => {

const guilds = message.guild;
let banner = false;
  await guilds.fetch().then(guilds => {
  if (guilds.banner) {
    banner = guilds.bannerURL({ dynamic: true, size: 1024 })
  }
})
        if (banner === false) return message.reply({embeds: [new MessageEmbed()
    
                                                             .setDescription( `**:x: ${message.guild.name} don't have banner**`)
                                                            
.setColor(message.guild.me.displayColor)
  ]});


            let button = new MessageActionRow()
      .addComponents(
            new MessageButton()
      .setStyle('LINK')
      .setLabel('Download')
      .setURL(banner))

    let embed = new MessageEmbed()
      
.setAuthor(`${message.guild.name}`, `${message.guild.iconURL({dynamic:true})}`)
      
     .setTitle('Banner Link')
      
      .setImage(banner)
      
      .setURL(banner)
      
.setColor(message.guild.me.displayColor)
      
.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
      
    message.reply({ embeds: [embed], components:[button] }).catch((err) => {
                                        console.log(`i couldn't reply to the message: ` + err.message)
                             })
      
        },
};   