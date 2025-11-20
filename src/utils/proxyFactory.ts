// src/utils/proxyFactory.ts
import { Router, Request, Response } from 'express';
import axios, { Method } from 'axios';

export function createProxyHandler(target: string) {
  return async (req: Request, res: Response) => {
    try {
      // Tự động bỏ prefix (req.baseUrl)
      // VD:
      //  req.originalUrl = /api/users/profile/1
      //  req.baseUrl     = /api/users
      //  kết quả         = /profile/1
      const path = req.originalUrl.replace(req.baseUrl, "");
      const backendUrl = target + path;

      console.log(`→ Proxy tới [${target}]:`, req.method, backendUrl);

      const response = await axios({
        url: backendUrl,
        method: req.method as Method,
        data: req.body,
        params: req.query,
        headers: {
          ...req.headers,
          host: undefined, // tránh lỗi Host header
        },
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
      });

      return res.status(response.status).send(response.data);
    } catch (error: any) {
      console.error(`❌ Proxy ERROR [${target}]`, error.message);

      if (error.response) {
        return res
          .status(error.response.status)
          .send(error.response.data);
      }

      return res.status(500).json({
        message: "Gateway internal error",
        error: error.message,
      });
    }
  };
}
