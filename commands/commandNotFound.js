import Discord from "discord.js";

export default function commandNotFound(msg) {
  const embed = new Discord.MessageEmbed()
    .setTitle("Command Not Found")
    .setDescription("Please check `q?help` for commands.")
    .setImage("https://media0.giphy.com/media/jpPZo8ScZenZ7yQK3v/giphy.gif")
    .setColor("#007ea8");

  msg.channel.send(embed);
}
