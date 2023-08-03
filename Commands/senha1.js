const { SlashCommandBuilder } = require("discord.js");
const { getpassword } = require("../services/senhaHoje");
const wait = require("node:timers/promises").setTimeout;

//configuração do dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const { TEXTO1, TEXTO2 } = process.env;

module.exports = {
  data: new SlashCommandBuilder()
    .setName(TEXTO1)
    .setDescription("Fornece a senha de hoje do " + TEXTO2 + "!"),

  async execute(interaction) {
    now = new Date();
    const password = now.getDate() * (now.getMonth() + 1);
    await interaction.reply(
      "A senha de hoje no " + TEXTO2 + " é:\n" + password
    );
  },
};
