const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

require("dotenv").config();

const commands = [
  new SlashCommandBuilder()
    .setName("help")
    .setDescription("Commands and Help for Quark"),
  new SlashCommandBuilder()
    .setName("info")
    .setDescription("General info about Quark"),
  new SlashCommandBuilder()
    .setName("nasaimage")
    .setDescription("Replies with user info!")
    .addStringOption((option) =>
      option
        .setName("search")
        .setDescription("The NASA image to search for")
        .setRequired(true)
    ),
  new SlashCommandBuilder()
    .setName("getquark")
    .setDescription("Instructions to add Quark to your server"),
  new SlashCommandBuilder()
    .setName("apod")
    .setDescription("The NASA Picture of the Day"),
  new SlashCommandBuilder()
    .setName("marsimage")
    .setDescription("An image from NASA's Curiosity rover"),
  // new SlashCommandBuilder().setName('spaceicon').setDescription('Returns a personalized space theme icon'),
  new SlashCommandBuilder()
    .setName("pi")
    .setDescription("A long string of π")
    .addIntegerOption((option) =>
      option
        .setName("digits")
        .setDescription("The number of digits of pi")
        .setRequired(true)
    ),
  new SlashCommandBuilder()
    .setName("github")
    .setDescription("The Quark Github repository"),
  new SlashCommandBuilder()
    .setName("kspimage")
    .setDescription("An image from the r/KerbalSpaceProgram subreddit"),
  new SlashCommandBuilder()
    .setName("guesstheplanet")
    .setDescription(
      "A guessing game to test your knowledge of the Solar System!"
    ),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(process.env.ID);

const deployCommands = async () => {
  try {
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });

    console.log("Successfully registered application commands.");

    console.log(commands);
  } catch (error) {
    console.error(error);
  }
};

deployCommands();

module.exports = { deployCommands };
