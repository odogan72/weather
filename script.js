const button = document.getElementById("button")
const input = document.querySelector(".inp")
const container = document.querySelector(".container")
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description")
const image = document.querySelector(".container-image img")
const citys = document.querySelector(".city")
const temp1 = document.querySelector(".temp1")
const desp1 = document.querySelector(".desp1")
const temp2 = document.querySelector(".temp2")
const desp2 = document.querySelector(".desp2")
const video = document.querySelector("video")
const visibility = document.querySelector(".vis-value")
const safe = document.querySelector(".safe")
const unsafe=document.querySelector(".unsafe")
const careful=document.querySelector(".careful")

/*visibility color*/

function isGreen() {
    safe.style.backgroundColor = "yellowgreen"
}

function isNan() {
    safe.style.backgroundColor = "transparent"
}

function isNanUnsafe(){
    unsafe.style.backgroundColor="transparent"
}

function isNanCareful(){
    careful.style.backgroundColor="transparent"
}

function isYellow(){
    careful.style.backgroundColor="yellow"
}

function isRed(){
    unsafe.style.backgroundColor="red"
}

/*İstanbul*/
const humidity = document.querySelector(".hmdt-value")
const wind = document.querySelector(".wind-value")
const APIKey = "f3838b6c58f8e236c1067a5cb8507602"
const istanbul = "istanbul"

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${istanbul}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        switch (json.weather[0].main) {
            case "Clouds":
                video.src = "videos/cldvd.mp4"
                break;
            case "Rain":
                video.src = "videos/rain.mp4"
                break;
            case "Thunderstorm":
                video.src = "videos/thum.mp4"
                break;
            case "Clear":
                video.src = ""
                container.style.backgroundImage = "url(https://english.makalukhabar.com/wp-content/uploads/2022/10/WEATHER-MK.jpg)"
                break;
            case "Drizzle":
                video.src = ""
                container.style.backgroundImage = "url(https://images.unsplash.com/photo-1519692933481-e162a57d6721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW58ZW58MHx8MHx8fDA%3D)"
                break;
            case "Mist":
                video.src = ""
                container.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijEKuxq2jN4y_UFVSl54LttGIpwSTOhnqkg&s)"
                break;
            case "Snow":
                video.src = "videos/snow.mp4"
            default:
                container.style.backgroundImage = " "
        }

        visibility.innerHTML = `${(json.visibility) / 1000} <span>km</span>`
        const range = parseFloat((json.visibility) / 1000);
            
            if (range <= 10 && range > 1) {
                setInterval(()=>{
                    isGreen()
                    setTimeout(isNan,1000)
                },2000)
               
               

            }else if(range<=1 && range>=0.5){
                setInterval(()=>{
                    isYellow()
                    setTimeout(isNanCareful,1000)
                },2000)

            }else{
                
                setInterval(()=>{
                    isRed()
                    setTimeout(isNanUnsafe,1000)
                },2000)
                

            }
            
        wind.innerHTML = `${json.wind.speed}`
        humidity.innerHTML = `<span>%</span>${json.main.humidity}`
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`
    })




/*ALL CİTY*/
button.addEventListener("click", () => {
    const humidity = document.querySelector(".hmdt-value")
    const APIKey = "f3838b6c58f8e236c1067a5cb8507602"
    const city = document.querySelector(".inp").value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            switch (json.weather[0].main) {
                case "Clouds":
                    video.src = "videos/cldvd.mp4"
                    break;
                case "Rain":
                    video.src = "videos/rain.mp4"
                    break;
                case "Thunderstorm":
                    video.src = "videos/thum.mp4"
                    break;
                case "Clear":
                    video.src = ""
                    container.style.backgroundImage = "url(https://english.makalukhabar.com/wp-content/uploads/2022/10/WEATHER-MK.jpg)"
                    break;
                case "Drizzle":
                    video.src = ""
                    container.style.backgroundImage = "url(https://images.unsplash.com/photo-1519692933481-e162a57d6721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW58ZW58MHx8MHx8fDA%3D)"
                    break;
                case "Fog":
                    video.src = "videos/fog.mp4"
                    break;
                case "Mist":
                    video.src = "videos/fog.mp4"
                    break;
                case "Snow":
                    video.src = "videos/snow.mp4"
                    break;
                case "Tornado":
                    container.style.backgroundImage = "url()"

                default:
                    container.style.backgroundImage = " "
            }

            visibility.innerHTML = `${(json.visibility) / 1000} <span>km</span>`;
            const range = parseFloat((json.visibility) / 1000);
            
            if (range <= 10 && range > 1) {
                setInterval(()=>{
                    isGreen()
                    setTimeout(isNan,1000)
                },2000)

            }else if(range<=1 && range>=0.5){
                setInterval(()=>{
                    isYellow()
                    setTimeout(isNanCareful,1000)
                },2000)

            }else{
                setInterval(()=>{
                    isRed()
                    setTimeout(isNanUnsafe,1000)
                },2000)
            }


            wind.innerHTML = `${json.wind.speed}`
            humidity.innerHTML = `<span>%</span>${json.main.humidity}`
            citys.innerHTML = document.querySelector(".inp").value
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`
        })
})



/*Washington   */
const washington = "washington";
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${washington}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        temp1.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        desp1.innerHTML = `${json.weather[0].description}`
    })

/*Ankara*/

const ankara = "ankara"

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ankara}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        temp2.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        desp2.innerHTML = `${json.weather[0].description}`
    })


/*Paris*/
const temp3 = document.querySelector(".temp3")
const desp3 = document.querySelector(".desp3")

const paris = "paris"

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${paris}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        temp3.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`
        desp3.innerHTML = `${json.weather[0].description}`
    })

/* Tokyo*/

const temp4 = document.querySelector(".temp4")
const desp4 = document.querySelector(".desp4")

const tokyo = "tokyo"

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${tokyo}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        temp4.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`
        desp4.innerHTML = `${json.weather[0].description}`
    })

/* Pekin*/

const temp5 = document.querySelector(".temp5")
const desp5 = document.querySelector(".desp5")

const pekin = "Pekin"

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${pekin}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        temp5.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`
        desp5.innerHTML = `${json.weather[0].description}`
    })









