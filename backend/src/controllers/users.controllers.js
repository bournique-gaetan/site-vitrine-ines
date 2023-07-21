/* eslint-disable camelcase */
const {
  getAllUsers,
  registerUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserByFullName,
  getUserByMail,
  addUser,
} = require("../models/users.models");

const GetUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).message("no users found");
    }
  } catch (error) {
    res.status(500).send("All Users not found");
  }
};

// Obtenir un utilisateur par son ID;
const GetUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send({ message: "no user found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir un utilisateur par son Email;
const GetUserByMail = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await getUserByMail(email);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send({ message: "no user found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Rechercher un utilisateur par son nom_complet
const GetUserByFullName = async (req, res) => {
  try {
    const { name } = req.params;
    const user = await getUserByFullName(name);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send({ message: "no user found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Créer un utilisateur
const RegisterUser = async (req, res) => {
  try {
    console.log("body:", req.body);
    const create = await registerUser(req.body);
    res.status(201).json({ create });
  } catch (error) {
    console.log("ici controllers");
    res.status(500).json({ error: error.message });
  }
};

// Créer un user by Admin
const AddUser = async (req, res) => {
  try {
    const create = await addUser(req.body);
    res.status(201).json({ create });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update un utilisateur
const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await updateUser(req.body, id);
    if (response) {
      res.status(200).send({ message: "user updated" });
    } else {
      res.status(404).send({ message: "user not updated" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un utilisateur
const DeleteUser = async (req, res) => {
  try {
    const UserId = req.params.id;
    await deleteUser(UserId);
    res.json({ message: "User DELETE on Success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  GetUsers,
  GetUserById,
  GetUserByMail,
  GetUserByFullName,
  RegisterUser,
  AddUser,
  UpdateUser,
  DeleteUser,
};
