const { SlashCommandBuilder } = require("discord.js");
const { getpassword } = require("../services/senhaHoje");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("senha")
    .setDescription("Senha de hoje!"),

  async execute(interaction) {
    await interaction.reply("Só um segundo, tá?");
    const password = await getpassword();
    await interaction.editReply(password);
  },
};
