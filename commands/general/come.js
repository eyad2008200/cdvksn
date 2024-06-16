const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");

module.exports = {
        name: "تعال",
        description: `استدعاء شخص.`,
        run: async (client, message, args) => {


                  const permission = message.member.permissions.has("MANAGE_MESSAGES");
        const guilds = message.guild.me.permissions.has("MANAGE_MESSAGES");

                if (!permission)
                        return message.reply(
                                { content: ":x: **You don't have permission to use this command**", ephemeral: true }
         ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
          })
          
             if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't ban that user. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
      }) 
          
                const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);       
          
                if (!args[0]) return message.reply({ content: `:rolling_eyes: **Please mention member or id**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
          
                if (!member) return message.reply({ content: `:rolling_eyes: **I can't find this member**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
      
                if (member.id === message.member.id)
              return message.reply({ content: `:rolling_eyes: **You can't send yourself**`, ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
         
          
          let button = new MessageActionRow()
      .addComponents(
            new MessageButton()
      .setStyle('LINK')
      .setLabel('Join message')
      .setURL(`${message.url}`))


      .addComponents(
            new MessageButton()
      .setStyle('LINK')
      .setLabel('Requested by')
      .setURL(`https://discord.com/users/${message.author.id}`))

    let embed = new MessageEmbed()
       .setDescription(`**Come here <#${message.channel.id}>, someone wants you**`) 
        .setColor(message.guild.me.displayColor)


    member.send({embeds: [embed], components: [button]}).then(() => {
    message.reply (`:white_check_mark: **Done send invitation to join**`)
}).catch(() => {
    message.reply(`:x: **I could not send the invitation message **`)
}).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                   })


        },
};
