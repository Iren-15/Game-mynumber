const inputBox = document.querySelector("#guess");
const btn = document.querySelector("#btn");
const numberAnswer = Math.floor(Math.random()*21);

const par = document.querySelector(".par");
const text = "Давай поиграем!";
const speed = 100;
let i = 0;

function letter() {
    if (i < text.length) {
        document.querySelector(".par").textContent += text.charAt(i)
        i++
        setTimeout(letter, speed);
    }
}

letter();

inputBox.focus();
btn.addEventListener("click", play);

inputBox.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) 
        play();
})

function play() {
    const numberUser = document.querySelector("#guess").value;
    if (numberUser < 1 || numberUser > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Ой...',
            text: 'Введи число от 1 до 20!',
            margin: 500,
        })
    }
    else if (isNaN(numberUser)) {
        Swal.fire({
            icon: 'error',
            title: 'Ой...',
            text: 'Нужно ввести число!',
        })
    }
    else {
        if (numberUser > numberAnswer) {
            Swal.fire('Попробуй число пониже!', 'Компьютер пока побеждает!')
        }
        else if (numberUser < numberAnswer) {
            Swal.fire('Попробуй число повыше!', 'Компьютер пока побеждает!')
        }
        else {
            Swal.fire({
                title: 'ПОБЕДА!!!',
                imageUrl: 'https://images.unsplash.com/photo-1436853023412-b2549836e196?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHZpY3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'image',
            })
        }
    }
} 

//======

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
