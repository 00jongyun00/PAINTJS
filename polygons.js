const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let x, y;
let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
	// 마우스 움직임 감시
  x = event.offsetX;
  y = event.offsetY;
}

function onMouseDown(event) {
  // 마우스 클릭
  painting = true;
  drawLine(event.offsetX, event.offsetY);
}

function onMouseUp(event) {
  // 마우스 클릭 종료
  stopPainting();
}

function drawLine(selectX, selectY) {
  if (!painting) {
    // 마우스 가 움직이는동안 moveTo 로 점이 계속 가있음
    // painting 이 true 가 되는 순간 moveTo(x, y)
    // 위치에서 lineTo(x, y) 위치로 선을 그음
    console.log("성공");
    ctx.beginPath();
    ctx.moveTo(selectX, selectY);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
