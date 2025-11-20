// src/routes/order.route.ts
import { Router } from "express";
import { createProxyHandler } from "../utils/proxyFactory";
import { config } from "../config/env";

const router = Router();

router.use(createProxyHandler(config.orderServiceUrl));

export default router;
