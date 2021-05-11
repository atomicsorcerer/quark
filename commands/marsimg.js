const Discord = require("discord.js");

require("dotenv").config();

const fetch = require("node-fetch");

function marsimg(msg) {
  var randNum = Math.floor(Math.random() * 100);
  var randNum2 = Math.floor(Math.random() * 3100 + 1);

  fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${randNum2}&api_key=${process.env.NASA_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      const embed = new Discord.MessageEmbed()
        .setTitle("Here is an image from the Curiosity rover!")
        .setDescription(data.photos[randNum].earth_date)
        .setImage(data.photos[randNum].img_src)
        .setColor("#007ea8");

      msg.channel.send(embed);
    })
    .catch((err) => {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Mars Image`)
        .setDescription(`Sorry, an error occured. Please try again.`)
        .setImage("https://media0.giphy.com/media/jpPZo8ScZenZ7yQK3v/giphy.gif")
        .setColor("#007ea8");

      msg.channel.send(embed);
    });
}

module.exports = { marsimg };