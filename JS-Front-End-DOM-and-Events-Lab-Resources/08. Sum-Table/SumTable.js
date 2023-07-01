function sumTable() {
  let firstTable = document.getElementsByTagName("table")[0];
  let costs = Array.from(
    firstTable.querySelectorAll("tbody tr td:nth-child(even)")
  );
 let sumTd = costs.pop();
  
    let totalCost = 0;

  for (const cost of costs) {
        totalCost += Number(cost.textContent);
  }

  sumTd.textContent = totalCost;
 
}
