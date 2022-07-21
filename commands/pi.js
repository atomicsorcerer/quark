const { EmbedBuilder } = require("discord.js");

require("dotenv").config();

const PI = require("pi");

function pi(msg, digits) {
  if (digits === undefined || digits === null) {
    let errorEmbed = new EmbedBuilder()
      .setTitle("Please choose a number for digits")
      .setDescription(
        `Please try a new number or find a new command via \`/help\`.`
      )
      .setImage("https://media0.giphy.com/media/jpPZo8ScZenZ7yQK3v/giphy.gif")
      .setColor("#007ea8");

    msg.reply({ embeds: [errorEmbed] });

    return;
  }

  if (digits > 4096) {
    let errorEmbed2 = new EmbedBuilder()
      .setTitle("Sorry, too many digits requested")
      .setDescription(
        `Please try a smaller number or find a new command via \`/help\`.`
      )
      .setImage("https://media0.giphy.com/media/jpPZo8ScZenZ7yQK3v/giphy.gif")
      .setColor("#007ea8");

    msg.reply({ embeds: [errorEmbed2] });

    return;
  }

  const embed = new EmbedBuilder()
    .setTitle(`Pi to ${digits} Digits`)
    .setDescription(`\`\`\`${PI(digits, true)}\`\`\``)
    .setColor("#007ea8");

  msg.reply({ embeds: [embed] });
}

module.exports = { pi };
