function getElementId(id) {
  const idElement = document.getElementById(id);
  return idElement;
}

// heart section
const heartNumber = getElementId("heart-number");
const copyCounter = getElementId("copy-count");
const serviceBox = getElementId("service-box");

let copyCount = parseInt(copyCounter.innerText) || 0;

serviceBox.addEventListener("click", function (e) {
  const heartIcon = e.target.closest(".fa-heart");
  if (heartIcon) {
    let count = parseInt(heartNumber.innerText) || 0;
    heartNumber.innerText = count + 1;
    return;
  }

  // copy section

  const copyBtn = e.target.closest(".copy-number");
  if (copyBtn) {
    const card = copyBtn.closest(".service-card");
    const number = card.querySelector(".service-number").innerText;

    navigator.clipboard.writeText(number).then(() => {
      alert(`নাম্বার কপি হয়েছে ${number}`);
    });
    copyCount++;
    copyCounter.innerText = `${copyCount}`;
  }
});

// call section
let coins = 100;
const coinCount = getElementId("coin");
const cartBtns = document.getElementsByClassName("call-btn");

for (let cartButton of cartBtns) {
  cartButton.addEventListener("click", function () {
    const serviceTitle = cartButton.parentNode.parentNode.children[1].innerText;
    const callNumbers =
      cartButton.parentNode.parentNode.children[3].children[0].innerText;
    if (coins >= 20) {
      coins -= 20;
      coinCount.innerText = coins;
      alert(`📞 calling ${serviceTitle} ${callNumbers} ...`);
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      const historyContainer = getElementId("call-history");
      const addHistory = document.createElement("div");
      addHistory.innerHTML = ` <div
            class="m-3 rounded-xl bg-[#fafafa] flex justify-between mt-6 items-center"
          >
            <div class="">
              <h1 class="font-semibold px-5 pt-3 text-xl">
               ${serviceTitle}
              </h1>
              <p
                class="font-semibold pl-[19px] pb-5 text-xl pt-1 text-[#5c5c5c]"
              >
                ${callNumbers}
              </p>
            </div>
            <div ">
              <p class=" font-semibold mr-[19px]">${timeString}</p>
            </div>
          </div>
  `;
      historyContainer.append(addHistory);
    } else {
      alert("❌ Not enough coins to make the call");
    }
  });
}
const historyContainer = getElementId("call-history");
const clearButton = getElementId("clear-button");
clearButton.addEventListener("click", function () {
  historyContainer.innerHTML = "";
});

