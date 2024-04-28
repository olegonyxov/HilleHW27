        let displayValue = value;
        console.log(value)
        if (typeof value === 'string' && value.startsWith("https://swapi.info/api/")) {            
            fetch(value)
            .then(result => result.json())
            .then(result =>{
                console.log(result)
                displayValue = JSON.stringify(result.name);
            })
        } else if (Array.isArray(value)) {
            value.forEach(elem=>{
                fetch(elem)
            .then(result => result.json())
            .then(result =>{
                
                displayValue = result;
            })

            })
            
        }


        // function openModal(item) {
//     const modal = document.getElementById("myModal");
//     modal.classList.remove("hidden");
//     const modalContent = modal.querySelector(".modal-content");
//     modalContent.innerHTML = "";
//     const info = document.createElement("div");
//     for (const [key, value] of Object.entries(item)) {

//         if (!Array.isArray(value) && !value.startsWith("https://swapi.info/api/")) {
            
//             info.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
//         }
//     }
//     modalContent.appendChild(info);
//     const closeButton = document.createElement('button');
//     closeButton.textContent = ' Close info';
//     closeButton.id = 'closeBtn';
//     closeButton.addEventListener('click', function() {
//         modal.classList.add("hidden");  
//     });
//     modalContent.appendChild(closeButton);
// }
