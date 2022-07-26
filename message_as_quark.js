require("dotenv").config();

const { Client } = require("discord.js");

const client = new Client({ intents: ["Guilds"] });

client.on("ready", async () => {
  console.log("Message as Quark Ready");

  await client.users
    .fetch("717907003120549908")
    .then((user) => user.send("Hello, this is Quark"));
});

client.login(process.env.ID);
