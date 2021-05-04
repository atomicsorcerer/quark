const Discord = require("discord.js");

require("dotenv").config();

const fetch = require("node-fetch");

const client = new Discord.Client();

const prefix = "?";

function marsimg(msg) {
    var randNum = Math.floor(
        Math.random() * 100
      );
      // var randNum2 = Math.floor(
      //   Math.random() * 3100
      // );

    fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NASA_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          msg.channel.send(`Here is an image from the Curiosity rover! Date: ${data.photos[randNum].earth_date}`, {
            files: [data.photos[randNum].img_src],
          });
        })
        .catch(err => {
          msg.channel.send("Sorry, an error occurred.")
          console.log(err)
        })
}

module.exports = { marsimg }