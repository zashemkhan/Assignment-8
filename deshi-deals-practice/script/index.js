
function getElement(id){
    const element = document.getElementById(id);
    return element;
}

document.getElementById("cart-btn-1").addEventListener("click",function(){
      const title = getElement("card-title-1").innerText;
      const price = getElement("card-price-1").innerText;
        console.log(title,price);
    //   total price k doro
     const totalPrice = getElement("total-price").innerText;

    // calculate koro
    let currentTotal =Number(price) +Number(totalPrice); 

    // price update koro
      
    getElement("total-price").innerText = currentTotal.toFixed(2);
      
})


































// console.log(document);

// Event ad  korar system




// 1. যেখানে ক্লিক হবে সেটাকে ধরে নিয়ে আসো । 
// document.getElementById('cart-btn-steel')

// 2. ইভেন্ট এড করো ।
// document.getElementById("cart-btn-steel").addEventListener("click",alertMessage )
// 3. ফানংসশন লেখো।
// function alertMessage(){
    // alert("স্টিলের হাড়ী ক্লিকড");
// }



// 
// document.getElementById('cart-btn-steel').addEventListener('dblclick', function(){
//     console.log("স্টিলের হাড়ী ক্লিকড");
// })



// tagName -->  array of element

// id --> bebobar korle element dibe 

// class --> array of element 
const titles1 = document.getElementsByClassName("card-title");
// console.log(titles1);

// querryselector ..> 1ta element dibe
const titles = document.querySelector(".card-title");
// console.log(titles);


// querrySelectorAll --->node list dibe

// const titles2 = document.querySelectorAll(".card-title");
// console.log(titles2);

// for (let title of titles2){
    
//     title.innerText = "we are PH student";
//     title.innerHTML =`<span>WE are Hero</span>`;
//     title.style.margin = "20px"
//     title.classList.remove("card-title")
    
// }
// const images = document.getElementsByTagName("img");
// console.log(images);
// for (let img of images){
//     img.addEventListener("mouseenter",function(){
//         img.src="https://resizing.flixster.com/2k1VvJdA1_esvu6kJ_8pURsjQ3E=/375x210/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p446158_i_h8_ac.jpg"
//     })
// }
