console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const loc = document.querySelector("input");

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#temp')
const messagefour = document.querySelector('#rain')
const wind = document.querySelector('#wind')
const hum = document.querySelector('#hum')


weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = loc.value;
  console.log(location);
  if (location.length === null) {
    console.log(data.error);
  } else {
    fetch('/weather?address=' + location + "").then(
      response => {
        response.json().then(data => {
          if (data.error) {
            console.log(data.error);
            messageOne.textContent = data.error
          } else {
            
           
            console.log(data.forecast.rain);
             messageOne.textContent = data.location
        
            messageThree.textContent = data.forecast.temp
            messagefour.textContent = data.forecast.rain
            hum.textContent = data.forecast.humidity
            wind.textContent = data.forecast.wind
          }
        });
      }
    );
  }
});
