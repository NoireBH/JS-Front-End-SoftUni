function bitcoinMining(goldMinedPerDay) {
    let dayCount = 0;
    let bitcoins = 0;
    const singleGoldValue = 67.51;
    const priceForOneBitcoin = 11949.16;
    let levaTotal = 0;
    let firstBoughtBitCoinDate = 0;
    let boughtBitcoin = false;

    for (let index = 0; index < goldMinedPerDay.length; index++) {
        
        dayCount++;
        let bitcoinToLeva = goldMinedPerDay[index] * singleGoldValue;

        if (dayCount === 3) {
            levaTotal += goldMinedPerDay[index] * 0.70 * singleGoldValue;
            dayCount = 0;
        }

        else {
            levaTotal += bitcoinToLeva;
        }
        


        if (!boughtBitcoin) {
            firstBoughtBitCoinDate++;
        }

            
        
        while (levaTotal >= priceForOneBitcoin) {

            bitcoins++;
            levaTotal -= priceForOneBitcoin;

            if (!boughtBitcoin) {
                boughtBitcoin = true;
            }
        }

    }

    console.log(`Bought bitcoins: ${bitcoins}`);

    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBoughtBitCoinDate}`);
    }

    console.log(`Left money: ${levaTotal.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15,
    504.212,
    2511.124]);