const apiKey = "954785ddeecc61430de17459a0c53095";
const apiUri = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=india";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const main = document.querySelector('.main');

const loader = document.querySelector('.loader');

const p = document.querySelector('.p');

async function checkwether(city) {
  const respose = await fetch(apiUri + city + `&appid=${apiKey}`);
  var data = respose.json();
  
  document.querySelector(".city").innerHTML = data.name;
  
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  
  document.querySelector(".humidity").innerHTML = Math.round(data.wind.speed) + "Km/h";
  
  
}

searchBtn.addEventListener("click", ()=>{
  checkwether(searchBox.value);
  loader.style.display = 'block';

  
  setTimeout(() => {
    loader.style.display = 'none';
main.style.display = 'block';
if (searchBox.value.length < '3') {
  main.style.display = 'none';
    p.style.display = 'block';
  p.innerHTML = "Error";
  p.style.color = '#F93737';
} 

if ( document.querySelector(".city").innerHTML === "undefined")  {
  p.style.display = 'block';
  p.innerHTML = "City Not Found";
  main.style.display = 'none';
}
  }, 3000);
  
});

searchBox.addEventListener('focus', () => {
  main.style.display = 'none';
  p.style.display = 'none';
});

