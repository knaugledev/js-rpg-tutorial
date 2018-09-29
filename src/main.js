document.body.style.margin = "0px";
document.body.style.overflow = "hidden";
let canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

let ctx = canvas.getContext("2d");

window.requestAnimationFrame(loop);

let ball = {
    position: {
        x: 100,
        y: 100
    },
    velocity: {
        x: 500,
        y: 500
    }
};

let lastTime = new Date().getTime();
function loop() {
    let time = new Date().getTime();
    let dt = (time - lastTime) / 1000;

    ball.position.x += ball.velocity.x * dt;
    ball.position.y += ball.velocity.y * dt;

    if (ball.position.x < 50)
        ball.velocity.x *= -1;
    if (ball.position.x > canvas.width - 50)
        ball.velocity.x *= -1;
    if (ball.position.y < 50)
        ball.velocity.y *= -1;
    if (ball.position.y > canvas.height - 50)
        ball.velocity.y *= -1;

    ctx.fillStyle = "#303030";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff1111";
    ctx.beginPath();
    ctx.arc(ball.position.x, ball.position.y, 50, 0, 2 * Math.PI);
    ctx.fill();

    lastTime = time;
    window.requestAnimationFrame(loop);
}