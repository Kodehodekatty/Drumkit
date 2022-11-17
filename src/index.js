const theButton = document.getElementById("theBtn");
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const appDiv = document.getElementById("app");
const sounds = [
  "clap.wav",
  "hihat.wav",
  "kick.wav",
  "openhat.wav",
  "ride.wav",
  "snare.wav",
  "tink.wav",
  "tom.wav"
];

const keyBindings = {
  q: sounds[0],
  w: sounds[1],
  e: sounds[2],
  r: sounds[3],
  t: sounds[4],
  y: sounds[5],
  u: sounds[6],
  i: sounds[7]
};

theButton.textContent = "the button";

theButton.addEventListener("click", function () {
  audio.play();
});

const btnDif = document.createElement("button");
btnDif.classList.add("audioButton");
btnDif.textContent = "Other button";

appDiv.append(btnDif);

btnDif.addEventListener("click", function () {
  btnDif.style.backgroundColor = "green";
  btnDif.style.animationName = "spin";
  const selectSound = "./sounds/" + sounds[0];
  let selectedAudio = new Audio(selectSound);
  selectedAudio.play();
  selectedAudio.onended = (event) => {
    btnDif.style.backgroundColor = "red";
    btnDif.style.animationName = "";
  };
});

window.onkeydown = function (event) {
  if (keyBindings[event.key]) {
    const selectSound = "./sounds/" + keyBindings[event.key];
    let selectedAudio = new Audio(selectSound);
    selectedAudio.play();
  }
};
