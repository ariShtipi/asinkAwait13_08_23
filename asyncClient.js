const buttonGetRandomUser = document.createElement("button");
buttonGetRandomUser.innerText = "Get random user";
document.body.appendChild(buttonGetRandomUser);

buttonGetRandomUser.addEventListener("click", () => {
  getRandomUser();
});

const buttonGet5Users = document.createElement("button");
buttonGet5Users.innerText = "Get random user";
document.body.appendChild(buttonGet5Users);

buttonGet5Users.addEventListener("click", () => {
  get5User();
});

async function getRandomUser() {
  try {
    const textUser = document.createElement("p");
    textUser.innerText = document.body.appendChild(textUser);
    const imgUser = document.createElement("img");
    imgUser.innerText = document.body.appendChild(imgUser);

    const response = await fetch("https://randomuser.me/api");
    if (response.ok) {
      const data = await response.json();
      textUser.innerText =
        data.results[0].name.first +
        "  " +
        data.results[0].name.last +
        "  " +
        data.results[0].email +
        "  " +
        data.results[0].registered.age;

      imgUser.src = data.results[0].picture.thumbnail;
    } else {
      throw new Error("error");
    }
  } catch (error) {
    console.error(error);
  }
}

async function get5User() {
  try {
    const response = await fetch(
      "https://randomuser.me/api/?gender=male&results=5"
    );
    if (!response.ok) {
      throw new Error("error");
    }
    const data = await response.json();
    console.log(data.results);
  } catch (error) {
    console.error("error:", error.message);
  }
}
