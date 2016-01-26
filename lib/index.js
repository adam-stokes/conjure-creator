'use strict';

import Hapi from 'hapi';
import Config from 'getconfig';

const serverConfig = {};
const server = new Hapi.Server(serverConfig);

server.connection({
  host: Config.host,
  port: Config.port
});

export default server;
