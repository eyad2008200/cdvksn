const client = require("../index");
const db = require('pro.db');
const { channel_id, guild_id } = require('../config.json');
const invites = require('./guildMemberAdd');

client.on("inviteDelete", (invite) => invites.delete(invite.code));