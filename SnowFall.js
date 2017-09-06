var snowFlake = [];
var maxFlake = 200;
var maxWidth = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
var maxHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);

window.onresize = function() {
    maxWidth = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
    maxHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);

    canvas.width = maxWidth;
    canvas.height = maxHeight;
    moveSnow();

}

function addSnow() {
    canvas = document.getElementById("winterpeg-canvas");
    canvas.width = maxWidth;
    canvas.height = maxHeight;
    context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (var x = 0; x < maxFlake; x++) {
        snowFlake.push({
            r: Math.floor(Math.random() * 10),
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            d: Math.floor(Math.random() * 10)
        });

        drawText();
    }
}

function drawText() {
    context.fillStyle = "white";
    context.font = "80px SnowFont";
    context.textAlign = 'center';
    context.fillText("Winterpeg Weather", canvas.width / 2, 150);
}


function drawSnow(r, x, y) {
    context.fillStyle = "white";
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);
    context.fill();
}

function moveSnow() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (var x = 0; x < snowFlake.length; x++) {
        drawSnow(snowFlake[x].r, snowFlake[x].x, snowFlake[x].y);

        if (snowFlake[x].d > 5) {
            snowFlake[x].x += 1;
        }
        else {
            snowFlake[x].x -= 1;
        }

        snowFlake[x].y += 1;

        if (snowFlake[x].y > canvas.height + 10) {
            snowFlake[x].y = Math.floor(Math.random() * 10);
            snowFlake[x].x = Math.floor(Math.random() * canvas.width);
            snowFlake[x].r = Math.floor(Math.random() * 10);
            snowFlake[x].d = Math.floor(Math.random() * 10);
        }
    }
    drawText();

}