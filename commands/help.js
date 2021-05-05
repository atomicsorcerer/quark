const Discord = require("discord.js");

require("dotenv").config();

function help(msg) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Quark Help")
    .setDescription(`
    **NASA Resources**
    \`q?apod\` - The NASA Picture of the Day
    \`q?marsimg\` - An image from NASA's Curiosity rover
    \`q?getquark\` - Instructions to add Quark to your server

    **Github**
    \`Quark Repository\` - https://github.com/SJTechy/quark - Please star!

    `)
    .setColor("#007ea8")

  msg.channel.send(embed)
}

module.exports = { help }