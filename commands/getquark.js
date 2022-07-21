const { EmbedBuilder } = require("discord.js");

require("dotenv").config();

function getquark(msg) {
  const embed = new EmbedBuilder()
    .setColor("#007ea8")
    .setTitle("Get Quark")
    .addFields([
      {
        value:
          "https://discord.com/api/oauth2/authorize?client_id=838275838096048148&permissions=1626521206225&scope=bot%20applications.commands",
        name: "Click here to add Quark to your server!",
      },
    ]);

  msg.reply({ embeds: [embed] });
}

module.exports = { getquark };
