const tabs = [];
let nav = document.querySelector(".navi");
let content = document.querySelector(".content");

const doTab = (e) => {
  let currentValue = e.target.closest(".tab").id;
  if (!e.target.classList.contains("close-tab"))
    content.innerText = `${currentValue}`;
  else {
    if ((content.innerText = `${currentValue}`)) {
      content.innerText = "";
    }
    tabs.forEach((item, index) => {
      if (item.value == currentValue) {
      tabs.splice(index, 1);
      }
    })
      renderNav(nav);
    // e.target.closest(".tab").remove();
  }
};

const renderNav = (nav) => {
  nav.innerHTML = "";
  tabs.forEach((tab) => {
    let newTab = document.createElement("div");
    newTab.classList.add("tab");
    newTab.id = `${tab.value}`;
    newTab.innerHTML = `<p>${tab.value}</p><div class="close-tab">X</div>`;
    newTab.onclick = doTab;
    nav.append(newTab);
    if (tabs.length == 1) {
      nav.firstChild.lastChild.remove()
    }
  });
};

const createTab = () => {
  tabs.push({ value: Math.floor(Math.random() * 1000) });
};


createTab();
createTab();
createTab();
createTab();
createTab();
createTab();
createTab();
createTab();
renderNav(nav);
