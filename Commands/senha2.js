const { SlashCommandBuilder } = require("discord.js");
const { getpassword } = require("../services/senhaHoje");
const wait = require("node:timers/promises").setTimeout;

//configuração do dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const { TEXTO3, TEXTO4 } = process.env;

module.exports = {
  data: new SlashCommandBuilder()
    .setName(TEXTO3)
    .setDescription("Fornece a senha de hoje da " + TEXTO4 + "!"),

  async execute(interaction) {
    const password = 50;
    await interaction.reply(
      "A senha de hoje na " + TEXTO4 + " é:\n" + password
    );
  },
};
