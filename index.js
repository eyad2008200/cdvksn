const express = require('express');
const app = express();
const chalk = require("chalk");

app.get('/', (req, res) => {
  res.send('Hello Express app!')
})
app.use('/ping', (req, res) => {
  res.send(new Date());
});

app.listen(3000, () => {
  console.log(chalk.red.bold('Express is ready.'))
});


const { Client, Collection, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents } = require("discord.js");

const client = new Client({
  intents: 32767,
  allowedMentions: { repliedUser: false },
});

process.on("unhandledRejection", error => {
  return console.log(error)
});


module.exports = client;
client.commands = new Collection();
client.config = require("./config.json");
require("./handler")(client);

setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 3 * 1000 * 60);


client.login("MTIyMzE4MDkxNDA3MTE3OTI5NA.GpbB2G.0qxctrRFB8CN05LDdANMG4rYYm0jh2eNDjPjUo")
    .catch((err) => {
        console.log(err.message);
    });


//
