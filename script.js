let storedCity = '';
// current weather:
let currentCity = $('#current-city').inputVal;
let inputVal = $("#input").val();
let currentDateDis = $('#current-date');
let currentTemp = $('#current-temp');
let currentWind = $('#current-windSpeeds');
let currentUv = $('#current-uv');
let currentH = $('#current-humidity');

// 5 day forecast:





$(document).ready(function () {

    // let text1= 'Conditions: '
    // let text2= 'Temp: '
    // let text3= 'Humidity: '
    // $('.card-title').append(text1);
    // $('.card-subtitle').append(text2);
    // $('.card-text').append(text3);
    



    // Local storeage get function
    $('form-control mr-sm-2').each(function () {
        let retrieve = $(this).attr('id');
        let savedInput = localStorage.getItem(retrieve);
        $(this).val(savedInput);

    });


    // Local Storage save function
    let historyArray = [];

    // On click for save button and clear button
    $('#save-btn').on('click', function (event) {
        event.preventDefault()
        let inputVal = $("#input").val();

        historyArray[0] = inputVal;
        localStorage.setItem("city", JSON.stringify(inputVal));
        currentWeather(inputVal);
        let time = $(this).attr('date-time');

        let currentS = localStorage.getItem('city');
        currentS = JSON.parse(currentS);

        historyArray.push(inputVal);
        $('#history').append(historyArray);
        $("#history").empty();
        // for (var i = 0; i < historyArray.length; i++) {
        //     $("#history").append(`<div class="container" style="margin: 3%;" ><button class="data btn btn-primary" data-cityName="${getHistory[i]}">${getHistory[i]}</button> <br></div>`);
        //     console.log();
        // }

        // localStorage.setItem('city', JSON.stringify(historyArray));
        getFiveDayFore(inputVal);

        console.log(historyArray)







        // $('#input').change(function (event) {
        //     let inputVal = $("#input").val();
        //     event.preventDefault()
        //     currentWeather(inputVal);
        //     let time = $(this).attr('date-time');
        //     JSON.stringify(inputVal);
        //     localStorage.setItem(value);
        // })
    });

    let myWeatherKey = 'd162cce18ba9a5542669d67133ba8953';
    // let tempF = (response.main.temp - 273.15) * 1.80 + 32;
    // let speedPH = (response.wind.speed * 2.237)
    function currentWeather(cityName) {
        let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${myWeatherKey}`

        let currentDate = new Date().toLocaleString();
        // let cityName= 'city name'
        // let cityName= inputVal.stringify()
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);
            // currentDateDis.html(response.currentDate);
            
            $('#current-city').text(response.name)
            $('#current-date').text(currentDate)
            $('#current-temp').text(response.main.temp + ' F');
            $('#current-humidity').text(response.main.humidity + '%')
            $('#current-windSpeeds').text(response.wind.speed)
            $('#icon').append(`<img src= https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png>`)


        })
    }
    // UV index:
    // function UVIndex(){

    //     //lets build the url for uvindex.
    //     var queryURL=`http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=${myWeatherKey}`
    //     $.ajax({
    //             url:queryURL,
    //             method:"GET"
    //             }).then(function(response){
    //                 $('#current-uv').text(response.coord.lon, response.coord.lat);
    //                 console.log(response);
    //             });
    // }
    // UVIndex();

    
})


function getFiveDayFore(cityName) {
    let myWeatherKey = 'd162cce18ba9a5542669d67133ba8953';
    let queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=5&units=imperial&appid=${myWeatherKey}`
    $.ajax({

        url: queryURL,
        method: 'GET'

    }).then(function (response) {
        for (let i = 0; i < response.list.length; i = i + 5) {

            $('#dayF-date').text(Date('MM/DD/YYYY'))
            $('#dayF-conditions').append(`<img src= https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png>`)
            $('#dayF-temp').text(response.list[i].main.temp)
            $('#dayF-humidity').text(response.list[i].main.humidity + '%')

        }
        console.log(response)
    })

}









// })


