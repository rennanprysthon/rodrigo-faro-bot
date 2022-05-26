import pino from "pino";

const log = pino({
  enabled: !process.env.LOG_DISABLED,
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

export const logger = log;

export function getRandomEmoji() {
  const emojiList = [
    "😭",
    "😄",
    "😌",
    "🤓",
    "😎",
    "😤",
    "🤖",
    "😶‍🌫️",
    "🌏",
    "📸",
    "💿",
    "👋",
    "🌊",
    "✨",
  ];
  return emojiList[Math.floor(Math.random() * emojiList.length)];
}

export const RESOURCES = [
  {
    key: "cavalo_id",
    audio: "cavalo.mp3",
    label: "Cavalo",
    message: "CAVALO :racehorse:",
  },
  {
    key: "tome_id",
    audio: "tome.mp3",
    label: "Tome",
    message: "TOME :punch:",
  },
];
