const icon = document.getElementById("icon");
const closeIcon = document.getElementById("close-icon");

window.onload = () => {
  if (navigator.onLine) {
    document.querySelector(".box__text span").innerHTML = "You're Online Now";
    document.querySelector(".box__text p").innerHTML = "Internet Is Connected";
    document.querySelector(".box").classList.remove("offline");
  } else {
    document.querySelector(".box__text span").innerHTML = "You're Offline Now";
    document.querySelector(".box__text p").innerHTML =
      "Internet Is Disconnected";
    document.querySelector(".box").classList.add("offline");
    icon.classList.add("bx-wifi-off");
  }

  setTimeout(() => {
    document.querySelector(".box").classList.add("hide");
  }, 5000);
};

closeIcon.addEventListener("click", () => {
  document.querySelector(".box").classList.add("hide");
});
