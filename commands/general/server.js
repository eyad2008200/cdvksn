const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: "server",
    description: `Displays information about the server.`,
    aliases: [],
    run: async (client,message, args) => {
      const verificationLevels = {NONE: '0',LOW: '1',MEDIUM: '2',HIGH: '3',VERY_HIGH: '4'};
    let on = message.guild.presences.cache.filter(e => e.status == 'online').size - 1 || 0
let idle = message.guild.presences.cache.filter(e => e.status == 'idle').size + 1 || 0
let dnd = message.guild.presences.cache.filter(e => e.status == 'dnd').size || 0
    var embed  = new MessageEmbed()
.setThumbnail(message.guild.iconURL({dynamic:true})) 
      .addFields([
    {
    name: `:id: Server ID: `,
    value: `**${message.guild.id}**`
},
    {
    name: `:date: Created On: `,
    value: `**<t:${parseInt(message.guild.createdAt / 1000)}:R>**`
}, 
    {
      name: `:crown: Owned by: `, 
      value: `**${await message.guild.fetchOwner()}**`
}, 
      {
        name: `:busts_in_silhouette: Members: (**${message.guild.memberCount}**)`, 
        value: `**${Math.floor(on + idle + dnd)}** **Online \n${message.guild.premiumSubscriptionCount} Boosts :sparkles:**`
}, 
        {
          name: `:speech_balloon: Channels: (${message.guild.channels.cache.size})`, 
          value: `**${message.guild.channels.cache.filter(m => m.type === 'GUILD_TEXT').size}** **Text | ${message.guild.channels.cache.filter(m => m.type === 'GUILD_VOICE').size} Voice**`
}, 
        {
          name: `:earth_africa: Others: `, 
          value: `**Verification Level: ${verificationLevels[message.guild.verificationLevel]}**`
},
        {
          name: `:closed_lock_with_key: Roles:(${message.guild.roles.cache.size})`, 
          value: `**To see a list with all roles use ${client.config.prefix}roles**`
}, 
])  
.setColor(message.guild.me.displayColor)
.setAuthor(`${message.guild.name}`, `${message.guild.iconURL({dynamic:true})}`)
    message.reply({embeds: [embed]}).catch((err) => {
                                                console.log(`i couldn't reply to the message: ` + err.message)
                                        })
      },
};   