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
    let copyright = document.querySelector('.copyright');
    let date = document.querySelector('.date');
    let explination = document.querySelector('.explination');
    let hdurl = document.getElementById('hdurl');

        if (e.returnValue) {
            console.log('it works');
            header.innerHTML = `${response.title}`;
            copyright.innerHTML = `${response.copyright}`;
            date.innerHTML = `${response.date}`;
            explination.innerHTML = `${response.explanation}`;
            hdurl.innerHTML = `<img src="${response.hdurl}" alt="img"></img>`;
        }
    
    Http.abort();

}

