const { Message, Client, MessageEmbed } = require("discord.js");
const db = require('pro.db')

module.exports = {
        name: "تحذير",
        description: `تنطي تحذير لعضو.`,
        run: async (client, message, args) => {
                const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

                const permission = message.member.permissions.has("MANAGE_MESSAGES");
          const reason_msg = args.slice(1).join(' ');
                if (!permission) return message.reply({ content: ":x: **ما عندك صلاحية**" }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })

                if (!args[0]) return message.reply({ content: `:rolling_eyes: **منشن ايدي بكيفك**` }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })

                if (!member) return message.reply({ content: `:rolling_eyes: **ما لگيته**` }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })

                if (member.id === message.author.id) return message.reply({ content: `:rolling_eyes: **You can't warn ${member.user.username}**` }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })

                if (message.member.roles.highest.position < member.roles.highest.position) return message.reply({ content: `:rolling_eyes: **You can't warn ${member.user.username}**` }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
          if(!reason_msg) return message.reply({content: `:rolling_eyes: **Please type a reason.**`})
          db.add(`warns_${member.id}`,1)
          let Warn = db.get(`warns_${member.id}`)
          console.log(Warn)
            message.reply({content: `:white_check_mark: **${member.user.username} warned!**`})
let embed = new MessageEmbed()
            .setTitle(':warning: You were warned!')
            .setDescription(reason_msg)
            .setTimestamp()
	.setFooter({ text: `${message.guild.name}`, iconURL: `${message.guild.iconURL()}` });

            member.send({embeds: [embed]}).catch((err) => {
     console.log(`i couldn't reply to the message: ` + err.message) 
            })
        },
};