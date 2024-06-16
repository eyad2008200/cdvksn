const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");
const axios = require("axios");

module.exports = {
    name: "بنر",
    description: `تطلع بنر شخص اي والله.`,
    aliases: [],
    run: async (client,message, args) => {
           const member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.get(args[0]) || message.author;

axios.get(`https://discord.com/api/users/${member.id}`, {
      headers: {
        Authorization: `Bot ${process.env.token }`
      },
    })
    .then((res) => {
      const { banner, accent_color } = res.data;

      if (banner) {
        const extension = banner.startsWith("a_") ? ".gif" : ".png";
        const url = `https://cdn.discordapp.com/banners/${member.id}/${banner}${extension}?size=2048`;

          let button = new MessageActionRow()
      .addComponents(
            new MessageButton()
      .setStyle('LINK')
      .setLabel('Download')
      .setURL(url))
  
      .addComponents(
            new MessageButton()
      .setStyle('LINK')
      .setLabel('Profile')
      .setURL(`https://discord.com/users/${member.id}`))
        
  const embed = new MessageEmbed()

         .setAuthor(`${member.tag}`, member.displayAvatarURL({dynamic:true}))     
     .setTitle('Banner Link')
	   .setURL(url)  
    
   .setImage(url)
   .setColor(message.guild.me.displayColor)
   .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
     
        message.reply({ embeds: [embed] , components:[button] }).catch((err) => {
  console.log(`i couldn't reply to the message: ` + err.message)
        })
      } else {
        if (accent_color) {
  const embed = new MessageEmbed()
   .setDescription(`:rolling_eyes: **${message.author.tag}, ما عنده بنر 😂😂**`)
  .setColor(accent_color)
        
    message.reply({ embeds: [embed] }).catch((err) => {
  console.log(`i couldn't reply to the message: ` + err.message)
        })
        } else {
    const embed = new MessageEmbed()
   .setDescription(`:rolling_eyes: **${message.author.tag} does not have a banner nor do they have an accent color.**`)
  .setColor(accent_color)
        
    message.reply({ embeds: [embed] }).catch((err) => {
  console.log(`i couldn't reply to the message: ` + err.message)
        })
        }
      }
    }).catch((err) => {
  console.log(`i couldn't reply to the message: ` + err.message)
        });      
   },
};   