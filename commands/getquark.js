import Discord from "discord.js";

import dotenv from "dotenv";
dotenv.config();

export default function getquark(msg) {
  const embed = new Discord.MessageEmbed()
    .setColor("#007ea8")
    .setTitle("Get Quark")
    .addFields(
      {
        value:
          "https://discord.com/api/oauth2/authorize?client_id=838275838096048148&permissions=3691511024&scope=bot",
        name: "Click here to add Quark to your server!",
      },
      {
        value: "If you have any questions, please contact @SJTechy#2722",
        name: "Help",
      }
    );

  msg.channel.send(embed);
}
