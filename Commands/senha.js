const { SlashCommandBuilder } = require("discord.js");
const { getpassword } = require("../services/senhaHoje");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("senha")
    .setDescription("Senha de hoje!"),

  async execute(interaction) {
    const password = await getpassword();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(password);
    await interaction.reply(password);
  },
};
