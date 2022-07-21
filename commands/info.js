import Discord from "discord.js";

import dotenv from "dotenv";
dotenv.config();

export default function info(msg) {
  const embed = new Discord.MessageEmbed()
    .setTitle("Quark Info")
    .setDescription(
      `
    **Developers** - \`@SJTechy#2722\`

    **Start Date** - \`May 2021\`

    **Goals** - \`To help users connect with science through fun, and easy ways!\`
    `
    )
    .setColor("#007ea8");

  msg.channel.send(embed);
}
