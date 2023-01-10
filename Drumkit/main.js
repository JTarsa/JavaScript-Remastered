"use strict";
// const recordBtns = document.querySelectorAll(".recordBtn");
// const stopBtns = document.querySelectorAll(".stopBtn");
// const playBtns = document.querySelectorAll(".playBtn");
// let playBtnId;
// let recordBtnId;
let isRecording;
const timing = [];
const instruments = [];

const audios = document.querySelectorAll("audio");
const keys = {};
// const timing = [];
// const instruments = [];

for (let i = 0; i < audios.length; i++) {
  audios[i].id = `k${i}`;
  keys[i] = audios[i].id;
}

function keyToSound(e) {
  e.preventDefault();
  const sound = keys[e.key];
  if (Object.keys(keys).includes(e.key)) {
    playSound(sound);
  }
}

function playSound(sound) {
  const audioTag = document.querySelector("#" + sound);
  audioTag.currentTime = 0;
  audioTag.play();
}

function startRecording(e) {
  if (e.key.toLowerCase() === "r") isRecording = true;
  if (Object.keys(keys).includes(e.key) && isRecording === true) {
    timing.push(Date.now());
    instruments.push(e.key);
    console.log(timing);
    console.log(instruments);
  }
}

function stopRecording() {
  isRecording = false;
}
function checkIsRecording(e) {
  if (e.key.toLowerCase() === "r") startRecording();
  if (e.key.toLowerCase() === "s") stopRecording();
}

function playRecord() {
  const timeDiff = [];
  timing.forEach((time) => {
    timeDiff.push(time - timing[0]);
  });
  for (let i = 0; i < instruments.length; i++) {
    setTimeout(() => {
      playSound(`k${instruments[i]}`);
    }, timeDiff[i]);
  }
}

// Evenets handlers
document.addEventListener("keydown", keyToSound);
document.addEventListener("keydown", startRecording);
document.querySelector("#btn").addEventListener("click", playRecord);
