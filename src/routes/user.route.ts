// src/routes/user.route.ts
import { Router } from "express";
import { createProxyHandler } from "../utils/proxyFactory";
import { config } from "../config/env";

const router = Router();

// All non-order routes → user service
router.use(createProxyHandler(config.userServiceUrl));

export default router;
