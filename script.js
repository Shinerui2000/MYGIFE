// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letter1 = document.getElementById("letter-container1");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const continueBtn = document.querySelector(".continue-btn");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope



envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter1.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window1").classList.add("open");
    },50);
});


continueBtn.addEventListener("click", () => {
    letter1.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        
        document.querySelector(".letter-window").classList.add("open");
    },100);
})

// Logic to move the NO btn

// noBtn.addEventListener("mouseover", () => {
//     const min = 200;
//     const max = 200;

//     const distance = Math.random() * (max - min) + min;
//     const angle = Math.random() * Math.PI * 2;

//     const moveX = Math.cos(angle) * distance;
//     const moveY = Math.sin(angle) * distance;

//     noBtn.style.transition = "transform 0.3s ease";
//     noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
// });

let scale = 1;

noBtn.addEventListener("click", () => {
    
     scale += 0.2; // increase size each click
     yesBtn.style.transform = `scale(${scale})`;
}
)

yesBtn.addEventListener("click", () => {
    alert("တစ်ကယ်ချစ်ပေးမှာလား သိင်္ဂီ ကိုယ်အရမ်းပျော်သွားပြီ")
})
// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

// yesBtn.addEventListener("click", () => {
//     title.textContent = "Yippeeee!";

//     catImg.src = "cat_dance.gif";

//     document.querySelector(".letter-window").classList.add("final");

//     buttons.style.display = "none";

//     finalText.style.display = "block";
// })