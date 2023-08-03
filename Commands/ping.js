const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Teste de disponibilidade"),

  async execute(interaction) {
    await interaction.reply("Bot online :kissing_heart: ");
  },
};
