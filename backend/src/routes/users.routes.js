// Depuis le fichier <users.routes.js> dans le dossier "routes" dans le dossier "src" de mon dossier "backend"

const express = require("express");

const router = express.Router();

// Controllers
const {
  GetUsers,
  GetUserById,
  GetUserByFullName,
  UpdateUser,
  DeleteUser,
  RegisterUser,
} = require("../controllers/users.controllers");

// Publics Routes
router.get("/", GetUsers);
router.get("/user/:id", GetUserById);
router.get("/name/:name", GetUserByFullName);
router.put("/update/:id", UpdateUser);
router.delete("/delete/:id", DeleteUser);
router.post("/register", RegisterUser);

module.exports = router;
