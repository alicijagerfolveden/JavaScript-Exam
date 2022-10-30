import { displayUsers } from "./displayUsers.js";

const ENDPOINT = "https://api.github.com/users";

const getUsers = async () => {
  const response = await fetch(ENDPOINT);

  const users = await response.json();

  displayUsers(users);
};

export { getUsers };
