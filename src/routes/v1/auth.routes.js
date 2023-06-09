import express from "express";
const router = express.Router();

import { login, signup } from "../../controllers/auth.controller.js";

router.route("/signup").post(signup);

router.route("/login").post(login);

export default router;

