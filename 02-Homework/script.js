/* To Do list:
Start a basic html with some css: Started
Research more effic. ways...:
Rewrite most of html by using JQuery:
Map out functions needed: 
Set up local storage:
*/


{/* <div  id="current-forecast" class ="col-md-8">
                    <h1 class="text-center">Current Forecast</h1>

                </div> */}




let myWeatherKey = 'd162cce18ba9a5542669d67133ba8953';
// let CurrQueryURL1= 'api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={your api key}';
// let FiveDayQueryURL= 'api.openweathermap.org/data/2.5/forecast?q={city name},{state code}&appid={your api key}';

$(document).ready(function () {

    // let newRow = $('<section>').addClass('row');
    // let hourCell = $('<div>').addClass('col-2');
    // hourCell.text(time);
    // newRow.append(hourCell);

    // let textAreaCell = $('<div>').addClass('col-8').addClass('textarea');
    // let textArea = $('<textarea>');
    // textArea.attr('cols', '85')
    // textArea.addClass('time-block');
    // textArea.attr('id', time);
    // textAreaCell.append(textArea);
    // newRow.append(textAreaCell);

    // let saveBtnCell = $('<div>').addClass('col-2');
    // let saveBtn = $('<button>').addClass('save-btn');
    // saveBtn.attr('date-time', time);
    // saveBtn.text('save');
    // saveBtnCell.append(saveBtn);
    // newRow.append(saveBtnCell);
    // container.append(newRow);




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
    $('#save-btn').on('click', function () {
        let inputVal = $("#input").val();
        currentWeather(inputVal);
        // let time = $(this).attr('date-time');
        // localStorage.setItem(time, value);
    });

    $('#clear-btn').on('click', function () {

    });


    function currentWeather(cityName) {
        let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myWeatherKey}`
            
        let currentDate = new Date().toLocaleString();

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
    /* AJAX call for different cities the tracks and displays the following:
    
    
                                current weather(date: mm/dd/yyyy): sunny or other, temp, humidity, uv index, and wind speeds
                                future(5-day)forecast: sunny or other, temp, humidity*/
    // Find out if the above can be put into a display function

    // Loop to add a new row to the far left side of cities researched

    // 












})


