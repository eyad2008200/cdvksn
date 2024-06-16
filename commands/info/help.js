const { MessageButton, MessageActionRow, MessageEmbed, Client, MessageSelectMenu } = require("discord.js");
const { glob } = require("glob");
const { promisify } = require("util");
const { imeghelp } = require('../../config.json');

module.exports = {
    name: "help",
    description: 'Feeling lost?',
    aliases: [],
    run: async (client, message, args) => {
        const globPromise = promisify(glob);
        const adminFiles = await globPromise(`${process.cwd()}/commands/admin/**/*.js`);
        const generalFiles = await globPromise(`${process.cwd()}/commands/general/**/*.js`);
        const infoFiles = await globPromise(`${process.cwd()}/commands/info/**/*.js`);
        const ownerFiles = await globPromise(`${process.cwd()}/commands/owner/**/*.js`);
        const musicFiles = await globPromise(`${process.cwd()}/commands/music/**/*.js`);
        const activitiesFiles = await globPromise(`${process.cwd()}/commands/activities/**/*.js`);

        let menu = new MessageSelectMenu()
            .setCustomId(`help_${message.author.id}`)
            .setPlaceholder("Choose a category")

            .addOptions([
                {
                    label: 'Information',
                    description: 'To view the info commands',
                    value: 'information',
                    emoji: '<a:aheadstaff:1219916759683956746>',
                },
                {
                    label: 'Owner',
                    description: 'To view the owner commands',
                    value: 'owner',
                    emoji: '<a:crown_bfc4:1219662621683351602>',
                },
                {
                    label: 'Admin',
                    description: 'To view the admin commands',
                    value: 'admin',
                    emoji: '<:badge_DiscordStaff:1195061825528664204>',
                },
                {
                    label: 'General',
                    description: 'To view the general commands',
                    value: 'general',
                    emoji: '<a:5050blackworld:1151503765988458496>',
                },
                {
                    label: 'Music',
                    description: 'To view the music commands',
                    value: 'music',
                    emoji: '<a:music2:1138853626106884208>',
                },
                {
                    label: 'Delete list',
                    description: 'Delete messages list',
                    value: 'delete',
                    emoji: '<:AR_help:1219683348511985755>',
                }])
                
        let row = new MessageActionRow()
            .addComponents([menu]);
        let button = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setStyle('LINK')
                    .setLabel('SERVER SUPPORT')
                    .setURL(`https://discord.com/invite/C8nEZ9wfJT`))

            .addComponents(
                new MessageButton()
                    .setStyle('LINK')
                    .setLabel('SERVER')
                    .setURL(`https://discord.com/invite/C8nEZ9wfJT`))

        let embed = new MessageEmbed()
            .setDescription(`**This robot was developed by Mitsuki,LATE

My Name : <@874028668551315487>
    
discord: https://discord.com/invite/C8nEZ9wfJT**`)
            .setImage(imeghelp)
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp();

        message.reply({ embeds: [embed], components: [row, button] }).then(msg => {
            let filter = b => b.user.id === message.author.id && b.customId === `help_${message.author.id}`;
            let collector = msg.createMessageComponentCollector({ filter: filter, componentType: 'SELECT_MENU', time: 120000 });
collector.on("collect", (b) => {
    if (b.values[0] === "admin") {
        let embed_1 = new MessageEmbed()
            .setAuthor(`Admin Commands:`, client.user.displayAvatarURL({ dynamic: true }))
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp();

        const adminCommands = adminFiles.map((value) => {
            const file = require(value);
            const splitted = value.split("/");
            const directory = splitted[splitted.length - 2];

            if (file.name) {
                const properties = { directory, ...file };
                return `${client.config.prefix}${properties.name} - ${properties.description}`;
            }
        }).filter(command => command); // Filter out undefined values

        embed_1.setDescription(adminCommands.join('\n'));
                    b.update({ embeds: [embed_1], components: [row, button] }).catch(err => {});
                } else if (b.values[0] === "information") {
                    const { version: djsversion } = require("discord.js");
                    const { version } = require("../../package.json");
                    let days = Math.floor(client.uptime / 86400000);
                    let hours = Math.floor(client.uptime / 3600000) % 24;
                    let minutes = Math.floor(client.uptime / 60000) % 60;
                    let seconds = Math.floor(client.uptime / 1000) % 60;
                    let embed_1 = new MessageEmbed()
                        .setAuthor(`Information Bot:`, client.user.displayAvatarURL({ dynamic: true }))
                        .setColor(message.guild.me.displayHexColor)
                        .setTimestamp()
                        .addFields([
                            {
                                name: `Bot:`,
                                value: `\`\`\`Version: v${version}
Name: ${client.user.tag}
Id: ${client.user.id}
Users: ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
Guilds Count: ${client.guilds.cache.size.toLocaleString()}
Node.js version: ${process.version}
discord js version: v${djsversion}
Platform: ${process.platform}\`\`\``
                            },
                            {
                                name: `Server:`,
                                value: `\`\`\`Bot Prefix: ${client.config.prefix}
Bot Language: English/Arabic \`\`\``
                            },
                            {
                                name: `System:`,
                                value: `\`\`\`Ping: ${client.ws.ping}ms
Uptime: ${seconds}s ${minutes}m ${hours}h ${days}d\`\`\``
                            }
                        ]);
                    b.update({ embeds: [embed_1], components: [row, button] }).catch(err => {});
                } else if (b.values[0] === "owner") {
                    let embed_1 = new MessageEmbed()
                        .setAuthor(`Owner Commands:`, client.user.displayAvatarURL({ dynamic: true }))
                        .setColor(message.guild.me.displayHexColor)
                        .setTimestamp();

                    ownerFiles.forEach((value) => {
                        const file = require(value);
                        const splitted = value.split("/");
                        const directory = splitted[splitted.length - 2];

                        if (file.name) {
                            const properties = { directory, ...file };
                            embed_1.addField(`${client.config.prefix}${properties.name}`, `${properties.description}`, true);
                        }
                    });

                    b.update({ embeds: [embed_1], components: [row, button] }).catch(err => {});
                } else if (b.values[0] === "general") {
                    let embed_1 = new MessageEmbed()
                        .setAuthor(`General Commands:`, client.user.displayAvatarURL({ dynamic:true}))
       .setColor(message.guild.me.displayHexColor) 
      .setTimestamp()
        
        generalFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            embed_1.addField(`${client.config.prefix}${properties.name}`, `${properties.description}`, true)
        }
    })
    
    b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {});    } else if(b.values[0] === "activities")
  {
let embed_1 = new MessageEmbed()

  .setAuthor(`Activities Commands:`, client.user.displayAvatarURL({dynamic : true}))
       .setColor(message.guild.me.displayHexColor) 
      .setTimestamp()
        
        activitiesFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            embed_1.addField(`${client.config.prefix}${properties.name}`, `${properties.description}`, true)
         }
    })
          b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {});  } else if(b.values[0] === "music")
  {
let embed_1 = new MessageEmbed()

  .setAuthor(`Music Commands:`, client.user.displayAvatarURL({dynamic : true}))
       .setColor(message.guild.me.displayHexColor) 
      .setTimestamp()
        
        musicFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];


        if (file.name) {
            const properties = { directory, ...file };
            embed_1.addField(`${client.config.prefix}${properties.name}`, `${properties.description}`, true)
        }
    })
          b.update({ embeds:[embed_1], components:[row, button] }).catch(err => {});  } else if(b.values[0] === "delete") {
          msg.delete().catch(err => {});
          message.delete().catch(err => {});
         }
      });
    });
   },
};
