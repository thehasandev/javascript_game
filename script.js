let allPost = document.querySelector(".allPost");
let playerInput = document.querySelector(".playerInput");
let playerGause = document.querySelector(".playerGause");
let postBtn = document.querySelector(".postBtn");
let no = document.querySelector(".no");
let boxOne = document.querySelector(".boxOne");
let game = document.querySelector(".game");
let chance = document.querySelector(".chance");
let result = document.querySelector(".result");
let checkError = document.querySelector(".error");

let count = 5;

no.innerHTML = "no Game";

//disable btn Start
playerInput.addEventListener("input", updateValue);
function updateValue() {
  if (playerInput.value != "" && playerGause.value != "") {
    postBtn.classList.remove("disabled");
  }
}

playerGause.addEventListener("input", updateValue);
function updateValue() {
  if (playerInput.value != "" && playerGause.value != "" && (playerGause.value - 999.9)) {
    postBtn.classList.remove("disabled");
  }
}
//disable btn End

// Post btn start
postBtn.addEventListener("click", () => {
  allPost.innerHTML = "";
  arry.push({
    playerName: playerInput.value,
    gauseNumber: playerGause.value,
  });
  display();
  playerInput.value = "";
  playerGause.value = "";
  postBtn.classList.add("disabled");
  if (arry.length > 0) {
    no.innerHTML = "";
  } else {
    no.innerHTML = "No Game";
    result.innerHTML = "";
  }
});
// Post btn end

let arry = [];

//display funtion Start
function display() {
  arry.map((item) => {
    allPost.innerHTML += `<div class="card" style="width: 18rem ; margin-right: 15px;">
        <div class="card-body">
        <h5 class="card-title">${item.playerName}</h5>
        <p class="card-text">
        ${item.gauseNumber}
        </p>
        <button class="btn btn-primary start">Start</button>
        <button class="btn btn-danger deleteBtn">Delete</button>
        </div>
        </div>`;
  });
  //Delete btn start
  let deleteBtn = document.querySelectorAll(".deleteBtn");
  let deletArray = Array.from(deleteBtn);
  deletArray.map((item, index) => {
    item.addEventListener("click", () => {
      allPost.innerHTML = "";
      arry.splice(index, 1);
      display();
      if (arry.length > 0) {
        no.innerHTML = "";
      } else {
        no.innerHTML = "No Game";
        result.innerHTML = "";
      }
    });
  });
  //Delete btn end

  //Start btn start
  let start = document.querySelectorAll(".start");
  let startArray = Array.from(start);
  startArray.map((item, index) => {
    item.addEventListener("click", () => {
      updateIndex = index;
      boxOne.style.display = "none";
      game.style.display = "inline-block";
      game.style.marginLeft = "400px";
      game.style.marginTop = "40px";
      chance.innerHTML = `Chance : ${count}`;
      item.classList.add("disabled");
      result.innerHTML = "";
    });
  });
  //Start btn end
}
//display funtion End

let checkBtn = document.querySelector(".checkBtn");
let checkInput = document.querySelector(".checkInput");

let updateIndex;
checkBtn.addEventListener("click", () => {
 
  if (!checkInput.value) {
    checkError.innerHTML = "Please enter something";
  } else if (!(checkInput.value - 999.99)) {
    checkError.innerHTML = "Please enter number";
  } else {
    if (count > 1) {
      count--;
      chance.innerHTML = `Chance : ${count}`;
      if (checkInput.value == arry[updateIndex].gauseNumber) {
        result.innerHTML = arry[updateIndex].playerName + " is win";
        checkInput.value = ""
        game.style.display = "none";
        boxOne.style.display = "inline-block";
        game.style.marginLeft = "400px";
        count = 5;
      }
    } else {
      count = 0;
      result.innerHTML = arry[updateIndex].playerName + " is loss";
      checkInput.value = ""
      game.style.display = "none";
      boxOne.style.display = "inline-block";
      game.style.marginLeft = "400px";
      count = 5;
    }
    checkError.innerHTML = "";
  }
  
});
