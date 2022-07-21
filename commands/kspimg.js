const { EmbedBuilder } = require("discord.js");

require("dotenv").config();

const fetch = require("node-fetch");

function kspimg(msg, depth = 0) {
  if (depth > 2) {
    const embed = new EmbedBuilder()
      .setTitle("KSP Image")
      .setDescription("There was an issue, please try again")
      .setImage("https://media0.giphy.com/media/jpPZo8ScZenZ7yQK3v/giphy.gif")
      .setColor("#007ea8");

    msg.reply({ embeds: [embed] });

    return;
  }
  fetch("http://www.reddit.com/r/KerbalSpaceProgram.json")
    .then((res) => res.json())
    .then((data) => {
      var randNum = Math.floor(Math.random() * data.data.children.length);

      const url = data.data.children[randNum].data.url;

      console.log(url);

      const embed = new EmbedBuilder()
        .setTitle("KSP Image")
        .setDescription("From the r/KerbalSpaceProgram subreddit")
        .setImage(url)
        .setColor("#007ea8");

      if (
        data.data.children[randNum].data.is_video ||
        data.data.children[randNum].data.is_gallery ||
        data.data.children[randNum].data.over_18 ||
        data.data.children[randNum].data.link_flair_text !== "Image"
      ) {
        depth += 1;
        kspimg(msg, depth);
        return;
      } else if (!data.data.children[randNum].data.is_video) {
        depth += 1;
        msg.reply({ embeds: [embed] }).catch((err) => kspimg(msg, depth));

        return;
      }
    });
}

module.exports = { kspimg };
