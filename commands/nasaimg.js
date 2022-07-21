<<<<<<< HEAD
import Discord from "discord.js";
=======
const { EmbedBuilder } = require("discord.js");
>>>>>>> a37eb04ca1b95efd48387fd06a453d8c73cc5fef

import dotenv from "dotenv";
dotenv.config();

import fetch from "node-fetch";

export default function nasaimg(msg, param) {
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
