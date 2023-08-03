const { SlashCommandBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Teste de disponibilidade"),

  async execute(interaction) {
    await interaction.reply("Bot online :kissing_heart: ");
  },
};
