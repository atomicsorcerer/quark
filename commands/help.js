const { EmbedBuilder } = require("discord.js");

require("dotenv").config();

function help(msg) {
  const embed = new EmbedBuilder()
    .setTitle("Quark Help")
    .setDescription(
      `
    **NASA Resources**
    \`/apod\` - The NASA Picture of the Day
    \`/marsimg\` - An image from NASA's Curiosity rover

    **Math Fun!**
    \`/pi (digits)\` - A long string of π up to (digits)

    **Fun**
    \`/spaceicon\` - Returns a personalized space theme icon (currently under development)
    \`/guess\` - A guessing game to test your knowledge of the Solar System!

    **Kerbal Space Program**
    \`/kspimg\` - An image from the r/KerbalSpaceProgram subreddit

    **Github**
    \`/github\` - The Quark Github repository

    **Misc.**
    \`/getquark\` - Instructions to add Quark to your server
    \`/info\` - General info about Quark


    `
    )
    .setColor("#007ea8");

  msg.reply({ embeds: [embed] });
}

module.exports = { help };
