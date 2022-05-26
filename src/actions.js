import { MessageButton } from "discord.js";

import { RESOURCES } from "./utils.js";

const Actions = RESOURCES.map((resource) =>
  new MessageButton()
    .setCustomId(resource.key)
    .setLabel(resource.label)
    .setStyle("PRIMARY")
);

export default Actions;
