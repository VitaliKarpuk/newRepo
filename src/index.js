import "./style.css";
import getWeather from "./main"
const form = $('#form');
const myWeather = $('#myWeather');
const clearButton = $('#clear');

form.on('click',  e => {
    e.preventDefault();
    const value = document.forms.myForm.elements.city.value;
    getWeather(value);
    document.getElementById('search').value = '';
});
myWeather.on('click', () => {
    navigator.geolocation.getCurrentPosition(function({coords}){
        getWeather(coords.latitude, coords.longitude)
})});
    clearButton.on('click', () => {
        result.innerHTML = '';
      });