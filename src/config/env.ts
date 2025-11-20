import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: Number(process.env.PORT) || 4000,
  frontendOrigin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173',

  userServiceUrl: process.env.USER_SERVICE_URL || 'http://127.0.0.1:8001',
  orderServiceUrl: process.env.ORDER_SERVICE_URL || 'http://127.0.0.1:8002',
};
