 import express from "express"
import { deleteUser, getUserById, updateUser } from "../controlars/user.control.js";
import { protect } from "../auth/verifyToken.js";

 const router = express.Router()

 router.put("/:id", protect, updateUser);
router.delete("/:id", protect, deleteUser);

router.get('/:id', getUserById);

 export default router