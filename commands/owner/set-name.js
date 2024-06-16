const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");

module.exports = {
        name: "set-name",
        description: `Change new username bot`,
        run: async (client, message) => {

   let args = message.content.split(" ").slice(1).join(" ")

         let button = new MessageActionRow()
      .addComponents(
            new MessageButton()
      .setStyle('LINK')
      .setLabel('View')
      .setURL(`https://discord.com/users/${client.user.id}`)) 
          
        const permission = message.member.permissions.has("MANAGE_GUILD");
        const guilds = message.guild.me.permissions.has("MANAGE_GUILD");


         if (!permission)
   return message.reply({ content: ":x: **You don't have permission to use this command**", ephemeral: true }
         ).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
          })
          
      if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't ban that user. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
      })
          
   if (!args) return message.reply({ content: `**:rolling_eyes: Please type the new username**` }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
      })

   client.user.setUsername(args)

 message.reply({ content: `**:white_check_mark: Done setting username to : ${args}**`, components:  [button] }).catch((err) => {
     message.reply({content: `:rolling_eyes: **${err.message}**`})
      })
   },
};
