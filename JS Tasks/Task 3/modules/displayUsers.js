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

export { displayUsers };
