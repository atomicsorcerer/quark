import Discord from "discord.js";

import dotenv from "dotenv";
dotenv.config();

export default function help(msg) {
  const embed = new Discord.MessageEmbed()
    .setTitle("Quark Help")
    .setDescription(
      `
    **NASA Resources**
    \`q?apod\` - The NASA Picture of the Day
    \`q?marsimg\` - An image from NASA's Curiosity rover

    **Math Fun!**
    \`q?pi (digits)\` - A long string of π up to (digits)

    **Fun**
    \`q?spaceicon\` - Returns a personalized space theme icon
    \`q?guess\` - A guessing game to test your knowledge of the Solar System!

    **Kerbal Space Program**
    \`q?kspimg\` - An image from the r/KerbalSpaceProgram subreddit

    **Github**
    \`q?github\` - The Quark Github repository

    **Misc.**
    \`q?getquark\` - Instructions to add Quark to your server
    \`q?info\` - General info about Quark


    `
    )
    .setColor("#007ea8");

  msg.channel.send(embed);
}
