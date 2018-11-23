
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let towndata = request.response;
    let towns = towndata['towns'];

    let output = document.getElementById('prestonbox');
    towns.forEach(town => {
        if (town.name == "Preston") {
            let myH3 = document.createElement('h3');
            let theP = document.createElement('p');
            myH3.textContent = town.name;
            theP.textContent = town.motto;
            output.appendChild(myH3);
            output.appendChild(theP);
            
            
            
        }
    });
};
