// javascript object

const newSymb = Symbol("key1");

const mobileModel = {
  brand: "samsung",
  model: "s24 ultra",
  price: 150000,
  processor: "snapdragon Gen 3",
  camera: ["200mp", "12MP", "12MP"],
  hasZoomCamera: true,
  "selfie camera MP": 12,
  [newSymb]: "MyKey1",
  brandModel: function () {
    return `Mobile Brand is ${this.brand} and model is ${this.model}`;
  },
  battery: {
    mah: 5000,
  },
};

console.log(mobileModel.brandModel());

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj2 = {
  d: 1,
  e: 2,
  f: 3,
};
const obj3 = {
  g: 1,
  h: 2,
  i: 3,
};

// const newObj = Object.assign({}, obj1, obj2, obj3);
const newObj = { ...obj1, ...obj2, ...obj3 };
// console.log(newObj);

// console.log(mobileModel.battery.mah);

// function Person

// const likeButton = document.getElementById("likeButton");
// console.log(likeButton);

// const otherButtons = document.getElementsByClassName("btn-primary");
// console.log(otherButtons);

// otherButtons[0].addEventListener('click',function(){
//     console.log('bazar kora sesh');

// })

// const allPrimaryButtons = document.getElementsByClassName('btn-primary')
// console.log(allPrimaryButtons);

// allPrimaryButtons[1].addEventListener('click',function(){
//     console.log('comment clickedd');

// })
// allPrimaryButtons[2].addEventListener('click',function(){
//     console.log('share clicked');

// })

// const allImages = document.getElementsByTagName('img')
//     console.log(allImages);

// const likeButton = document.querySelector("#likeButton");
// console.log(likeButton);

// const likeButton2 = document.querySelectorAll(".btn-primary");
// console.log(likeButton2[2]);

const heroSection = document.querySelector(".hero-section");

const heroSectionButton = heroSection.querySelector("button");

const getH1 = heroSection.querySelector("h1");

// console.log(heroSectionButton);
// console.log(getH1);

// // styling dom modify section
// // bad practice
// heroSectionButton.style.backgroundColor ='red';
// heroSectionButton.style.color = 'black';
// heroSection.style.backgroundColor = 'brown'

// good practice

// heroSectionButton.classList.add("bg-red-600");
// heroSectionButton.classList.add("text-gray");
// heroSection.classList.add("bg-cyan-600")

// ......................

// get attribute / set attribute

// const aquriumImg = document.getElementById("aqurium-img");

// console.log(aquriumImg.getAttribute("src"));

// aquriumImg.setAttribute("src", "./images/onno-image.jpg");

// event listener

// const likeButton = document.getElementById("likeButton");
// likeButton.addEventListener("click", function () {
//        console.log('like disabld');
//   likeButton.setAttribute("disabled", true);
// });

// function makeButtonDisabled() {
//   const likeButton = document.getElementById("like-Button");
//   console.log("like disabled");
//   likeButton.setAttribute("disabled", true);
// }

// create element
// const likeButton = document.getElementById("like-button");
// likeButton.addEventListener("click", function () {
//   const likeNumberSpanTag = document.getElementById("like-number");
//   const likeNumberStr = likeNumberSpanTag.innerText;

//   let likeNumber = parseInt(likeNumberStr);
//   likeNumber++;
//   likeNumberSpanTag.innerText = likeNumber;
// });
// // ...............
// const commentInputBOx = document.getElementById("comment-input");
// const commentButton = document.getElementById("comment-button");

// commentButton.addEventListener("click", function () {
//   const userInput = commentInputBOx.value;
//   console.log(userInput);
//   // create element
//   const newComment = document.createElement("p");
//   newComment.innerText = userInput;

//   newComment.addEventListener("click", function () {
//     newComment.remove();
//   });
//   // getting container
//   const commentHistoryContainer = document.getElementById("comment-history");
//   commentHistoryContainer.appendChild(newComment);
//   commentInputBOx.value = "";
// });
