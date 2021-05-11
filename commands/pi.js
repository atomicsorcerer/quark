const Discord = require("discord.js");

require("dotenv").config();

const PI = require("pi");

function pi(msg, digits) {
  const embed = new Discord.MessageEmbed()
    .setTitle(`Pi to ${digits} Digits`)
    .setDescription(`\`\`\`${PI(digits, true)}\`\`\``)
    .setColor("#007ea8");

  msg.channel.send(embed)
    .catch(err => {
        const errorEmbed = new Discord.MessageEmbed()
            .setTitle("Sorry, too many digits requested")
            .setDescription(`Please try a smaller number or find a new command via \`q?help\`.`)
            .setImage('https://media0.giphy.com/media/jpPZo8ScZenZ7yQK3v/giphy.gif')
            .setColor("#007ea8");

        msg.channel.send(errorEmbed)
    })
}

module.exports = { pi };
