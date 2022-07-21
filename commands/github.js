const { EmbedBuilder } = require("discord.js");

require("dotenv").config();

function github(msg) {
  const embed = new EmbedBuilder()
    .setTitle("Quark Github Repository")
    .setDescription(
      `
        Here is the Quark Github [repository](https://github.com/atomicsorcerer/quark)!

        Please star the repo, it really helps!
        `
    )
    .setColor("#007ea8");

  msg.reply({ embeds: [embed] });
}

module.exports = { github };
