const { Message, Client } = require("discord.js");

const { line_image } = require('../../config.json');

module.exports = {
        name:"خط", 
        description: `send line attachment.`,
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

  message.delete()

  message.channel.send({files: [line_image]})

        },
};
