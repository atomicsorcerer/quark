const Discord = require("discord.js");

require("dotenv").config();

const fetch = require("node-fetch");

const client = new Discord.Client();

const prefix = "?";

client.on("ready", () => {
  console.log("Quark is ready!");
  client.user.setActivity("?help - Science for Discord", {
    type: "LISTENING",
    url: "https://github.com/SJTechy/buzz",
  });
});

client.on("message", (msg) => {
  if (msg.content.startsWith(prefix) && !msg.author.bot) {
    var args = msg.content
      .trim()
      .substr(1)
      .split("|")
      .map((item) => item.trim());

    if (args[0] === "apod") {
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
    if (args[0] === "marsimg") {
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
    if (args[0] === "getquark") {
      const embed = new Discord.MessageEmbed()
        .setColor("#007ea8")
        .setTitle('Get Quark')
        .addFields(
          {value: "https://discord.com/api/oauth2/authorize?client_id=838275838096048148&permissions=3691511024&scope=bot", name: "Click here to add Quark!"},
          {value: "If you have any questions, please contact @CoderSeth", name: "Help"}
        )

        msg.channel.send(embed)
    }
    if (args[0] === "help") {
        const embed = new Discord.MessageEmbed()
          .setTitle("Quark Help")
          .setDescription("Science for Discord")
          .addFields(
            {value: "The NASA Picture of the Day", name: "`?apod`", inline: false},
            {value: "An image from NASA's Curiosity rover!", name: "`?marsimg`", inline: false},
            {value: "Instructions to add Quark for your server", name: "`?getquark`", inline: false},
            {value: "https://github.com/SJTechy/quark", name: "`Github`", inline: false}
          )
          .setColor("#007ea8")

        msg.channel.send(embed)
    }
  }
});

client.login(process.env.ID);
