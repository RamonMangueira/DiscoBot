const { Client, Events, GatewayIntentBits } = require("discord.js");

//dotenv
const dotenv = require("dotenv");
dotenv.config();
const { TOKEN } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`Pronto! Login realizado com ${c.user.tag}`);
});

client.login(TOKEN);
