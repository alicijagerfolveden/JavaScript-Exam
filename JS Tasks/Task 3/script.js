/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const showUsersButton = document.querySelector("#btn");

const getUsers = async () => {
  const response = await fetch(ENDPOINT);

  const users = await response.json();

  displayUsers(users);
};

const displayUsers = (users) => {
  const elementForUsers = document.querySelector("#output");

  const messageElement = document.querySelector("#message");

  messageElement.textContent = "";
  messageElement.style.display = "none";

  users.forEach((user) => {
    const elementForUser = document.createElement("div");
    const elementForLogin = document.createElement("p");
    const elementForAvatar = document.createElement("img");

    elementForUser.id = "userBox";

    elementForLogin.textContent = user.login;

    elementForAvatar.src = user.avatar_url;

    elementForAvatar.alt = "User avatar";

    elementForUser.append(elementForLogin, elementForAvatar);

    elementForUsers.append(elementForUser);
  });
};

showUsersButton.addEventListener("click", (event) => {
  event.preventDefault();

  getUsers();
});
