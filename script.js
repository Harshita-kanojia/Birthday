// ===============================
// LOADER
// ===============================

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader").style.display = "none";

    }, 3000);

});

// ===============================
// MUSIC
// ===============================

const music = document.getElementById("music");
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", function () {

    music.play();

    document.querySelector(".about").scrollIntoView({
        behavior: "smooth"
    });

});

// ===============================
// CAKE
// ===============================

const cake = document.getElementById("cake");

cake.addEventListener("click", function () {

    confetti({

        particleCount: 200,
        spread: 180,
        origin: { y: 0.6 }

    });

});

// ===============================
// GIFT
// ===============================

const gift = document.getElementById("giftBox");
const message = document.getElementById("giftMessage");

gift.addEventListener("click", function () {

    gift.innerHTML = "🎉";

    message.style.display = "block";

    confetti({

        particleCount: 300,
        spread: 150

    });

});

// ===============================
// HERO ANIMATION
// ===============================

const hero = document.querySelector(".hero-content");

hero.animate(

    [

        {
            opacity: 0,
            transform: "translateY(60px)"
        },

        {
            opacity: 1,
            transform: "translateY(0px)"
        }

    ],

    {

        duration: 1500

    }

);

// ===============================
// GALLERY ANIMATION
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

cards.forEach(function(card){

    card.style.opacity = "0";
    card.style.transform = "translateY(80px)";
    card.style.transition = ".8s";

    observer.observe(card);

});

// ===============================
// LETTER ANIMATION
// ===============================

const letter = document.querySelector(".letter-box");

const observer2 = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            letter.style.opacity = "1";
            letter.style.transform = "scale(1)";

        }

    });

});

letter.style.opacity = "0";
letter.style.transform = "scale(.8)";
letter.style.transition = "1s";

observer2.observe(letter);

// ===============================
// FLOATING HEARTS
// ===============================

setInterval(function(){

    let heart = document.createElement("div");

    heart.innerHTML = "💙";

    heart.style.position = "fixed";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.bottom = "-50px";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    heart.style.animation = "fly 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },6000);

},700);

// ===============================
// FLOAT HEART STYLE
// ===============================

const style = document.createElement("style");

style.innerHTML = `

@keyframes fly{

0%{

transform:translateY(0);
opacity:1;

}

100%{

transform:translateY(-120vh);
opacity:0;

}

}

`;

document.head.appendChild(style);

// ===============================
// ENDING FIREWORKS
// ===============================

window.addEventListener("scroll",function(){

    const end = document.querySelector(".ending");

    const rect = end.getBoundingClientRect();

    if(rect.top < window.innerHeight-200){

        confetti({

            particleCount:150,
            spread:120,
            origin:{y:0.7}

        });

    }

});
