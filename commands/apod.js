const Discord = require("discord.js");

require("dotenv").config();

const fetch = require("node-fetch");

const client = new Discord.Client();


function apod(msg) {

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {

      const embed = new Discord.MessageEmbed()
      .setTitle('NASA Image of the Day')
      .setDescription(data.explanation)
      .setImage(data.url)
      .setColor("#007ea8")

      msg.channel.send(embed)
    }
    ).catch(err => {
      const embed = new Discord.MessageEmbed()
      .setTitle(`NASA Image of the Day`)
      .setDescription(`Sorry, an error occured. Please try again.`)
      .setImage("https://media0.giphy.com/media/jpPZo8ScZenZ7yQK3v/giphy.gif")
      .setColor("#007ea8");

      msg.channel.send(embed);
    })
}

module.exports = { apod };
