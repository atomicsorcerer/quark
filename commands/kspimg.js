const Discord = require("discord.js");

require("dotenv").config();

const fetch = require("node-fetch");

function kspimg(msg) {
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
        const embed = new Discord.MessageEmbed()
          .setTitle("KSP Image")
          .setDescription("From the r/KerbalSpaceProgram subreddit")
          .setImage(url)
          .setColor("#007ea8")

        msg.channel.send(embed);
      }
    });
}

module.exports = { kspimg }