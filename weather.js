

// function convertTimestamptoTime(num) {

//     let unixTimestamp = num;

//     let dateObj = new Date(unixTimestamp * 1000);
//     let utcString = dateObj.toUTCString();

//     let time = utcString.slice(-11, -4);

//     console.log(time);
// }

	// const rr= convertTimestamptoTime(data.sys.sunrise);


	const apiKey="ff4eed10e971de15dba04d330a9d310d";
	const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q= ";
	
	const searchbox= document.querySelector(".input input");
	const search = document.querySelector(".input button")
	const icon = document.querySelector(".tempi");
	
	async function weather(city){
		const response= await fetch(apiUrl + city +`&appid=${apiKey}`);
		if(response.status == "404" ){
			document.querySelector(".error").style.display = "block";
			document.querySelector(".weather").style.display = "none";
		}
		else{   
			var data= await response.json();

			
			
			console.log(data);
			
			document.querySelector(".place").innerHTML= data.name + ", " + data.sys.country;
			document.querySelector(".min").innerHTML= Math.round(data.main.temp_min) + "&deg;/";
			document.querySelector(".max").innerHTML=  Math.round(data.main.temp_max) + "&deg;";
			document.querySelector(".feel").innerHTML= "Feels Like: " + Math.round(data.main.feels_like) + "&deg;C";
			document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "&deg;C";
			document.querySelector(".hum").innerHTML= "Humidity: " +Math.round(data.main.humidity) + "%";
			document.querySelector(".pre").innerHTML= "Visibility: "  + data.visibility ;
			document.querySelector(".wind").innerHTML= "Wind: "  + Math.round(data.wind.speed*3.6) + " km/hr";
			document.querySelector(".over").innerHTML=  data.weather[0].description;
			
			
			if(data.weather[0].main == "Clouds"){
				icon.src ="cloud.svg";
			}
			else if(data.weather[0].main == "Clear"){
				icon.src ="sunny.svg";
			}
			else if(data.weather[0].main == "Rain"){
				icon.src ="raincloud.svg";
			}
			else if(data.weather[0].main == "Drizzle"){
				icon.src ="drizzle.svg";
			}
			else if(data.weather[0].main == "Mist"){
				icon.src ="drizzle.svg";
			}
			else if(data.weather[0].main == "Snow"){
				icon.src ="snow.svg";
			}
			else if(data.weather[0].main == "haze"){
				icon.src ="suncloud.svg";
			}
			document.querySelector(".weather").style.display = "block";
			document.querySelector(".error").style.display = "none";

			
			
			
			
		}
			
		}
		

search.addEventListener("click", ()=>{
	weather(searchbox.value);
})

// search.addEventListener("keypress", (event)=>{
// 	if(event.key === "Enter"){
// 		console.log('Enter key pressed!');
// 		weather(searchbox.value);
// 		}else{
// 			console.log("lol");
// 		}
// 	})
	
// 	searchbox.KeyboardEvent("Enter", ()=>{

// })
