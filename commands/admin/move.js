const { Message, Client } = require("discord.js");

module.exports = {
        name: "سحب",
        description: `سحب اعضاء من قناة صوتية لثانية.`,
        run: async (client, message, args) => {
                const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

                const permission = message.member.permissions.has("MOVE_MEMBERS");
                const guilds = message.guild.me.permissions.has("MOVE_MEMBERS");
                if (!permission) return message.reply({ content: ":x: **صلاحيات ما عندك**" }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })

                if (!args[0]) return message.reply({ content: `:rolling_eyes: **منشن ايدي بكيفك**` }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })

                if (!member) return message.reply({ content: `:rolling_eyes: **ماكو هيج عضو**` }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })

                if (message.member.roles.highest.position < member.roles.highest.position) return message.reply({ content: `:rolling_eyes: **${member.user.username} have higher role than you**` }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })

                if (!guilds) return message.reply({ content: `:rolling_eyes: **انطيني صلاحيات لك**` }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
          
                if (!message.member.voice.channel) return message.reply({ content: `:x: **You aren't in a voice channel**` })
                let vchannel = message.member.voice.channel
                member.voice.setChannel(vchannel).then(() => {
                        message.reply({ content: `:white_check_mark: **Moved ${member.user.username} To ${message.member.voice.channel.name}**` })
                })

        },
};