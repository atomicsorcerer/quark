const Discord = require("discord.js");

require("dotenv").config();

const fetch = require("node-fetch");

const client = new Discord.Client();

const prefix = "?";

const {help} = require('./commands/help')
const {getquark} = require('./commands/getquark')
const {apod} = require('./commands/apod')
const {marsimg} = require('./commands/marsimg')


client.on("ready", () => {
  console.log("Quark is ready!");
  client.user.setActivity("?help - Science for Discord", {
    type: "LISTENING",
    url: "https://github.com/SJTechy/buzz",
  });
});

client.on("message", (msg) => {
  if (msg.content.startsWith(prefix) && !msg.author.bot) {
    var args = msg.content
      .trim()
      .substr(1)
      .split(" ")
      .map((item) => item.trim());

    if (args[0] === "apod") {
      apod(msg)
    }
    if (args[0] === "marsimg") {
        marsimg(msg)
    }
    if (args[0] === "getquark") {
      getquark(msg)
    }
    if (args[0] === "help") {
        help(msg)
    }
  }
});

client.login(process.env.ID);
