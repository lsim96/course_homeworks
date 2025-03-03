import fs from "fs";

export const addUser = (user) => {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  const parsedUsers = JSON.parse(existingUsers);
  const newUserId = parsedUsers.length + 1;
  const newUser = {
    id: newUserId,
    name: user.name,
    username: user.username,
    email: user.email,
  };
  parsedUsers.push(newUser);

  fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);

  fs.appendFileSync(
    "logs.txt",
    `\nFormat: [${new Date().toISOString()}] Action performed: USER_ADDED (${
      user.name
    })`
  );
};

export const editUser = (id, data) => {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  const parsedUsers = JSON.parse(existingUsers);
  const user = parsedUsers.find((user) => user.id === id);
  user.name = data.name;
  user.username = data.username;
  user.email = data.email;

  fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);

  fs.appendFileSync(
    "logs.txt",
    `\nFormat: [${new Date().toISOString()}] Action performed: USER_EDITED (${
      data.name
    })`
  );
};

export const deleteUser = (id) => {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  const parsedUsers = JSON.parse(existingUsers);
  // const removedUser = parsedUsers.filter((user) => user.id !== id);

  const { restUsers, removedUser } = parsedUsers.reduce(
    (acc, curr) => {
      if (curr.id !== id) {
        acc.restUsers.push(curr);
      } else {
        acc.removedUser = curr;
      }

      return acc;
    },
    { restUsers: [], removedUser: {} }
  );

  if (!removedUser) {
    console.error("The user with that id does not exist");
    return;
  }

  fs.writeFileSync("users.json", JSON.stringify(restUsers), null, 2);

  fs.appendFileSync(
    "logs.txt",
    `\nFormat: [${new Date().toISOString()}] Action performed: USER_DELETED (${
      removedUser.name
    })`
  );
};

export const deleteAll = () => {
  const existingUsers = fs.readFileSync("users.json", "utf-8");
  const parsedUsers = JSON.parse(existingUsers);
  const userNames = parsedUsers.map((user) => user.name).join("\n");

  fs.appendFileSync(
    "logs.txt",
    `\nFormat: [${new Date().toISOString()}] Action performed: ALL_USERS_DELETED\nUsernames:\n${userNames}`
  );

  parsedUsers.length = 0;
  // parsedUsers.splice(0, parsedUsers.length);
  // Trying different ways ovah here!!

  fs.writeFileSync("users.json", JSON.stringify(parsedUsers), null, 2);

  // fs.writeFileSync("users.json", "", null, 2);
  // Here as well!
};
