const { Message, Client } = require("discord.js");

module.exports = {
        name: "اخفاء",
        description: `اخفاء قناة للكل.`,
        run: async (client, message, args) => {
          
    const permission = message.member.permissions.has("MANAGE_CHANNELS");
          
    const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

         if (!permission)
   return message.reply({ content: ":x: **تمضرط منريد جيب صلاحية وتعال**", ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
     
     })

        if (!guilds) return message.reply({ content: `:rolling_eyes: **ممكن صلاحية بليز**`, ephemeral: true }).catch((err) => {
                           console.log(`i couldn't reply to the message: ` + err.message)
    
    })
          
          let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        VIEW_CHANNEL: false
                }).then(() => {
                        message.reply({ content: `:white_check_mark: **<#${message.channel.id}> Done hide this room.**`, ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                          
                        })
                })
        },
};
