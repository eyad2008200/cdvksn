const { Message, Client } = require("discord.js");

module.exports = {
        name: "قفل",
        description: `تقفل قناة.`,
        run: async (client, message, args) => {
                const permission = message.member.permissions.has("MANAGE_CHANNELS");
                const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                if (!permission)
                        return message.reply(
                                { content: ":x: **جيب صلاحيات ومن عيوني**", ephemeral: true }
                        ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (!guilds) return message.reply({ content: `:rolling_eyes:.**دز**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
                let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        SEND_MESSAGES: false
                }).then(() => {
                        message.reply({ content: `:lock: **<#${message.channel.id}> قفلته.** `, ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
                })
        },
};
