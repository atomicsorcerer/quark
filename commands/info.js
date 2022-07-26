const { EmbedBuilder } = require("discord.js");

function info(msg, client) {
  const embed = new EmbedBuilder()
    .setTitle("Quark Info")
    .setDescription(
      `
    **Start Date** - \`May 2021\`

    **Server Count** - \`${client.guilds.cache.size}\`

    **User Count** - \`${client.guilds.cache
      .map((guild) => guild.memberCount)
      .reduce((p, c) => p + c)}\`

    **Goals** - \`To help users connect with science through fun!\`
    `
    )
    .setColor("#007ea8");

  msg.reply({ embeds: [embed] });
}

module.exports = { info };
