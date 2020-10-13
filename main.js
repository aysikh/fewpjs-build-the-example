// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById("modal");
modal.classList.add("hidden");

document.addEventListener("DOMContentLoaded", () => {
  // mimicServerCall()
  // .then(success => console.log(success))
  // .catch(failure => console.log(failure)); 
      /* normally you would convert the response to json, but because this is a fake server, we skip that step. 
      .then deals with success and .catch handles failures
      they are both called on fetch 
      you would want to order based on what you think we occur more frequently */
  heartButton()
})


function heartButton(){
  let likeButtons = document.querySelectorAll(".like-glyph");
  likeButtons.forEach((likeButton) => {
    //make server request
    likeButton.addEventListener("click", () => {
      if (likeButton.innerText === EMPTY_HEART){
        mimicServerCall()
          .then(success => successAction(success, likeButton))
          .catch(failure => {
            failureMessage(failure)
          });
      }
      else { //if it is full
        likeButton.innerText = EMPTY_HEART;
        likeButton.classList.remove("activated-heart")
      }
   })
  })
}

function failureMessage(failure){
  modal.classList.remove("hidden");
  modal.innerText = failure; //return the error message
  setTimeout (() => {modal.classList.add("hidden");}, 5000)
}

// we have a group of like buttons and we need to figure out which one this action will go towards. 
function successAction(success, likeButton){
  likeButton.innerText = FULL_HEART
  likeButton.classList.add("activated-heart")
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------
// made up fetch 

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
