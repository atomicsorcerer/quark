const { EmbedBuilder } = require("discord.js");

import dotenv from "dotenv";
dotenv.config();

import fetch from "node-fetch";

function apod(msg) {
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      const embed = new EmbedBuilder()
        .setTitle("NASA Image of the Day")
        .setDescription(data.explanation)
        .setImage(data.url)
        .setColor("#007ea8");

      msg.reply({ embeds: [embed] });
    })
    .catch((err) => {
      const embed = new EmbedBuilder()
        .setTitle(`NASA Image of the Day`)
        .setDescription(`Sorry, an error occured. Please try again.`)
        .setImage("https://media0.giphy.com/media/jpPZo8ScZenZ7yQK3v/giphy.gif")
        .setColor("#007ea8");

      msg.reply({ embeds: [embed] });
    });
}
