import "dotenv/config";
import DiscordJs, { Intents } from "discord.js";
import { getRandomEmoji, logger } from "./utils.js";

const client = new DiscordJs.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  logger.info("Discord Bot is running! " + getRandomEmoji());

  const guild = client.guilds.cache.get(process.env.GUILD_ID);

  const commands = guild.commands || client.application?.commands;
  commands?.create({
    name: "hello",
    description: "Says hello",
  });
});

client.on("messageCreate", (message) => {
  if (message.content === "/hello") {
    message.reply({
      content: "Hello, world! " + getRandomEmoji(),
    });
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }

  const { commandName, option } = interaction;

  if (commandName === "hello") {
    interaction.reply({
      content: "Hello " + getRandomEmoji(),
      ephemeral: true,
    });
  }
});

client.login(process.env.DISCORD_TOKEN);
