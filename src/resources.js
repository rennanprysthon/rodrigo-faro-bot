import path from "path";

import { fileURLToPath } from "url";
import { RESOURCES } from "./resources.js";
import {createAudioResource} from '@discordjs/voice';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resources = {
  [RESOURCES.CAVALO]: {
    resource: () =>
      createAudioResource(path.resolve(__dirname, "assets", "cavalo.mp3"))
  },
  [RESOURCES.TOME]: {
    resource: () =>
      createAudioResource(path.resolve(__dirname, "assets", "tome.mp3"))
  },
};

export default resources;
