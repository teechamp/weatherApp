
function getCurrentWeather() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=ddfbec81d94d8929747851af6acea23a")
        .then(response => response.json())
        .then(text => {
            console.log(text);
            let result = `
            <div class="container">
            <div class="row double">
                <div class="col-md-6 px-5">
                    <h1 class="h5">${text.base}</h1>
                    <h3 class="display-4 pb-5">${convertToCelsius(text.main.temp)}&deg;c</h3>
                </div>
                <div class="col-md-6">
                   <i class="fa ${getIcon(convertToCelsius(text.main.temp))} fa-4x pb-5"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="double">
                                <p>longitude: ${text.coord.lon}N</p>
                                <p>latitude: ${text.coord.lat}E</p>
                            </div>
                            <div class="double">
                                <p>Pressure: ${text.main.pressure}</p>
                                <p>Humidity: ${text.main.humidity}</p>
                            </div>
                            <div class="double">
                                <p>Temperature Max: ${text.main.temp_max}</p>
                                <p>Temperature Min.: ${text.main.temp_min}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
            `;
            document.querySelector("#weather").innerHTML = result;
        }
        )
}
getCurrentWeather();

function convertToCelsius(temp){
    return (temp - 273.15).toFixed(2); 
}

function getIcon(temp){
if(temp > 39){
    return "fa-sun";
}else if(temp =>10 &&temp <= 39 ){
    return "fa-cloud";
}else{
    return "fa-bolt";
}
}


