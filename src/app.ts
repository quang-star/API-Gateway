import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config/env';
import apiRoutes from './routes';

const app = express();

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(
  cors({
    origin: config.frontendOrigin,
    credentials: true,
  }),
);

// Logger
app.use(morgan('dev'));

console.log('==== GATEWAY CONFIG =====');
console.log('PORT:', config.port);
console.log('FRONTEND_ORIGIN:', config.frontendOrigin);
// console.log('USER_SERVICE_URL:', config.userServiceUrl);
// console.log('ORDER_SERVICE_URL:', config.orderServiceUrl);
console.log('ADMIN_SERVICE_URL:', config.adminServiceUrl);
console.log('AUTH_SERVICE_URL:', config.authServiceUrl);
console.log('POST_SERVICE_URL:', config.postServiceUrl);
console.log('CHAT_SERVICE_URL:', config.chatServiceUrl);
console.log('=========================');

// Tất cả /api/* → routes/index.ts
app.use('/api', apiRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('API Gateway OK');
});

export default app;
