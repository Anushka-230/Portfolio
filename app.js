let resumebtn=document.querySelector(".resumebtn");

resumebtn.addEventListener("click",()=>{
    const link = document.createElement('a');
    link.href = './assets/Anushka_Das_Resume.pdf'; 
    link.download = 'Anushka_Das_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

let togglebtn=document.getElementById('toggle-btn');
let isDark = false;
togglebtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    isDark = !isDark;
    togglebtn.innerText = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});


let portfolio_card=document.getElementById("portfolio");
portfolio_card.addEventListener("click",()=>{
    window.open("https://anushka-230.github.io/Portfolio/","_blank");
})
let simon_card=document.getElementById("simongame");
simon_card.addEventListener("click",()=>{
    window.open("https://anushka-230.github.io/SimonSaysGame/","_blank");
})

