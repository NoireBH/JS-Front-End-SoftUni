function inventoryTask(array) {
  let heroRegistry = [];

  for (const line of array) {
    let heroInfo = line.split(" / ");
    let items = heroInfo[2].split(", ");

    let hero = { name: heroInfo[0], level: heroInfo[1], items: items };
    heroRegistry.push(hero);
  }

  let sortedRegistry = heroRegistry.sort((heroA, heroB) => {
    return heroA.level - heroB.level;
  });

  for (const hero of sortedRegistry) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(', ')}`);

  }
}

inventoryTask([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

inventoryTask([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
