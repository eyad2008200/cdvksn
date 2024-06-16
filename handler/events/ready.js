const client = require("../index");
const { channel_id, role_id, guild_id } = require('../config.json');
const invites = require('./guildMemberAdd');
const db = require("pro.db")
const { joinVoiceChannel } = require('@discordjs/voice');

client.on('ready', () => {
console.log(`✅ ❘ ${client.user.tag} is now online!`)
  client.user.setStatus("dnd")
client.user.setActivity(`${client.config.prefix}by MITSUKI`, { type: 'PLAYING' })
});

client.on("ready", async () => {
  client.guilds.fetch(guild_id).then(async guild => {
    const guildInvites = await guild.invites.fetch();
    guildInvites.forEach(i => invites.set(i.code, i.uses));
  });  
});