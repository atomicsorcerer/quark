import Discord from "discord.js";

import dotenv from "dotenv";
dotenv.config();

export default function admin(msg, client, cmd) {
  if (msg.author.id != "762813093596102668") {
    msg.channel.send("`Access Denied`");
  }

  if (cmd === "restart-activity") {
    client.user
      .setActivity(
        `q?help | Observing ${
          client.guilds.cache.size
        } servers, and ${client.guilds.cache
          .map((guild) => guild.memberCount)
          .reduce((p, c) => p + c)} users! | Science for Discord!`,
        {
          type: "LISTENING",
          url: "https://github.com/SJTechy/buzz",
        }
      )
      .then(() => {
        msg.channel.send("`Reset Bot Activity`");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
