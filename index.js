const Discord = require("discord.js");

require("dotenv").config();

const client = new Discord.Client();

const prefix = "q?";

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

client.on("ready", () => {
  console.log("Quark is ready!");

  client.user.setActivity(`q?help | Observing ${client.guilds.cache.size} servers, and ${client.guilds.cache.map((guild) => guild.memberCount).reduce((p, c) => p + c)} users! | Science for Discord!`, {
    type: "LISTENING",
    url: "https://github.com/SJTechy/buzz",
  });
});

client.on("message", (msg) => {

  if ((msg.content.toLowerCase().startsWith(prefix) && !msg.author.bot) || (msg.channel.type == 'dm' && !msg.author.bot)) {
    var args;

    if (msg.channel.type == 'dm' && msg.content.toLowerCase().startsWith(prefix)) {
      args = msg.content
        .toLowerCase()
        .trim()
        .substr(2)
        .split(" ")
        .map((item) => item.trim());
    } else if (msg.channel.type == 'dm') {
      args = msg.content
      .toLowerCase()
      .trim()
      .split(" ")
      .map((item) => item.trim());
    } else {
      args = msg.content
      .toLowerCase()
      .trim()
      .substr(2)
      .split(" ")
      .map((item) => item.trim());
    }

    if (args[0] === "apod") apod(msg);
    else if (args[0] === "marsimg") marsimg(msg);
    else if (args[0] === "help") help(msg);
    else if (args[0] === "getquark") getquark(msg);
    else if (args[0] === "nasaimg") nasaimg(msg, args[1]);
    else if (args[0] === "spaceicon") spaceicon(msg);
    else if (args[0] === "info") info(msg);
    else if (args[0] === "pi") pi(msg, args[1]);
    else if (args[0] === "github") github(msg);
    else if (args[0] === "admin") admin(msg, client, args[1]);
    else commandNotFound(msg)

  }
});

client.login(process.env.ID);
