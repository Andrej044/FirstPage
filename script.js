const htmlElem = document.querySelector("#typeMachine");

const arr = ["Web Developer", "Web Designer", "Coder", "Bloger"];
const listOfClass = ["red", "green", "orangered"];

let count = 0;
let chr = "";

const type = (text) => {
  let intervalId = setInterval(() => {
    chr = chr + text[count];
    if (count >= text.length) {
      count = 0;
      chr = "";
      clearInterval(intervalId);
      return;
    }
    htmlElem.innerHTML = chr + "...";
    count++;
  }, 100);
};

let index = 0;
let intervalId2 = setInterval(() => {
  htmlElem.classList.remove(htmlElem.classList[0]);
  let randomClass = Math.floor(Math.random() * listOfClass.length);

  if (htmlElem.classList.length == 0) {
    htmlElem.classList.add(listOfClass[randomClass]);
  }
  if (index == arr.length) {
    index = 0;
    return;
  }
  type(arr[index]);
  index++;
}, 5000);

//   Canvas work begin

function init() {
  const canvas = document.getElementById("stage");
  const ctx = canvas.getContext("2d");
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  const image = new Image();
  image.src = "img/hacker1.png";
  const imgWidth = 561 / 2;
  const imgHeight = 766;
  const imgSlice = 2;

  image.addEventListener("load", draw);

  let speed = 0;
  function draw() {
    speed += 0.09;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for (let i = 0; i < imgWidth; i++)
      ctx.drawImage(
        image,
        i * imgSlice,
        Math.sin(speed - (i / 25) * 10),
        imgSlice,
        imgHeight,

        i * imgSlice,
        0,
        imgSlice,
        imgHeight
      );
    requestAnimationFrame(draw);
  }

  // // first options to draw image
  // // image.addEventListener(
  // //   "load",
  // //   function () {
  // //     ctx.drawImage(image, 0, 0, canvas.width * 0.8, canvas.height);
  // //     image.style.display = "none";
  // //     console.log("działą");
  // //   },
  // //   false
  // // );

  // //second option to draw image

  // let data = [];
  // image.onload = function () {
  //   ctx.drawImage(image, 0, 0, canvas.width * 0.6, canvas.height);
  //   const pixels = ctx.getImageData(0, 0, canvas.width * 0.6, canvas.height);
  //   data = pixels.data;
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   const particleArray = [];
  //   const particleArrayClone = [];

  //   // определяем координаты частиц и устанавливаем цвет из ImageData.data

  //   for (let y = 0, y2 = pixels.height; y < y2; y++) {
  //     for (let x = 0, x2 = pixels.width; x < x2; x++) {
  //       if (pixels.data[y * 4 * pixels.width + x * 4 + 3] > 128) {
  //         let rgba =
  //           "rgba(" +
  //           pixels.data[y * 4 * pixels.width + x * 4] +
  //           ", " +
  //           pixels.data[y * 4 * pixels.width + x * 4 + 1] +
  //           ", " +
  //           pixels.data[y * 4 * pixels.width + x * 4 + 2] +
  //           ", " +
  //           pixels.data[y * 4 * pixels.width + x * 4 + 3] / 255 +
  //           ")";

  //         particleArray.push(new Particle(x, y, 1, rgba));
  //         // particleArrayClone.push(new Particle(x, y, 1, rgba));
  //       }
  //     }
  //   }
  //   const randomizeDraw = (arr = []) => {
  //     // console.log(particleArray[0]);
  //     let randomize = Math.floor(Math.random() * arr.length);
  //     // particleArray[randomize].draw();
  //     // // console.log(particleArray.length);
  //     // particleArray.splice(randomize, 1);
  //     // let timerId = setTimeout(randomizeDraw, 0.5);

  //     // if (particleArray.length == 0) {
  //     //   clearTimeout(timerId);
  //     //   console.log("end");
  //     //   return true;
  //     // }
  //     return randomize;
  //   };

  //   const separateArr = (arr = []) => {
  //     let arr1 = arr.splice(arr.length / 2);
  //     arr = arr;
  //     return [arr, arr1];
  //   };

  //   let newArr = separateArr(particleArray);

  //   const draw = () => {
  //     for (let arr of newArr) {
  //       let index = randomizeDraw(arr);
  //       arr[index].draw();
  //       break;
  //     }
  //     requestAnimationFrame(draw, 0.02);
  //   };

  //   function animate() {
  //     // ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     // console.log(separateArr(particleArray));
  //     draw();
  //   }
  //   animate();
  // };

  // // change resolution of image
  // window.addEventListener("resize", () => {
  //   canvas.width = board.clientWidth;
  //   canvas.height = board.clientHeight;
  //   // ctx.drawImage(image, 0, 0, canvas.width * 0.8, canvas.height);
  // });

  // const div = document.querySelector(".color");

  // //  color Picker based on mousemove
  // //   function pick(event) {
  // //   let x = event.layerX;
  // //   let y = event.layerY;
  // //   const pixel = ctx.getImageData(x, y, 1, 1);
  // //   const data = pixel.data;
  // //   let rgba =
  // //     "rgba(" +
  // //     data[0] +
  // //     "," +
  // //     data[1] +
  // //     "," +
  // //      data[2] +
  // //     "," +
  // //     data[3] / 255 +
  // //     ")";
  // //   div.style.background = rgba;
  // //   div.textContent = rgba;
  // // }
  // // canvas.addEventListener("mousemove", pick);

  // const mouse = {
  //   mouse_x: null,
  //   mouse_y: null,
  //   mouse_radius: 10,
  // };

  // class Particle {
  //   constructor(x, y, radius, color) {
  //     let randomPositionX = Math.floor(Math.random() * canvas.width);
  //     let randomPositionY = Math.floor(Math.random() * canvas.height);
  //     this.endPointX = x;
  //     this.endPointY = y;
  //     this.y = randomPositionY;
  //     this.x = randomPositionX;
  //     this.y = y;
  //     this.x = x;
  //     this.baseX = this.x;
  //     this.baseY = this.y;
  //     this.density = Math.random() * 30 + 50;
  //     // this.size = size;
  //     this.radius = radius;
  //     this.color = color;
  //   }

  //   draw() {
  //     ctx.fillStyle = this.color;
  //     ctx.beginPath();
  //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  //     ctx.fill();
  //     ctx.closePath();
  //   }
  // }

  // функция рисования
  // canvas.addEventListener("mousemove", (e) => {
  //   mouse.mouse_x = e.layerX;
  //   mouse.mouse_y = e.layerY;
  //   particleArray.push(new Particle(mouse.mouse_x, mouse.mouse_y, 5, "red"));
  // });

  // function animate() {
  //   for (let i = 0; i < particleArray.length; i++) {
  //     particleArray[i].draw();
  //   }
  //   requestAnimationFrame(animate);
  // }
  // animate();

  // for (let i = 0; i < 100; i++) {
  //   particleArray.push(
  //     new Particle(mouse.mouse_y, mouse.mouse_x, mouse.mouse_radius, "red")
  //   );
  // }
}
init();
