const fs = require('fs');
const path = require('path');

class Parser {
  constructor(configFile) {
    this.configFile = configFile;
  }

  async parse() {
    try {
      const rawData = await fs.promises.readFile(this.configFile, 'utf8');
      const configData = JSON.parse(rawData);
      return configData;
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new Error(`Config file not found: ${this.configFile}`);
      } else if (error instanceof SyntaxError) {
        throw new Error(`Invalid JSON in config file: ${this.configFile}`);
      } else {
        throw error;
      }
    }
  }

  validateConfig(configData) {
    if (!configData || typeof configData !== 'object') {
      throw new Error('Invalid config data');
    }

    const requiredProperties = ['host', 'port', 'password'];
    requiredProperties.forEach((property) => {
      if (!configData[property]) {
        throw new Error(`Missing required property: ${property}`);
      }
    });

    return configData;
  }
}

module.exports = Parser;