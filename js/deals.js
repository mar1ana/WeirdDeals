// JavaScript Document

//Creating variables that store a reference to header and section elements
let header = document.querySelector('header');
let section = document.querySelector('section');

//Creating a variable to store request URL
let requestURL = 'https://mar1ana.github.io/WeirdDeals/js/weird-stuff.json';

//Creating a new XHR object
let request = new XMLHttpRequest();

//Opening a new request, using the open method
request.open('GET', requestURL);

//Setting up the request to accept JSON
request.responseType = 'json';

//Sending the request using the send method
request.send();

//Adding event handler that listens for onload event of the JSON file/object
request.onload = function() {
    let weirdDeals = request.response;
    console.log(weirdDeals);
    fillHeader(weirdDeals);
    topDeals(weirdDeals);
}

//Setting up fillHeader function to fill in the header function
function fillHeader(jsonObj) {

    //Grabbing the company name from JSON object and then create a new element, adding text and appending to the header
    let h1Header = document.createElement('h1');
    h1Header.textContent = jsonObj['companyName'];
    header.appendChild(h1Header);

    //Grabbing the company info and established date and add a new paragraph to your HTML that displays this info
    let pHeader = document.createElement('p');
    pHeader.textContent = 'Head Office: ' + jsonObj['headOffice'] + ' , Established:  ' + jsonObj['established'];
    header.appendChild(pHeader);
}

//Defining topDeals function to show the products
function topDeals(jsonObj) {

    //Binding topDeals object to a variables
    let topDeals = jsonObj['topDeals'];

    for (let i = 0; i < topDeals.length; i++) {
        //Creating more elements
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');


        //Grabbing the data associated with image to set the src and alt attribute
        img.setAttribute('src', 'https://mar1ana.github.io/WeirdDeals/img/' + topDeals[i].image);
        img.setAttribute('alt', topDeals[i].image);

        h2.textContent = topDeals[i].name;
        p1.textContent = 'Price: $' + topDeals[i].price;
        p2.textContent = 'Description: ' + topDeals[i].description;


        //Appending each element to article, then appending article to section
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        section.appendChild(article);

    }
}
// Initializing and adding map
function initMap() {
    //The location of Barrie
    let barrie = {
        lat: 44.416606,
        lng: -79.666381
    };
    //The map, centered at Barrie
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: barrie
    });
    //The marker, positioned at Barrie
    let marker = new google.maps.Marker({
        position: barrie,
        map: map
    });
}