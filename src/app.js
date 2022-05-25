import "dotenv/config";
import DiscordJs, { Intents } from "discord.js";
import { getRandomEmoji, logger } from "./utils.js";

const client = new DiscordJs.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () =>
  logger.info("Discord Bot is running! " + getRandomEmoji())
);

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", (message) => {
  if (message.content === "/hello") {
    message.reply({
      content: "Hello, world! " + getRandomEmoji(),
    });
  }
});
