const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: "roles",
    description: `Get a list of server roles and member counts.`,
    aliases: [],
    run: async (client,message, args) => {
      
		let roles = '```\n';
		let names = message.guild.roles.cache.map(role => `${role.name}`);
		let longest = names.reduce((long, str) => Math.max(long, str.length), 0);
message.guild.roles.cache.forEach(role => {
			roles += `${role.name}${' '.repeat(longest - role.name.length)} : ${
				role.members.size
			} members\n`;
		});
      
		roles += '```';

  message.reply({ content: roles });
 
      },
};   