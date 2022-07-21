const { EmbedBuilder } = require("discord.js");

require("dotenv").config();

const fetch = require("node-fetch");

function nasaimg(msg, param) {
  var randNum = Math.floor(Math.random() * 10);

  fetch(`https://images-api.nasa.gov/search?q=${param}`)
    .then((res) => res.json())
    .then((data) => {
      const parsedData = data.collection.items;
      const embed = new EmbedBuilder()
        .setTitle(`NASA Image Search`)
        .setDescription(`Showing results for ${param}`)
        .setImage(parsedData[randNum].links[0].href)
        .setColor("#007ea8");

      msg.reply({ embeds: [embed] }).catch((err) => {
        const errorEmbed = new EmbedBuilder()
          .setTitle(`NASA Image Search`)
          .setDescription(`An error occurred while searching for ${param}.`)
          .setImage(
            "https://media0.giphy.com/media/jpPZo8ScZenZ7yQK3v/giphy.gif"
          )
          .setColor("#007ea8");

        msg.reply({ embeds: [embed] });
      });
    })
    .catch((err) => {
      const embed = new EmbedBuilder()
        .setTitle(`NASA Image Search`)
        .setDescription(`No results were found for ${param}.`)
        .setImage("https://media0.giphy.com/media/jpPZo8ScZenZ7yQK3v/giphy.gif")
        .setColor("#007ea8");

      msg.reply({ embeds: [embed] });
    });
}

module.exports = { nasaimg };
