const client = require("../../index");
const { line_image } = require('../../config.json');

const {
        MessageEmbed,
        Permissions,
        MessageAttachment,
        utils,
        Utils,
        MessageActionRow,
        MessageSelectMenu,
        MessageButton,
        Collection,
        ButtonInteraction,
        ColorResolvable,
        CommandInteraction,
        EmojiResolvable,
        Message,
        MessageReaction,
        TextChannel,
        User,
        MessageButtonStyle,
        GuildMember,
        WebhookClient,
        Client,
        Intents
} = require('discord.js');
const Discord = require('discord.js');
const lines = new Collection();
module.exports = lines;

let lineid =  ["1219620575111282749","1219623773762879488","1219647113869131887"];

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if(lineid.includes(message.channel.id)){ 
 let args = message.content.split(',')
  message.channel.send({files:[line_image]}).catch((err) => {
   console.log(err.message)
   })
   }
});