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

client.on("ready", () => {
  console.log("Quark is ready!");
  client.user.setActivity("q?help - Science for Discord", {
    type: "LISTENING",
    url: "https://github.com/SJTechy/buzz",
  });
});

client.on("message", (msg) => {
  if (msg.content.startsWith(prefix) && !msg.author.bot) {
    var args = msg.content
      .trim()
      .substr(2)
      .split(" ")
      .map((item) => item.trim());

    if (args[0] === "apod") apod(msg);
    if (args[0] === "marsimg") marsimg(msg);
    if (args[0] === "help") help(msg);
    if (args[0] === "getquark") getquark(msg);
    if (args[0] === "nasaimg") nasaimg(msg, args[1]);
    if (args[0] === "spaceicon") spaceicon(msg);
    if (args[0] === "info") info(msg);

  }
});

client.login(process.env.ID);
