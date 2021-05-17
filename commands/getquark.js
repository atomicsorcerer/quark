const Discord = require("discord.js");

require("dotenv").config();

function getquark(msg) {
    const embed = new Discord.MessageEmbed()
    .setColor("#007ea8")
    .setTitle('Get Quark')
    .addFields(
      {value: "https://discord.com/api/oauth2/authorize?client_id=838275838096048148&permissions=3691511024&scope=bot", name: "Click here to add Quark to your server!"},
      {value: "If you have any questions, please contact @CoderSeth#6250", name: "Help"}
    )

    msg.channel.send(embed)
}

module.exports = { getquark }