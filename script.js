let storedCity= '';
// current weather:
let currentCity= $('#current-city'); 
let currentDateDis= $('#current-date');
let currentTemp= $('#current-temp');
let currentWind= $('#current-windSpeeds');
let currentUv= $('#current-uv');

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
    let historyArray= [];

    // On click for save button and clear button
    $('#save-btn').on('click', function (event) {
        event.preventDefault()
        let inputVal = $("#input").val();
        
        historyArray[0] = inputVal;
        localStorage.setItem("city", JSON.stringify(inputVal));
        currentWeather(inputVal);
        let time = $(this).attr('date-time');

        let currentS= localStorage.getItem('city');
        currentS = JSON.parse(currentS);
        
        historyArray.push(inputVal);
        $('#history').append(historyArray);
        
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
    function currentWeather(cityName) {
        let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myWeatherKey}`

        let currentDate = new Date().toLocaleString();
        // let cityName= 'city name'
        // let cityName= inputVal.stringify()
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);
            currentDate.html(currentDateDis);
            // city
            // temp
            // wind
            // humitiy
            // UV Index

        })
        }
// This function returns the UVIindex response.
function UVIndex(currentCity){
    
    //lets build the url for uvindex.
    var queryURL=`https://api.openweathermap.org/data/2.5/uvi?lat=${currentCity}&lon=${currentCity}&appid=${myWeatherKey}`
    $.ajax({
            url:queryURL,
            method:"GET"
            }).then(function(response){
                $(currentUv).html(response.value);
            });
}
UVIndex();

    function getFiveDayFore(inputVal){
        let queryURL=`https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=${myWeatherKey}`
        $.ajax({

            url: queryURL,
            method: 'GET' 

        }).then(function(response){
            console.log(response)
        })

    }









})


