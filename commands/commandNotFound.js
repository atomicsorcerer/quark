const { EmbedBuilder } = require("discord.js");

function commandNotFound(msg) {
  const embed = new EmbedBuilder()
    .setTitle("Command Not Found")
    .setDescription("Please check `/help` for commands.")
    .setImage("https://media0.giphy.com/media/jpPZo8ScZenZ7yQK3v/giphy.gif")
    .setColor("#007ea8");

  msg.reply({ embeds: embed });
}

module.exports = { commandNotFound };
