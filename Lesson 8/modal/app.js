const showModal = () =>  document.querySelector(".modal").style.display = "block";
const hideModal = () => document.querySelector(".modal").style.display = "none";
const clearInputs = () =>  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
    input.closest("label").firstElementChild.classList.remove("invalid");
})
let valid = false;
const validateName = (Event) => {
  if (Event.target.value.length > 10 || !/^[a-z]+$/i.test(Event.target.value) || Event.target.value == null) {
    valid = false;
    Event.target.closest("label").firstElementChild.classList.add("invalid");
  } else {
    valid = true;
    Event.target.closest("label").firstElementChild.classList.remove("invalid");
  }
}
const validateAge = (Event) => {
    if (Event.target.value > 135 || Event.target.value == "" || !/^[0-9]+$/.test(Event.target.value)) {
        valid = false;
        Event.target.closest("label").firstElementChild.classList.add("invalid");
      } else {
        valid = true;
        Event.target.closest("label").firstElementChild.classList.remove("invalid");
      }
}
const addUser = () => {
    if (valid == true) {
        let userData = new FormData(document.querySelector("form"));
        let user = document.createElement("div");
        for (let [key, value] of userData) {
            user.innerText += `${key}: ${value}. `;
        }
        document.body.insertBefore(user, document.querySelector(".add-user"));
        hideModal();
        clearInputs();
    }
}


document.querySelector(".add-user").addEventListener("click", showModal);
document.querySelector(".modal").addEventListener("click", (Event) => {
  if (Event.target.classList.contains("modal")) {
    hideModal();
  }
});
document.querySelector(".close").addEventListener("click", hideModal);
document.querySelector(".close").addEventListener("click", clearInputs);
document.querySelector(".popap-btn > .close").addEventListener("click", hideModal);
document.querySelectorAll("input[type='text'").forEach(el => el.addEventListener("input", validateName));
document.querySelector("input[type='number']").addEventListener("input", validateAge)
document.querySelector(".ok").addEventListener("click", addUser)

