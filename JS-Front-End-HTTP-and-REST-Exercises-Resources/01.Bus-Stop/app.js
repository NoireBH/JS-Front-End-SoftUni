function getInfo() {
    const stopInput = document.getElementById('stopId');
    const stopId = stopInput.value;
    const stopName = document.getElementById('stopName');
    const busesContainer = document.getElementById('buses');
    const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/";

    busesContainer.innerHTML = '';

    fetch(`${BASE_URL}${stopId}`)
    .then((res) => res.json())
    .then((busInfo) => {
        const {name,buses} = busInfo;
        stopName.textContent = name;

        for (const busId in buses) {
            const li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${buses[busId]} minutes`;
            busesContainer.appendChild(li);
        }

    })
    .catch((error) => {
        stopName.textContent = 'Error';
    });
}