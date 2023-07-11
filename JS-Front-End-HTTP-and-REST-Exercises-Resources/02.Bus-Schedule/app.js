function solve() {

  const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/";
  let infoBox = document.querySelector(".info");
  let departBtn = document.getElementById("depart");
  let arriveBtn = document.getElementById("arrive");
  let nextStopId = 'depot';
  let currentStop = null;

  function depart() {

    fetch(`${BASE_URL}${nextStopId}`)
      .then((res) => res.json())
      .then((data) => {
        let { name, next } = data;
        infoBox.textContent = `Next stop ${name}`;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
        currentStop = name;
        nextStopId = next;      
      })
      .catch((err) => {
        infoBox.textContent = 'Error';
        departBtn.disabled = true;
        arriveBtn.disabled = true;
      });
  }

  async function arrive() {

        infoBox.textContent = `Arriving at ${currentStop}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
      
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
