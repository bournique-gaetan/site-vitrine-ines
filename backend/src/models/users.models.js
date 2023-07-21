/* eslint-disable camelcase */
const connection = require("../services/db");

const getAllUsers = async () => {
  try {
    // Exécuter la requête SQL en utilisant la connexion à la base de données
    const [response] = await connection.promise().query("SELECT * FROM users");
    return response;
  } catch (error) {
    throw new Error("Failed to get all users");
  }
};

const getUserByMail = async (email) => {
  try {
    const [response] = await connection
      .promise()
      .query("SELECT * FROM users WHERE email = ?", email);
    return response;
  } catch (error) {
    throw new Error("Failed to get all users");
  }
};

const getUserByfullname = async (fullname) => {
  try {
    const [response] = await connection
      .promise()
      .query("SELECT * FROM users WHERE fullname = ?", fullname);
    return response;
  } catch (error) {
    throw new Error("Failed to get user by full fullname");
  }
};

const getUserById = async (id) => {
  try {
    const [result] = await connection
      .promise()
      .query("SELECT * FROM users WHERE id = ?", [id]);
    return result;
  } catch (error) {
    throw new Error("Failed to get user by ID");
  }
};

const registerUser = async (user) => {
  const { fullname, email, phone, message } = user;
  try {
    const result = await connection
      .promise()
      .query(
        "INSERT INTO users (fullname, email, phone, message) VALUES(?, ?, ?, ?)",
        [fullname, email, phone, message]
      );
    if (result.affectedRows === 1) {
      console.info(result);
      return result.insertId;
    }
    return user;
  } catch (error) {
    console.log("ici models");
    throw new Error("Failed to create user");
  }
};

const addUser = async (user) => {
  const { fullname, email, phone_number } = user;
  try {
    const result = await connection
      .promise()
      .query(
        "INSERT INTO users (fullname, email, phone_number, message) VALUES(?, ?, ?, ?)",
        [fullname, email, phone_number]
      );
    if (result.affectedRows === 1) {
      console.info(result);
      return result.insertId;
    }
    return user;
  } catch (error) {
    throw new Error("Failed to create user");
  }
};

const updateUser = async (user, id) => {
  const { fullname, email, phone_number } = user;
  try {
    const sql = "UPDATE users SET fullname = ?, email = ?, phone_number = ?";

    const response = await connection
      .promise()
      .query(sql, [fullname, email, phone_number, id]);

    if (response[0].affectedRows === 1) {
      return fullname;
    }
    return [id];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update user");
  }
};

const deleteUser = async (id) => {
  try {
    const [response] = await connection
      .promise()
      .query("DELETE FROM users WHERE id = ?", id);
    if (response.affectedRows === 1) {
      return true;
    }
    return false;
  } catch (error) {
    throw new Error("Failed to delete user");
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByMail,
  getUserByfullname,
  registerUser,
  addUser,
  updateUser,
  deleteUser,
};
