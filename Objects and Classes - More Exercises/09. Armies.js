function armyTask(input){

    let armies = {};

    for (const armyInfo of input) {
        
        if (armyInfo.includes('arrives')) {
            
            let name = armyInfo.replace('arrives','').trim();
            armies[name] = {};

        }

        else if (armyInfo.includes(':')) {
            
            let[leader,info] = armyInfo.split(':');
            let[armyName,armyCount] = info.split(', ');
            
            if (armies.hasOwnProperty(leader)) {
                if (!armies[leader][armyName.trim()]) {
                  armies[leader][armyName.trim()] = 0;
                }
                armies[leader][armyName.trim()] += Number(armyCount); 
            }
        }

        else if(armyInfo.includes('+')){
            let[armyName,armyCount] = armyInfo.split(' + ');

            for (const leader in armies) {
                
                if (armies[leader].hasOwnProperty(armyName)) {
                    armies[leader][armyName] += Number(armyCount);
                }
            }
        }

        else if(armyInfo.includes('defeated')){
            let leader = armyInfo.split(' defeated')[0];

            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
            }
        }
    }

    let sortedLeaders = Object.entries(armies).sort(sortingArmies);
  for (const [leader, army] of sortedLeaders) {
    let sumOfArmyOfLeader = (obj) =>
      Object.values(army).reduce((a, b) => a + b);
    console.log(`${leader}: ${sumOfArmyOfLeader(leader)}`);
    let sortedArmies = Object.entries(army).sort((a, b) => b[1] - a[1]);
    for (const army of sortedArmies) {
      console.log(`>>> ${army[0]} - ${army[1]}`);
    }
  }
 
  function sortingArmies(a, b) {
    let [aArmyName, aArmyCount] = a;
    let [bArmyName, bArmyCount] = b;
    let sumArmyCountA = (obj) =>
      Object.values(aArmyCount).reduce((a, b) => a + b);
    let sumArmyCountB = (obj) =>
      Object.values(bArmyCount).reduce((a, b) => a + b);
 
    let result = sumArmyCountB(bArmyCount) - sumArmyCountA(aArmyCount);
    if (result === 0) {
      return aArmyName.localeCompare(bArmyName);
    }
    return result;
  }

}

armyTask(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);
armyTask(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);