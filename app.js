let value = [];
const API_lkey = "b2ea68b6a803c47403c8bde35a32ae21";
let API_URL = "";
//api.openweathermap.org/data/2.5/weather?lat=43.3497623&lon=17.8129118&appid=b2ea68b6a803c47403c8bde35a32ae21

https: window.addEventListener("load", () => {
  getLocation();
});

function getLocation() {
  let lat, long;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_lkey}`;
      console.log(API_URL);
      fetch(API_URL)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          document.getElementById("city").innerHTML = res.name;
          let cels = res.main.temp - 273.15;
          const pic = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
          console.log(pic);
          document.getElementById("deg").innerHTML = parseInt(cels);
          document.getElementById(
            "icona"
          ).src = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
        });
    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
