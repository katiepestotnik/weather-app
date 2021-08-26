let weatherData;
const $temp = $('#temp');
const $feel = $('#feel');
const $humidity = $('#humidity');
const $input = $('#userZip');
const $zip = $('#zip');
const $description = $('#description')


const handleGetData = (event) => {
    event.preventDefault();
    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?zip=${$input.val()},us&appid=39744aae841aa91c6e1b6eca4b0a88b4&units=imperial`
    }).then((data) => {
        //console.log(data);
        weatherData = data;
        render();
    },
        (error) => {
            console.log('there is a problem', error)
        }
    );
};
function render() {
    $zip.text(`${weatherData.name}`)
    $temp.text(`${weatherData.main.temp} degrees`)
    $feel.text(`${weatherData.main.feels_like} degrees`)
    $humidity.text(`${weatherData.main.humidity} g/kg`)
    $description.text(`${weatherData.weather[0].description}`)
}

$('form').on('submit', handleGetData);

