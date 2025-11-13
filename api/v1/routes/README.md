# Cache Redis Config

A lightweight and efficient Redis configuration manager for caching in Node.js applications.

## Features

- Simple and intuitive API
- Supports multiple Redis clients
- Automatic connection handling
- Built-in error logging

## Installation

```bash
npm install cache-redis-config
```

## Usage

```javascript
const { createRedisCache } = require('cache-redis-config');

const cache = createRedisCache({
  host: 'localhost',
  port: 6379,
  password: 'your-password',
  ttl: 3600 // default TTL in seconds
});

// Set a value
await cache.set('user:123', { name: 'John Doe', email: 'john@example.com' });

// Get a value
const user = await cache.get('user:123');

// Delete a value
await cache.del('user:123');
```

## Configuration Options

| Option    | Type   | Default | Description                     |
|-----------|--------|---------|---------------------------------|
| host      | string | 'localhost' | Redis server host              |
| port      | number | 6379    | Redis server port              |
| password  | string | null    | Redis password                 |
| ttl       | number | 3600    | Default time-to-live in seconds |

## License

MIT