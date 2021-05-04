const Discord = require("discord.js");

require("dotenv").config();

const fetch = require("node-fetch");

const client = new Discord.Client();

const prefix = "?";

function help(msg) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Quark Help")
    .setDescription("Science for Discord")
    .addFields(
      {value: "The NASA Picture of the Day", name: "`?apod`", inline: false},
      {value: "An image from NASA's Curiosity rover!", name: "`?marsimg`", inline: false},
      {value: "Instructions to add Quark for your server", name: "`?getquark`", inline: false},
      {value: "https://github.com/SJTechy/quark", name: "`Github`", inline: false}
    )
    .setColor("#007ea8")

  msg.channel.send(embed)
}

module.exports = { help }