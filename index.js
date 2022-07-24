require("dotenv").config();

const { EmbedBuilder, Client } = require("discord.js");

const client = new Client({ intents: ["Guilds"] });

const { help } = require("./commands/help");
// const { spaceicon } = require("./commands/spaceicon");
const { info } = require("./commands/info");
const { nasaimg } = require("./commands/nasaimg");
const { getquark } = require("./commands/getquark");
const { apod } = require("./commands/apod");
const { marsimg } = require("./commands/marsimg");
const { commandNotFound } = require("./commands/commandNotFound");
const { pi } = require("./commands/pi");
const { github } = require("./commands/github");
const { admin } = require("./commands/admin");
const { kspimg } = require("./commands/kspimg");
const { guessThePlanet } = require("./commands/guessThePlanet");

client.on("ready", () => {
  // client.user.setPresence({
  //   activities: [
  //     {
  //       name: `/help | bit.ly/quark-bot`,
  //       type: `LISTENING`,
  //     },
  //   ],
  // });

  console.log("Quark is ready!");

  // client.user.setActivity(
  //   `/help | Observing ${client.guilds.cache.size} servers | bit.ly/quark-bot`,
  //   {
  //     type: "LISTENING",
  //   }
  // );
});

client.on("interactionCreate", async (interaction) => {
  const { commandName } = interaction;

  if (interaction.isSelectMenu()) {
    if (interaction.message.interaction.commandName === "guesstheplanet") {
      const correctEmbed = new EmbedBuilder()
        .setTitle("Guess the Planet (or moon)")
        .setDescription(
          `
        ✅✅ Correct!! ✅✅
        `
        )
        .setColor("#007ea8");

      const wrongEmbed = new EmbedBuilder()
        .setTitle("Guess the Planet (or moon)")
        .setDescription(
          `
        ❌ Sorry, that is incorrect. ❌
        `
        )
        .setColor("#007ea8");

      await interaction.update({
        embeds: [
          interaction.customId === interaction.values[0]
            ? correctEmbed
            : wrongEmbed,
        ],
        components: [],
      });
    }

    return;
  }

  if (commandName === "help") await help(interaction);
  else if (commandName == "apod") await apod(interaction);
  else if (commandName == "pi")
    await pi(interaction, interaction.options.getInteger("digits"));
  else if (commandName == "info") await info(interaction);
  else if (commandName == "nasaimage")
    await nasaimg(interaction, interaction.options.getString("search"));
  else if (commandName == "getquark") await getquark(interaction);
  else if (commandName == "marsimage") await marsimg(interaction);
  else if (commandName == "commandnotfound") await commandNotFound(interaction);
  else if (commandName == "github") await github(interaction);
  else if (commandName == "kspimage") await kspimg(interaction);
  else if (commandName == "guesstheplanet") await guessThePlanet(interaction);
});

// client.on("message", (msg) => {
//     if (msg.guild.id !== '772179279609462794') return

//     if ((msg.content.toLowerCase().startsWith(prefix) && !msg.author.bot) || (msg.channel.type == 'dm' && !msg.author.bot)) {
//         var args;

//         if (msg.channel.type == 'dm' && msg.content.toLowerCase().startsWith(prefix)) {

// client.on("message", (msg) => {
//     if (msg.guild.id !== '772179279609462794') return

//     if ((msg.content.toLowerCase().startsWith(prefix) && !msg.author.bot) || (msg.channel.type == 'dm' && !msg.author.bot)) {
//         var args;

//         if (msg.channel.type == 'dm' && msg.content.toLowerCase().startsWith(prefix)) {

// client.on("message", (msg) => {
//     if (msg.guild.id !== '772179279609462794') return

//     if ((msg.content.toLowerCase().startsWith(prefix) && !msg.author.bot) || (msg.channel.type == 'dm' && !msg.author.bot)) {
//         var args;

//         if (msg.channel.type == 'dm' && msg.content.toLowerCase().startsWith(prefix)) {

// client.on("message", (msg) => {
//     if (msg.guild.id !== '772179279609462794') return

//     if ((msg.content.toLowerCase().startsWith(prefix) && !msg.author.bot) || (msg.channel.type == 'dm' && !msg.author.bot)) {
//         var args;

//         if (msg.channel.type == 'dm' && msg.content.toLowerCase().startsWith(prefix)) {

// client.on("message", (msg) => {
//     if (msg.guild.id !== '772179279609462794') return

//     if ((msg.content.toLowerCase().startsWith(prefix) && !msg.author.bot) || (msg.channel.type == 'dm' && !msg.author.bot)) {
//         var args;

//         if (msg.channel.type == 'dm' && msg.content.toLowerCase().startsWith(prefix)) {
//             args = msg.content
//                 .toLowerCase()
//                 .trim()
//                 .substr(2)
//                 .split(" ")
//                 .map((item) => item.trim());
//         } else if (msg.channel.type == 'dm') {
//             args = msg.content
//                 .toLowerCase()
//                 .trim()
//                 .split(" ")
//                 .map((item) => item.trim());
//         } else {
//             args = msg.content
//                 .toLowerCase()
//                 .trim()
//                 .substr(2)
//                 .split(" ")
//                 .map((item) => item.trim());
//         }

//         if (args[0] === "apod") apod(msg);
//         else if (args[0] === "marsimg") marsimg(msg);
//         else if (args[0] === "help") help(msg);
//         else if (args[0] === "getquark") getquark(msg);
//         else if (args[0] === "nasaimg") nasaimg(msg, args[1]);
//         else if (args[0] === "spaceicon") spaceicon(msg);
//         else if (args[0] === "info") info(msg);
//         else if (args[0] === "pi") pi(msg, args[1]);
//         else if (args[0] === "github") github(msg);
//         else if (args[0] === "admin") admin(msg, client, args[1]);
//         else if (args[0] === "kspimg") kspimg(msg);
//         else if (args[0] === "guess" || args[0] === "guesstheplanet") guessThePlanet(msg);
//         else commandNotFound(msg)

//     }
// });

client.login(process.env.ID);
