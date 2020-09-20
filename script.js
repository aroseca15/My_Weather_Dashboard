/* To Do list:
Start a basic html with some css: Started
Research more effic. ways...:
Rewrite most of html by using JQuery:
Map out functions needed: 
Set up local storage:
*/


/* <section id="forecasts">
            <div class="row">
                <div id="current-forecast" class="col-md-6">
                    <h1>Five Day Forecast</h1>
                </div>
                <div class="col-md-6">
                    <h1>Current Forecast</h1>
                </div>
            // </div> */






let myWeatherKey = 'd162cce18ba9a5542669d67133ba8953';
// let CurrQueryURL1= 'api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={your api key}';
// let FiveDayQueryURL= 'api.openweathermap.org/data/2.5/forecast?q={city name},{state code}&appid={your api key}';

$(document).ready(function () {

    let fiveDayForecast = $('<div>').addClass('col-md-6').addId('fiveDayForecast');
    fiveDayForecast.text("Your 5 Day Forecast")
    fiveDayForecast.innerHTML().append('forecasts');
    container-fluid.append(newRow);





    // Local storeage get function
    // $('form-control mr-sm-2').each(function () {
    //     let retrieve = $(this).attr('id');
    //     let savedInput = localStorage.getItem(retrieve);
    //     $(this).val(savedInput);

    // })


    // Local Storage save function
    // $('.save-btn').on('click', function () {
    //     let value = $(this).parent().siblings('.textarea').children('textarea').val();
    //     let time = $(this).attr('date-time');
    //     localStorage.setItem(time, value);
    // })

    // On click for save button and clear button
    // $('#save-btn').on('click', function () {
    //     let inputVal = $("#input").val();
    //     currentWeather(inputVal);
        // let time = $(this).attr('date-time');
        // localStorage.setItem(time, value);
    // });

    // $('#clear-btn').on('click', function () {

    // });


    // function currentWeather(cityName) {
    //     let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myWeatherKey}`
            
    //     let currentDate = new Date().toLocaleString();

    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {

    //         console.log(response);
    //         // city
    //         // temp
    //         // wind
    //         // humitiy
    //         // UV Index
            
    //     })
    //     }

    // currentWeather(cityName);
    /* AJAX call for different cities the tracks and displays the following:
    
    
                                current weather(date: mm/dd/yyyy): sunny or other, temp, humidity, uv index, and wind speeds
                                future(5-day)forecast: sunny or other, temp, humidity*/
    // Find out if the above can be put into a display function

    // Loop to add a new row to the far left side of cities researched

    // 












})


