const { Client, Intents } = require("discord.js");

require("dotenv").config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const { help } = require("./commands/help");
const { info } = require("./commands/info");
const { nasaimg } = require("./commands/nasaimg");
const { getquark } = require("./commands/getquark");
const { apod } = require("./commands/apod");
const { marsimg } = require("./commands/marsimg");
const { spaceicon } = require("./commands/spaceicon");
const { commandNotFound } = require("./commands/commandNotFound");
const { pi } = require("./commands/pi");
const { github } = require("./commands/github");
const { admin } = require("./commands/admin");
const { kspimg } = require("./commands/kspimg");
const { guessThePlanet } = require("./commands/guessThePlanet");

client.once("ready", () => {
    console.log("Quark is ready!");

    client.user.setActivity(`q?help | Observing ${client.guilds.cache.size} servers, and ${client.guilds.cache.map((guild) => guild.memberCount).reduce((p, c) => p + c)} users! | bit.ly/quark-bot`, {
        type: "LISTENING",
        url: "https://github.com/SJTechy/buzz",
    });
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'help') await help(interaction)
    else if (commandName == 'apod') await apod(interaction)
    else if (commandName == 'pi') await pi(interaction, interaction.options.getInteger('digits'))
    else if (commandName == 'spaceicon') await spaceicon(interaction)
    // else if (commandName == 'apod') await apod(interaction)
});

// client.on("message", (msg) => {
//     if (msg.guild.id !== '772179279609462794') return

//     if ((msg.content.toLowerCase().startsWith(prefix) && !msg.author.bot) || (msg.channel.type == 'dm' && !msg.author.bot)) {
//         var args;

//         if (msg.channel.type == 'dm' && msg.content.toLowerCase().startsWith(prefix)) {
//             args = msg.content
//                 .toLowerCase()
//                 .trim()
//                 .substr(2)
//                 .split(" ")
//                 .map((item) => item.trim());
//         } else if (msg.channel.type == 'dm') {
//             args = msg.content
//                 .toLowerCase()
//                 .trim()
//                 .split(" ")
//                 .map((item) => item.trim());
//         } else {
//             args = msg.content
//                 .toLowerCase()
//                 .trim()
//                 .substr(2)
//                 .split(" ")
//                 .map((item) => item.trim());
//         }

//         if (args[0] === "apod") apod(msg);
//         else if (args[0] === "marsimg") marsimg(msg);
//         else if (args[0] === "help") help(msg);
//         else if (args[0] === "getquark") getquark(msg);
//         else if (args[0] === "nasaimg") nasaimg(msg, args[1]);
//         else if (args[0] === "spaceicon") spaceicon(msg);
//         else if (args[0] === "info") info(msg);
//         else if (args[0] === "pi") pi(msg, args[1]);
//         else if (args[0] === "github") github(msg);
//         else if (args[0] === "admin") admin(msg, client, args[1]);
//         else if (args[0] === "kspimg") kspimg(msg);
//         else if (args[0] === "guess" || args[0] === "guesstheplanet") guessThePlanet(msg);
//         else commandNotFound(msg)

//     }
// });

client.login(process.env.ID);
