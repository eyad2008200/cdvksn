const { Message, Client } = require("discord.js");

module.exports = {
        name: "فتح",
        description: `فتح شات.`,
        run: async (client, message, args) => {
                const permission = message.member.permissions.has("MANAGE_CHANNELS");
                const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                if (!permission)
                        return message.reply(
                                { content: ":x: **ما تكدر تستعمله**", ephemeral: true }
                        ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (!guilds) return message.reply({ content: `:rolling_eyes:**صلاحيات ماعدي.**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
                let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                message.channel.permissionOverwrites.edit(everyone, {
                        SEND_MESSAGES: true
                }).then(() => {
                        message.reply({ content: `:تم الفتح بفشل قصدي بنجاح: **<#${message.channel.id}> has been unlocked.**`, ephemeral: true })
                })
        },
};