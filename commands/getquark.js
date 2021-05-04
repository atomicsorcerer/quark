const Discord = require("discord.js");

require("dotenv").config();

const fetch = require("node-fetch");

const client = new Discord.Client();

const prefix = "?";

function getquark(msg) {
    const embed = new Discord.MessageEmbed()
    .setColor("#007ea8")
    .setTitle('Get Quark')
    .addFields(
      {value: "https://discord.com/api/oauth2/authorize?client_id=838275838096048148&permissions=3691511024&scope=bot", name: "Click here to add Quark!"},
      {value: "If you have any questions, please contact @CoderSeth", name: "Help"}
    )

    msg.channel.send(embed)
}

module.exports = { getquark }