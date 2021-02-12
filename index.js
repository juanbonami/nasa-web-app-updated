const myKey = "xp8SpsC40TLKmrKrAMuuiSBvVaaWTQh0ulMwA6g9";
const endPoint = "https://api.nasa.gov/planetary/apod?api_key=";

const Http = new XMLHttpRequest();
const url= endPoint + myKey;
Http.open("GET", url);
Http.send();

let response;
Http.onreadystatechange = (e) => {
    response = JSON.parse(Http.responseText);
    console.log(e);
    console.log(response);
    let header = document.querySelector('.header');
        if (e.returnValue) {
            console.log('it works')
            header.innerHTML = `${response.title}`
        }

}

