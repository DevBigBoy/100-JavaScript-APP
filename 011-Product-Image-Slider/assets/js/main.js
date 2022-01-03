const images = document.querySelectorAll(".img__select a");
const imgBtns = [...images];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img__showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img__showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

// ==================== product__quantity ======================

const btns = document.querySelectorAll(".btn");
const value = document.getElementById("counter");
let count = 0;

btns.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(e.currentTarget);

    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count <= 0 ? (count = 0) : count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    value.innerText = count;
  });
});
