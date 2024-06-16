const client = require("../../index");

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
const react = new Collection();
module.exports = react;

let reactid = ["1219623773762879488"];

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if(reactid.includes(message.channel.id)){
        message.react("<a:aheadstaff:1219916759683956746>")
        message.react("<a:crown_bfc4:1219662621683351602>")
   }
});