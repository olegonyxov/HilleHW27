const charactersBtn = document.getElementById("charactersBtn");
let charactersList = document.getElementById("charactersList");
const charactersColumn = document.getElementById("charactersColumn");
charactersBtn.addEventListener('click', function() {
    getList(charactersList,"people");
    charactersList.classList.toggle("hidden")
})

const planetsBtn = document.getElementById("planetsBtn");
let planetsList = document.getElementById("planetsList");
const planetsColumn = document.getElementById("planetsColumn");
planetsBtn.addEventListener('click', function() {
    getList(planetsList,"planets");
    planetsList.classList.toggle("hidden")
})

const transportBtn = document.getElementById("transportBtn");
let transportList = document.getElementById("transportList");
const transportColumn = document.getElementById("transportColumn");
transportBtn.addEventListener('click', function() {
    getList(transportList,"vehicles");
    transportList.classList.toggle("hidden")
})

const store = {
    people:[],
    planets:[],
    vehicles:[]
}


function createElemBtn (item){
    let element = document.createElement('button');
    element.id = "elementBtn";
    element.textContent = `${item.name}`;
    element.addEventListener("click", function () {
        openModal(item);
    })
    return element;
}


function openModal(item) {
    const modal = document.getElementById("myModal");
    modal.classList.remove("hidden");
    const modalContent = modal.querySelector(".modal-content");
    modalContent.innerHTML = "";
    const info = document.createElement("div");
    for (const [key, value] of Object.entries(item)) {

        if (!Array.isArray(value) && !value.startsWith("https://swapi.info/api/")) {
            
            info.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
        }
    }
    modalContent.appendChild(info);
    const closeButton = document.createElement('button');
    closeButton.textContent = ' Close info';
    closeButton.id = 'closeBtn';
    closeButton.addEventListener('click', function() {
        modal.classList.add("hidden");  
    });
    modalContent.appendChild(closeButton);
}


function getList(parentElem,listElem){
    parentElem.innerHTML = ""
    const serverUrl = 'https://swapi.info/api/'+listElem
    fetch(serverUrl)
    .then(result => result.json())
    .then(result =>{
        store[listElem] = result;
        result.forEach(item => {
            const newDiv = document.createElement('div');                        
            parentElem.appendChild(newDiv);
            let element = createElemBtn(item);
            newDiv.appendChild(element)      ;      
        });
    })
}