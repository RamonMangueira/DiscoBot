const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Responde com 'Pong!"),

  async execute(interaction) {
    await new Promise((resolve) => setTimeout(resolve, 2500));
    await interaction.reply("Pong!");
  },
};
