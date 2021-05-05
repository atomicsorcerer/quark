const Discord = require("discord.js");

require("dotenv").config();

function help(msg) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Quark Help")
    .setDescription("Science for Discord")
    .addFields(
      {value: "The NASA Picture of the Day", name: "`q?apod`", inline: false},
      {value: "An image from NASA's Curiosity rover!", name: "`q?marsimg`", inline: false},
      {value: "Instructions to add Quark for your server", name: "`q?getquark`", inline: false},
      {value: "Search for an image in NASA's database.", name: "`q?nasaimg 'search-param'`", inline: false},
      {value: "https://github.com/SJTechy/quark", name: "`Github`", inline: false}
    )
    .setColor("#007ea8")

  msg.channel.send(embed)
}

module.exports = { help }