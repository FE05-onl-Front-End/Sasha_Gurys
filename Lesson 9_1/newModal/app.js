let data = [
  {
    firstName: "Ashton",
    lastName: "Kutcher",
    age: 40,
  },
  {
    firstName: "Bradley",
    lastName: "Pitt",
    age: 54,
  },
  {
    firstName: "Hannah",
    lastName: "Dakota",
    age: 24,
  },
  {
    firstName: "Paul",
    lastName: "Ridley",
    age: 46,
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 13,
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 100,
  },
  {
    firstName: "Pip",
    lastName: "Lip",
    age: 3,
  },
  {
    firstName: "Stuart",
    lastName: "Little",
    age: 5,
  },
  {
    firstName: "Noam",
    lastName: "Chomsky",
    age: 74,
  },
  {
    firstName: "Rick",
    lastName: "Grimes",
    age: 40,
  },
  {
    firstName: "Bob",
    lastName: "Marley",
    age: 100,
  },
  {
    firstName: "Alexios",
    lastName: "Mysthios",
    age: 3,
  },
  {
    firstName: "Big",
    lastName: "Smoke",
    age: 18,
  },
];

let table = document.createElement("table");
document.body.prepend(table);

const removeUser = (e) => {
  e.target.closest("tr").remove();
};

const getAgeTable = (tableEl, dataArr) => {
  dataArr.forEach((user) => {
    let userRow = document.createElement("tr");
    let firstNameFormatted = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1).toLowerCase();
    let lastNameFormatted = user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1).toLowerCase();
    userRow.innerHTML = `<td>${firstNameFormatted}</td><td>${lastNameFormatted}</td><td>${+user.age}</td><td  style="color: black; cursor: pointer">X</td>`;
    userRow.lastChild.onclick = removeUser;
    if (user.age >= 18) {
      userRow.style.color = "green";
    } else {
      userRow.style.color = "red";
    }
    tableEl.append(userRow);
  });
};

getAgeTable(table, data);

const showModal = () =>
  (document.querySelector(".modal").style.display = "block");
const hideModal = () =>
  (document.querySelector(".modal").style.display = "none");
const clearInputs = () =>
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
    input.closest("label").firstElementChild.classList.remove("invalid");
  });
let valid = false;
const validateName = (Event) => {
  if (
    Event.target.value.length > 10 ||
    !/^[a-z]+$/i.test(Event.target.value) ||
    Event.target.value == null
  ) {
    valid = false;
    Event.target.closest("label").firstElementChild.classList.add("invalid");
  } else {
    valid = true;
    Event.target.closest("label").firstElementChild.classList.remove("invalid");
  }
};
const validateAge = (Event) => {
  if (
    Event.target.value > 135 ||
    Event.target.value == "" ||
    !/^[0-9]+$/.test(Event.target.value)
  ) {
    valid = false;
    Event.target.closest("label").firstElementChild.classList.add("invalid");
  } else {
    valid = true;
    Event.target.closest("label").firstElementChild.classList.remove("invalid");
  }
};
const addUser = () => {
  if (valid == true) {
    let userData = new FormData(document.querySelector("form"));
    data.push(Object.fromEntries(userData))
    hideModal();
    clearInputs();
    table.innerHTML = "";
    getAgeTable(table, data);
  }
};

document.querySelector(".add-user").addEventListener("click", showModal);
document.querySelector(".modal").addEventListener("click", (Event) => {
  if (Event.target.classList.contains("modal")) {
    hideModal();
  }
});
document.querySelector(".close").addEventListener("click", hideModal);
document.querySelector(".close").addEventListener("click", clearInputs);
document
  .querySelector(".popap-btn > .close")
  .addEventListener("click", hideModal);
document
  .querySelectorAll("input[type='text'")
  .forEach((el) => el.addEventListener("input", validateName));
document
  .querySelector("input[type='number']")
  .addEventListener("input", validateAge);
document.querySelector(".ok").addEventListener("click", addUser);
