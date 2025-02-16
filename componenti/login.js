let myToken = "";

fetch("conf.json")
  .then((r) => r.json())
  .then((conf) => {
    myToken = conf.cacheToken;
  });

export const createLogin = () => {
  const inputName = document.querySelector("#name");
  const inputPassword = document.querySelector("#password");
  const loginButton = document.querySelector("#login");
  const logindiv = document.querySelector("#divlogin");
  const divPrivate = document.querySelector("#private");

  let isLogged = sessionStorage.getItem("Logged") || false;

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      fetch("http://ws.cipiaceinfo.it/credential/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          key: myToken,
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((r) => r.json())
        .then((r) => {
          resolve(r.result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  loginButton.onclick = () => {
    login(inputName.value, inputPassword.value)
      .then((result) => {
        if (result) {
          isLogged = true;
          sessionStorage.setItem("Logged", true);

          // Nasconde il form di login e mostra la parte privata
          logindiv.classList.add("hidden");
          logindiv.classList.remove("visible");

          divPrivate.classList.add("visible");
          divPrivate.classList.remove("hidden");
        }
      })
      .catch((error) => {
        console.error("Errore durante il login:", error);
      });
  };

  return {
    isLogged: () => isLogged,
  };
};
