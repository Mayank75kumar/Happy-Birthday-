function startCelebration() {
    let name = document.getElementById("nameInput").value;
    if (name.trim() === "") {
        alert("Please enter a name!");
        return;
    }

    document.getElementById("fireText").innerText = `Happy Birthday, ${name}! 🎂`;
    let music = document.getElementById("birthdayMusic");
    music.volume = 0.5;
    music.play();

    launchFireworks();
    releaseBalloons();
}

function openGift() {
    let lid = document.querySelector(".gift-box .lid");
    lid.style.transform = "rotateX(180deg)";
    setTimeout(() => {
        alert("🎉 Surprise! Have a fantastic Birthday!");
    }, 500);
}

function releaseBalloons() {
    let balloonsContainer = document.getElementById("balloons");
    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDuration = `${2 + Math.random() * 3}s`;
        balloonsContainer.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 5000);
    }
}

function launchFireworks() {
    let canvas = document.getElementById("fireworks");
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    function drawFirework(x, y, color) {
        ctx.fillStyle = color;
        for (let i = 0; i < 50; i++) {
            let angle = (Math.PI * 2 * i) / 50;
            let xPos = x + Math.cos(angle) * 50;
            let yPos = y + Math.sin(angle) * 50;
            ctx.beginPath();
            ctx.arc(xPos, yPos, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    setInterval(() => {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        drawFirework(x, y, color);
    }, 500);
}
