import { Router } from "express";
import * as controller from "../controllers/auth";

const router = Router();

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/logout", controller.logout);
router.post("/token", controller.token);

export default router;
