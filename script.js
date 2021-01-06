

$(document).ready(function() {
    var city = "";
    var cities = $('#cities');

    $('#cities').keyup(function(e){
        if(cities.val() == ''){
            alert('Insert a valid city')
        }
        else if(e.key === "Enter" || e.keyCode == 13){
            cityValue(e.target.value);
            cities.val('');
        }
    });


    function cityValue(value){
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + value +"&units=imperial&&APPID=851b9626a44727677ad41978719e22aa",

        function(data){
        console.log(data);
    
            
    
        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].main;
        var icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    
        $('#city').keyup(function(e){
            if($('#city').val() == ''/* || $('#city').val() !== NaN */){
                alert('Insert a valid City')
            }
            else if(e.key === "Enter" || e.keyCode == 13){
                $('#city').val = city;
                console.log(e.target.value)
                
            }
        });
    
        $('.icon').attr('src', icon);
        $('.display').text('It is ' + temp + '*C in ' + value + ' and ' + weather + ' is the cloud.');
    
        });

    };
   
});
