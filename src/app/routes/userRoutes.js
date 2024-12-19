import express from 'express';
import { createController } from '../controllers/createController.js';

const router = express.Router();

router.post("/register", createController.register);
router.get("/getAllUsers", createController.allUsers);

export default router;