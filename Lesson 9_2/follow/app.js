let div = document.querySelector("div");

const followTheMouse = (e) => {
  div.style.left = (e.pageX - 25) + "px";
  div.style.top = (e.pageY - 25) + "px";
};

document.addEventListener("mousemove", followTheMouse);
