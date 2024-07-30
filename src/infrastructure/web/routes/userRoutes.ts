import { Router } from "express";
import { UserController } from "../controllers/UserController";
const router = Router();
const userController = new UserController();

router.get("/:uuid", userController.getUserByUUID);
router.post("/register", userController.createUser);
router.delete("/:uuid", userController.deleteUserByUUID);

export default router;
