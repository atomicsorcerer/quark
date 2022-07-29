require("dotenv").config();

const { Client } = require("discord.js");

const client = new Client({ intents: ["Guilds"] });

client.on("ready", async () => {
  console.log("Message as Quark Ready");

  client.guilds.cache.map((guild) => {
    client.users.fetch(guild.ownerId).then((user) => console.log(user.id));
  });
});

client.login(process.env.ID);
