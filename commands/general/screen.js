const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");

const Screenshoter = require("../../schemas/screenshoter.js");

module.exports = {
    name: "screen",
    description: `Get screenshot.`,
    aliases: [],
    run: async (client,message, args) => {

		if (!args[0]) return message.reply('** :x: Please select a screenshot **').catch((err) => {
                                                console.log(`i couldn't reply to the message: ` + err.message)
                                        });
        let s = await Screenshoter.screenshot(`${args}`)
		message.reply({files: [s]}).catch((err) => {
                                                console.log(`i couldn't reply to the message: ` + err.message)
                                        });
      
    },
};
