import dotenv from "dotenv";
dotenv.config();

import Discord from "discord.js";

const { Client, Intents } = Discord;

const myIntents = new Intents();
myIntents.add("MESSAGE_CREATE", "GUILDS");

client = new Client({ intents: ["GUILDS"] });

const prefix = "q?";

import help from "./commands/help.js";
import info from "./commands/info.js";
import nasaimg from "./commands/nasaimg.js";
import getquark from "./commands/getquark.js";
import apod from "./commands/apod.js";
import marsimg from "./commands/marsimg.js";
import spaceicon from "./commands/spaceicon.js";
import commandNotFound from "./commands/commandNotFound.js";
import pi from "./commands/pi.js";
import github from "./commands/github.js";
import admin from "./commands/admin.js";
import kspimg from "./commands/kspimg.js";
import guessThePlanet from "./commands/guessThePlanet.js";

client.once("ready", () => {
  console.log("Quark is ready!");

  client.user.setActivity(
    `q?help | Observing ${
      client.guilds.cache.size
    } servers, and ${client.guilds.cache
      .map((guild) => guild.memberCount)
      .reduce((p, c) => p + c)} users! | bit.ly/quark-bot`,
    {
      type: "LISTENING",
      url: "https://github.com/SJTechy/buzz",
    }
  );
});

client.on("messageCreate", (msg) => {
  if (
    (msg.content.toLowerCase().startsWith(prefix) && !msg.author.bot) ||
    (msg.channel.type == "dm" && !msg.author.bot)
  ) {
    let args;

    if (
      msg.channel.type == "dm" &&
      msg.content.toLowerCase().startsWith(prefix)
    ) {
      args = msg.content
        .toLowerCase()
        .trim()
        .substr(2)
        .split(" ")
        .map((item) => item.trim());
    } else if (msg.channel.type == "dm") {
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
    else if (args[0] === "kspimg") kspimg(msg);
    else if (args[0] === "guess" || args[0] === "guesstheplanet")
      guessThePlanet(msg);
    else commandNotFound(msg);
  }
});

client.login(process.env.ID);
