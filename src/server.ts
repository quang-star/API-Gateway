import app from './app';
import { config } from './config/env';

const PORT = config.port;

// Listen tất cả interface để frontend connect được
app.listen(PORT, '0.0.0.0', () => {
  console.log(`API Gateway chạy tại http://0.0.0.0:${PORT}`);
});
