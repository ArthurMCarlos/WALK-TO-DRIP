const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 759,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "white",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan4",
    price: 954,
    colors: [
      {
        code: "black",
        img: "./img/jordan.png",
      },
      {
        code: "white",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 399,
    colors: [
      {
        code: "red",
        img: "./img/blazer.png",
      },
      {
        code: "marron",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Yeezy",
    price: 1200,
    colors: [
      {
        code: "black",
        img: "./img/yeezy.png",
      },
      {
        code: "lightgray",
        img: "./img/yeezy2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Triple",
    price: 9707,
    colors: [
      {
        code: "black",
        img: "./img/triple.png",
      },
      {
        code: "white",
        img: "./img/triple2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {

    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
