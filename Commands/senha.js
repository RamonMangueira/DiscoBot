const { SlashCommandBuilder } = require("discord.js");
const { getpassword } = require("../services/senhaHoje");
const wait = require("node:timers/promises").setTimeout;

//configuração do dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const { TEXTO } = process.env;

module.exports = {
  data: new SlashCommandBuilder()
    .setName(TEXTO)
    .setDescription("Fornece a senha de hoje da " + TEXTO + "!"),

  async execute(interaction) {
    await interaction.reply("Um momento Sr(a)");
    const password = await getpassword();
    await interaction.editReply(
      "A senha de hoje na " + TEXTO + " é:\n" + password
    );
  },
};
