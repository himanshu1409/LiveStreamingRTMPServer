const NodeMediaServer = require("node-media-server");

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000, // defines size of each chunk in RTMP stream in bytes
    ping: 30, // sets interval to check if client is still connected
    ping_timeout: 60, // after 60 seconds if client doesn't respond break connection
    gop_cache: true,
  },
  http: {
    port: 8080,
    allow_origin: "*",
  },
};

const server = new NodeMediaServer(config);
server.run();
