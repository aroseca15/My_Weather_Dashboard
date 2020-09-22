







// let myWeatherKey = 'd162cce18ba9a5542669d67133ba8953';
// // let CurrQueryURL1= 'api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={your api key}';
// // let FiveDayQueryURL= 'api.openweathermap.org/data/2.5/forecast?q={city name},{state code}&appid={your api key}';

$(document).ready(function () {

let text1= 'Conditions: '
let text2= 'Temp: '
let text3= 'Humidity: '
$('.card-title').append(text1);
$('.card-subtitle').append(text2);
$('.card-text').append(text3);


        let currentForecast = $('<div>').addClass('col-md-6');
        currentForecast.append($('<h1>').text('Current Forecast'));
        $('#forecasts').append(currentForecast);









    // Local storeage get function
    $('form-control mr-sm-2').each(function () {
        let retrieve = $(this).attr('id');
        let savedInput = localStorage.getItem(retrieve);
        $(this).val(savedInput);

    });


    // Local Storage save function


    // On click for save button and clear button
    $('#save-btn').on('click', function () {
        event.preventDefault()
        let inputVal = $("#input").val();
        currentWeather(inputVal);
        // let time = $(this).attr('date-time');
        JSON.stringify(inputVal);
        localStorage.setItem('city', inputVal);
        console.log(inputVal);

        $('#input').change(function () {
            let inputVal = $("#input").val();
            event.preventDefault()
            currentWeather(inputVal);
            let time = $(this).attr('date-time');
            JSON.stringify(inputVal);
            localStorage.setItem(value);
        })
    });


    function currentWeather(cityName) {
        let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myWeatherKey}`

        // let currentDate = new Date().toLocaleString();
        // let cityName= 'city name'
        // let cityName= inputVal.stringify()
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);
            // city
            // temp
            // wind
            // humitiy
            // UV Index

        })
        }

    currentWeather(cityName);


    function getFiveDayFore(inputVal){
        let queryURL=`https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=${myWeatherKey}`
        $.ajax({

            URL: queryURL,
            method: 'GET' 

        }).then(function(response){
            console.log(response)
        })

    }

    getFiveDayFore();










})


