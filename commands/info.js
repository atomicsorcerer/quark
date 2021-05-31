const Discord = require("discord.js");

require("dotenv").config();

function info(msg) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Quark Info")
    .setDescription(`
    **Developers** - \`@SJTechy#2722\`

    **Start Date** - \`May 2021\`

    **Goals** - \`To help users connect with science through fun, and easy ways!\`
    `)
    .setColor("#007ea8")

  msg.channel.send(embed)
}

module.exports = { info }