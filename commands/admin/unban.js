const { Message, Client } = require("discord.js");

module.exports = {
        name: "unban",
        description: `Unbans a memeber.`,
        run: async (client, message, args) => {
          
                const permission = message.member.permissions.has("BAN_MEMBERS");
                const guilds = message.guild.me.permissions.has("BAN_MEMBERS");

                if (!permission)
                        return message.reply(
                                { content: ":x: **صلاحياتماعندك**", ephemeral: true }
                        ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (!guilds) return message.reply({ content: `:rolling_eyes:**انطيني صلاحيات.**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })

                let user = message.content.split(" ").slice(1).join(" ");
                if (!user) return message.reply({
                        content: `:rolling_eyes: **منشن ايدي يا مصخم**`,
                        ephemeral: true
                }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
                message.guild.members.unban(user).then(m => {
                        message.reply({
                                content: `:white_check_mark: **${m.username} سامحتك!**`,
                                ephemeral: true
                        }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
                }).catch(err => {
                        message.reply({
                                content: `:rolling_eyes: **ما مبند <${user}> **`,
                                ephemeral: true
                        }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
                })
        },
};