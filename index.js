let userName = [];
let emails = [];
let name = [];

let users = [];
const fetchUser = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/");
  let userData = await response.json();
  console.log(userData);
  name = userData.map((name) => name.name);
  console.log(name);
  users.push(name);
  emails = userData.map((email) => email.email);
  users.push(emails);
  console.log(emails);
  userName = userData.map((username) => username.username);
  console.log(userName);
  users.push(userName);
  console.log(users);
};

const searchUser = (query) => {
  const userValue = query.target.value;
};

const findName = () => {
  let userInput = document.querySelector("input[type=search]").value;
  let row = document.querySelector(".list-group");
  row.innerHTML = "";
  const result = name.filter((name) => name.includes(userInput));
  result.forEach((elem) => {
    row.innerHTML += `<li class="list-group-item">${elem}</li>`;
  });
};

const findUserName = () => {
  let userInput = document.querySelector("input[type=search]").value;
  let row = document.querySelector(".list-group");
  row.innerHTML = "";
  const result = userName.filter((username) => username.includes(userInput));
  result.forEach((elem) => {
    row.innerHTML += `<li class="list-group-item">${elem}</li>`;
  });
};

const findEmail = () => {
  let userInput = document.querySelector("input[type=search]").value;
  let row = document.querySelector(".list-group");
  row.innerHTML = "";
  const result = emails.filter((email) => email.includes(userInput));
  result.forEach((elem) => {
    row.innerHTML += `<li class="list-group-item">${elem}</li>`;
  });
};

window.onload = () => {
  fetchUser();

  document.getElementById("nameId").onclick = () => findName();
  document.getElementById("usernameId").onclick = () => findUserName();
  document.getElementById("emailId").onclick = () => findEmail();
};
