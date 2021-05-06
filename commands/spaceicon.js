const Discord = require("discord.js");

const { createCanvas, loadImage } = require("canvas");

require("dotenv").config();

function spaceicon(msg) {
    var randNum = Math.floor(Math.random() * 5);
    const photos = [
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1987&q=80",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2852&q=80",
      "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1970&q=80",
      "https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    ];
    const space_img = loadImage(photos[randNum]);

  const canvas = createCanvas(500, 500);
  const ctx = canvas.getContext("2d");

  const spaceImg = loadImage(
    photos[randNum]
  )
  .then(image => {

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    ctx.font = "50px Impact";
    ctx.fillText(`${msg.author.username}`, 125, 250);
    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "space_icon.png"
    );
  
    msg.channel.send(attachment);
  })
  .catch(err => console.log(err))
}

module.exports = { spaceicon };
