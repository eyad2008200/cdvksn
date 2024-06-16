const { Message, Client } = require("discord.js");

module.exports = {
        name: "اظهار",
        description: `تظهر روم`,
        run: async (client, message, args) => {
                const permission = message.member.permissions.has("MANAGE_CHANNELS");
                const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                if (!permission)
                        return message.reply(
                                { content: ":x: **صلاحيات ما عندك 😂**", ephemeral: true }
                        ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
                let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        VIEW_CHANNEL: true
                }).then(() => {
                        message.reply({ content: `:white_check_mark: **<#${message.channel.id}> تم اظهرته.**`, ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
                })
        },
};
