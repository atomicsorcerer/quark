<<<<<<< HEAD
import Discord from "discord.js";
=======
const { EmbedBuilder } = require("discord.js");
>>>>>>> a37eb04ca1b95efd48387fd06a453d8c73cc5fef

import dotenv from "dotenv";
dotenv.config();

const fetch = require("node-fetch");

export default function kspimg(msg) {
  fetch("http://www.reddit.com/r/KerbalSpaceProgram.json")
    .then((res) => res.json())
    .then((data) => {
      var randNum = Math.floor(Math.random() * data.data.children.length);

      const url = data.data.children[randNum].data.url;

      if (
        data.data.children[randNum].data.is_video ||
        data.data.children[randNum].data.is_gallery ||
        data.data.children[randNum].data.over_18 ||
        data.data.children[randNum].data.link_flair_text !== "Image"
      ) {
        kspimg(msg);
        return;
      } else if (!data.data.children[randNum].data.is_video) {
        const embed = new EmbedBuilder()
          .setTitle("KSP Image")
          .setDescription("From the r/KerbalSpaceProgram subreddit")
          .setImage(url)
          .setColor("#007ea8");

        msg.reply({ embeds: [embed] });
      }
    });
}

module.exports = { kspimg };
