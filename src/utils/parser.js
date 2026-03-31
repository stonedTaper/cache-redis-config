const fs = require('fs');
const path = require('path');

function parseConfig(filePath) {
  const configFile = fs.readFileSync(filePath, 'utf8');
  const config = {};
  const lines = configFile.split('\n');
  const headers = lines[0].split(' ');

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const [key, value] = line.split('=');
    config[key.trim()] = value.trim();
  }

  return config;
}

function parseRedisConfig(filePath) {
  const configFile = fs.readFileSync(filePath, 'utf8');
  const config = {};
  const lines = configFile.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('bind')) {
      config.host = line.split(' ')[1];
    } else if (line.startsWith('port')) {
      config.port = parseInt(line.split(' ')[1]);
    } else if (line.startsWith('timeout')) {
      config.timeout = parseInt(line.split(' ')[1]);
    }
  }

  return config;
}

module.exports = { parseConfig, parseRedisConfig };