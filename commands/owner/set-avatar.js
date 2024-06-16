const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");

module.exports = {
      name: "set-avatar",
      description: `Change new avatar bot`,
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
        
   client.user.setAvatar(args)     
          
   if (!args) return message.reply({ content: `**:rolling_eyes: Please type url image**` }).catch((err) => {
    console.log(`i couldn't reply to the message: ` + err.message)
      })

 message.reply({ content: `**Done setting avatar to :**`, files: [args], components: [button] }).catch((err) => {
   message.reply({content: `:rolling_eyes: **${client.config.prefix}set-avatar __URL__**`})
      })
          
   },
};
