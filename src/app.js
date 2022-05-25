import server from './server.js';
import { logger } from './utils.js';

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
})