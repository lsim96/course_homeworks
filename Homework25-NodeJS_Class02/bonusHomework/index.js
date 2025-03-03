import { addUser, editUser, deleteUser, deleteAll } from "./usersService.js";

const newUser = {
  name: "Bob Bobbsky",
  username: "bobbobsky",
  email: "bob@email.com",
};

const updatedUser = {
  name: "Leon Simonoski",
  username: "leonsim",
  email: "leonsimonoski@gmail.com",
};

addUser(newUser);

editUser(2, updatedUser);

deleteUser(9);

deleteAll();
