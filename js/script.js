const span = document.querySelector('span');
const btnChoice = document.querySelector('.btnChoice')
const img = document.querySelector('img');


const getWeather = (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6af25ad2f4a39d36822c8fe2848735b8&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            render (data.main.temp,data.clouds.all )
            console.log (data.main.temp);
            console.log(data.clouds.all);
        })
}


async function getWeather2(lat, lon){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6af25ad2f4a39d36822c8fe2848735b8&units=metric`;
    const result = await fetch(url);
    return await result.json();
}

btnChoice.addEventListener('click', () => change());

const change = () => {
    let selectTown = document.querySelector('.town').value;
    switch (selectTown) {
        case "Москва":
            getWeather('55.7522200', '37.6155600');
            break;
        case "Астана":
            getWeather('51.1801', '71.446');
            break;
        case "Дубай":
            getWeather('25.0657000', '55.1712800');
            break;
        case "Анталья":
            getWeather('36.9081200', '30.6955600');
            break;
        default:
            console.error('Данного города в подборке не существует');
    }
}

const render = (temp, clouds) => {
  span.innerHTML = Math.round(temp) +'℃';
  if (clouds < 30) {
      img.src = '../img/img.png'
  } else if (clouds >=30 && clouds<60) {
      img.src = '../img/img_1.png'
  } else {
      img.src = '../img/img_2.png'
    }
}

