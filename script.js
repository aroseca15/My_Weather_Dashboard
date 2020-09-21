/* To Do list:
Start a basic html with some css: Started
Research more effic. ways...:
Rewrite most of html by using JQuery:
Map out functions needed: 
Set up local storage:
*/

// let containerFluid = $('.container-fluid');

/* <section id="forecasts">
            <div class="row">
                <div id="current-forecast" class="col-md-6">
                    <h1>Five Day Forecast</h1>
                </div>
                <div class="col-md-6">
                    <h1>Current Forecast</h1>
                </div>
            // </div> */

let day1= $('<div>').attr('id','day1').addClass('row');
let day2= $('<div>').attr('id','day2').addClass('row');
let day3= $('<div>').attr('id','day3').addClass('row');
let day4= $('<div>').attr('id','day4').addClass('row');
let day5= $('<div>').attr('id','day5').addClass('row');




let myWeatherKey = 'd162cce18ba9a5542669d67133ba8953';
// let CurrQueryURL1= 'api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={your api key}';
// let FiveDayQueryURL= 'api.openweathermap.org/data/2.5/forecast?q={city name},{state code}&appid={your api key}';

$(document).ready(function () {

    let fiveDayForecast = $('<div>').addClass('col-md-6');
    fiveDayForecast.append($('<h1>').text('5 Day Forecast'));
    fiveDayForecast.append($('<div>').attr('id', 'day1').addClass('row'));
    // fiveDayForecast.append($('<h5>').text('Temp:'));
    // fiveDayForecast.append($('<h5>').text('humidity'));
    fiveDayForecast.append($('<div>').attr('id', 'day2').addClass('row'));
    // fiveDayForecast.append($('<h5>').text('Temp:'));
    // fiveDayForecast.append($('<h5>').text('humidity'));
    fiveDayForecast.append($('<div>').attr('id', 'day3').addClass('row'));
    // fiveDayForecast.append($('<h5>').text('Temp:'));
    // fiveDayForecast.append($('<h5>').text('humidity'));
    fiveDayForecast.append($('<div>').attr('id', 'day4').addClass('row'));
    // fiveDayForecast.append($('<h5>').text('Temp:'));
    // fiveDayForecast.append($('<h5>').text('humidity'));
    fiveDayForecast.append($('<div>').attr('id', 'day5').addClass('row'));
    // fiveDayForecast.append($('<h5>').text('Temp:'));
    // fiveDayForecast.append($('<h5>').text('humidity'));



    $('#forecasts').append(fiveDayForecast);

    let currentForecast = $('<div>').addClass('col-md-6');
    currentForecast.append($('<h1>').text('Current Forecast'));
    $('#forecasts').append(currentForecast);
    

    






    // Local storeage get function
    $('form-control mr-sm-2').each(function () {
        let retrieve = $(this).attr('id');
        let savedInput = localStorage.getItem(retrieve);
        $(this).val(savedInput);

        })


        // Local Storage save function
        

        // On click for save button and clear button
        $('#save-btn').on('click', function () {
            let inputVal = $("#input").val();
            currentWeather(inputVal);
        let time = $(this).attr('date-time');
        JSON.stringify(inputVal);
        localStorage.setItem(time, value);

        $('#input').change(function(){
            let inputVal = $("#input").val();
            currentWeather(inputVal);
        let time = $(this).attr('date-time');
        JSON.stringify(inputVal);
        localStorage.setItem(time, value);
        })
        });

        
        // $('#clear-btn').on('click', function () {

        // });

        
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


        function getFiveDayFore(){
            let queryURL=`https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=${myWeatherKey}`
            $.ajax({

                URL: queryURL,
                method: 'GET' 

            }).then(function(response){
                console.log(response)
            })

        }

        getFiveDayFore();
        /* AJAX call for different citiesfiveDayForecast.append($('<h5>').text('humidity:')); the tracks and displays the following:
        
        
                                    current weather(date: mm/dd/yyyy): sunny or other, temp, humidity, uv index, and wind speeds
                                    future(5-day)forecast: sunny or other, temp, humidity*/
        // Find out if the above can be put into a display function

        // Loop to add a new row to the far left side of cities researched

        // 












    })


