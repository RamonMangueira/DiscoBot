const { Client, Events, GatewayIntentBits } = require("discord.js");

//dotenv
const dotenv = require("dotenv");
dotenv.config();
const { TOKEN } = process.env;

// importação dos comandos
const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname, "commands");
const commandsFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));
console.log(commandsFiles);

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`Pronto! Login realizado com ${c.user.tag}`);
});

client.login(TOKEN);
