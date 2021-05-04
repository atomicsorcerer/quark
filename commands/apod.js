const Discord = require("discord.js");

require("dotenv").config();

const fetch = require("node-fetch");

const client = new Discord.Client();

const prefix = "?";

function apod(msg) {
    fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          msg.channel.send("Here is the NASA Picture of the Day!", {
            files: [data.url],
          });
        });
}

module.exports = { apod }