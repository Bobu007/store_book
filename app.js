function show() {
  let show = document.querySelector(".hide");
  show.style.display = "block";
}
function hide() {
  let hide = document.querySelector(".hide");
  hide.style.display = "none";
}

let all_btn = document.getElementById("all_btn");
let design_btn = document.getElementById("design_btn");
let framer_btn = document.getElementById("framer_btn");
let uiux_btn = document.getElementById("uiux_btn");
let social_btn = document.getElementById("social_btn");

let social_cards = document.getElementsByClassName("social");
let design_cards = document.getElementsByClassName("design");
let framer_cards = document.getElementsByClassName("framer");
let uiux_cards = document.getElementsByClassName("uiux");

all_btn.onclick = function () {
  for (let framer_card of framer_cards) {
    framer_card.style.display = "block";
  }
  for (let uiux_card of uiux_cards) {
    uiux_card.style.display = "block";
  }
  for (let social_card of social_cards) {
    social_card.style.display = "block";
  }
  for (let design_card of design_cards) {
    design_card.style.display = "block";
  }
};
design_btn.onclick = function () {
  for (let design_card of design_cards) {
    design_card.style.display = "block";
  }
  for (let framer_card of framer_cards) {
    framer_card.style.display = "none";
  }
  for (let uiux_card of uiux_cards) {
    uiux_card.style.display = "none";
  }
  for (let social_card of social_cards) {
    social_card.style.display = "none";
  }
};
framer_btn.onclick = function () {
  for (let framer_card of framer_cards) {
    framer_card.style.display = "block";
  }
  for (let design_card of design_cards) {
    design_card.style.display = "none";
  }
  for (let uiux_card of uiux_cards) {
    uiux_card.style.display = "none";
  }
  for (let social_card of social_cards) {
    social_card.style.display = "none";
  }
};
uiux_btn.onclick = function () {
  for (let uiux_card of uiux_cards) {
    uiux_card.style.display = "block";
  }
  for (let design_card of design_cards) {
    design_card.style.display = "none";
  }
  for (let framer_card of framer_cards) {
    framer_card.style.display = "none";
  }
  for (let social_card of social_cards) {
    social_card.style.display = "none";
  }
};
social_btn.onclick = function () {
  for (let social_card of social_cards) {
    social_card.style.display = "block";
  }
  for (let framer_card of framer_cards) {
    framer_card.style.display = "none";
  }
  for (let uiux_card of uiux_cards) {
    uiux_card.style.display = "none";
  }
  for (let design_card of design_cards) {
    design_card.style.display = "none";
  }
};
