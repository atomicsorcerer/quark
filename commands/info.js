const { EmbedBuilder } = require("discord.js");

import dotenv from "dotenv";
dotenv.config();

function info(msg) {
  const embed = new EmbedBuilder()
    .setTitle("Quark Info")
    .setDescription(
      `
    **Start Date** - \`May 2021\`

    **Goals** - \`To help users connect with science through fun!\`
    `
    )
    .setColor("#007ea8");

  msg.reply({ embeds: [embed] });
}

module.exports = { info };
