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
  {
    key: "elegosta_id",
    audio: "elegosta.mp3",
    label: "Ele Gosta",
    message: "ELE GOSTAAAA :smirk:",
  },
  {
    key: "olhaeleai_id",
    audio: "olhaeleai.mp3",
    label: "Olha ele ai",
    message:
      "Olha ele ai :stuck_out_tongue_winking_eye: :stuck_out_tongue_winking_eye:",
  },
  {
    key: "nao_id",
    audio: "nao.mp3",
    label: "Não",
    message: "Não :point_up:",
  },
  {
    key: "dancagatinho_id",
    audio: "dancagatinho.mp3",
    label: "Dança gatinho, Dança!",
    message:
      ":male_dancer: :dancer: Dança, gatinho, dança! :male_dancer: :dancer:",
  },
  {
    key: "quepapelao_id",
    audio: "quepapelao.mp3",
    label: "Que papelao!",
    message: ":roll_of_paper: Que papelão, hein! :neutral_face:",
  },
  {
    key: "queissomeuficalma",
    audio: "queissomeuficalma.mp3",
    label: "Que isso meu fi, calma",
    message: ":raised-hand: Que isso meu fi, calma :raised-hand:",
  },
  {
    key: "uiii",
    audio: "uiii.mp3",
    label: "UIIi",
    message: "UUII",
  },
  {
    key: "UEPA",
    audio: "uepa.mp3",
    label: "Uepaa",
    message: "UUII",
  },
  {
    key: "aiaiai",
    audio: "aiaiai.mp3",
    label: "Aiaiai",
    message: "AIAIAI",
  },
  {
    key: "demais",
    audio: "demais.mp3",
    label: "DEMAAIS",
    message: "AIAIAI",
  },
  {
    key: "irra",
    audio: "irra.mp3",
    label: "Irrraaaaaaa",
    message: "Irraaa",
  },
  {
    key: "xiii",
    audio: "xiii.mp3",
    label: "Xiii",
    message: "Xii",
  },
  {
    key: "pare",
    audio: "pare.mp3",
    label: "Pare",
    message: "Paree",
  },
  {
    key: "abruroabruo",
    audio: "abruroaburo.mp3",
    label: "aburo",
    message: "Aburbrubrau",
  },
  {
    key: "ebrincadeira",
    audio: "Ebrincadeira.mp3",
    label: "Brincadeira",
    message: "É brincadeira",
  },
  {
    key: "FicouBaum",
    audio: "FicouBaum.mp3",
    label: "Ficou Baum Naum",
    message: "Ficou baum naum em",
  },
  {
    key: "cheeeega",
    audio: "cheeeega.mp3",
    label: "Cheeeega",
    message: "Cheeeega",
  },
  {
    key: "taotabom",
    audio: "taotabom.mp3",
    label: "Tão ta bom",
    message: "Tão ta bom",
  },
  {
    key: "aingostei",
    audio: "aiiingostei.mp3",
    label: "Aiiinn Gostei",
    message: "Aiiinn Gostei",
  },
  {
    key: "uh",
    audio: "uh.mp3",
    label: "UH",
    message: "UH!",
  },
  {
    key: "atumalaca",
    audio: "atumalaca.mp3",
    label: "Atumalaca",
    message: "HAHAHA... ATUMALACA",
  },
];
