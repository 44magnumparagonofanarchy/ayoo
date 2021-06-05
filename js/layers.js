/*
addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
*/

addLayer("p1", {
  name: "prestige ^1",
  symbol: "p^1",
  position: 0,
  startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), 
    resource: "Prestige Points^1", 
    baseResource: "points", 
    baseAmount() {return player.points}, 
    type: "normal", 
    exponent: 0.5, 
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
        return new Decimal(1)
    },
    row: 0, 
    hotkeys: [
        {key: "1", description: "1: Reset for p^1", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
  upgrades: {
11: {
  name: "Wake up",
  description: "You've been asleep so long.",
  cost: new Decimal(1),
  },
},
  
12: {
  name: "Stay Asleep",
  description: "Just one more minute...",
  cost: new Decimal(1),
  },
},
         
)