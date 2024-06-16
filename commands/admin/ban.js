const { Message, Client } = require("discord.js");

module.exports = {
        name: "انما", 
        description: `تبند اعضاء مو زينين`,
        run: async (client, message, args) => {
          
               const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
          
                const permission = message.member.permissions.has("BAN_MEMBERS");
                const guilds = message.guild.me.permissions.has("BAN_MEMBERS");

                if (!permission)
                        return message.reply(
                                { content: ":x: **لا تتفيك صلاحية ما عندك**", ephemeral: true }
                        ).catch((err) => {
                                console.log(`هو لو يوزر غلط يا اني نعسان: ` + err.message)
                        })
          
                if (!args[0]) return message.reply({ content: `:rolling_eyes: **منشن او ايدي**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
          
                if (!member) return message.reply({ content: `:rolling_eyes: **والله ما لگيته هذا وين صاير**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })

                if (member.id === message.member.id)
              return message.reply({ content: `:rolling_eyes: **ما تكدر تبنده${member.user.username}**`, ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (message.member.roles.highest.position < member.roles.highest.position)
                        return message.reply({
                                content:
                                        `:rolling_eyes:**ما تكدر تبند{member.user.username} الي اعلى منك**`
                                , ephemeral: true
                        }).catch((err) => {
                                console.log(`دز ما ارد على امثالك: ` + err.message)
                        })

                if (!guilds) return message.reply({ content: `:rolling_eyes: **صلاحيات بليز**`, ephemeral: true }).catch((err) => {
                        console.log(`ولي: ` + err.message)
                })
          
   if (!member.bannable) return message.reply(`:rolling_eyes: **ما تكدر  ${member.user.username}**`).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
          
      return (
      (await member.ban()) +
            message.reply({ content: `:white_check_mark: **${member.user.username} دطير روحه بلا رجعه!** :airplane:`, ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
                );
        },
};

