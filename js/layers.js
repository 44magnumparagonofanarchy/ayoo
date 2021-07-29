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
  name: "p¹",
  symbol: "p¹",
  position: 0,
  startData() {
    return {
      unlocked: true,
      points: new Decimal(0)
    };
  },
  color: "#4BDC13",
  requires: new Decimal(10),
  resource: "Prestige Points¹",
  baseResource: "points",
  baseAmount() {
    return player.points;
  },
  type: "normal",
  exponent: 0.5,
  gainMult() {
    mult = new Decimal(1);
    return mult;
  },
  gainExp() {
    return new Decimal(1);
  },
  row: 0,
  hotkeys: [
    {
      key: "1",
      description: "1: Reset for p¹",
      onPress() {
        if (canReset(this.layer)) doReset(this.layer);
      }
    }
  ],
  layerShown() {
    return true;
  },
  upgrades: {
    11: {
      title : "Wake up",
      description: "You've been asleep so long.",
      cost: new Decimal(1),
      canAfford() {
        return !hasUpgrade("p1", 12) && player.p1.points.gte(this.cost);
      }
    },
    12: {
      name: "Stay Asleep",
      title : "Stay asleep",
      description: "Just one more minute...",
      cost: new Decimal(1),
      canAfford() {
        return !hasUpgrade("p1", 11) && player.p1.points.gte(this.cost);
      }
    } // p2 21 does not exist, tehrefore the game breaks
  } // lmao
}); //i ctrl z'd it out of existance lmao
addLayer("p2", {
  name: "p²", 
  symbol: "p²",
  position: 1,
  startData() {
    return {
      unlocked: false,
      points: new Decimal(0)
    };
  },
  color: "#4BDC13",
  requires: new Decimal(10),
  baseAmount(){return player.p1.points},
  resource: "Prestige Points²",
  baseResource: "p1",
  baseAmount() {
    return player.p1.points;
  },
  type: "normal",
  exponent: 0.5,
  gainMult() {
    mult = new Decimal(1);
    return mult;
  },
  gainExp() {
    return new Decimal(1);
  },
  row: 0,
  hotkeys: [
    {
      key: "2",
      description: "2: Reset for p²",
      onPress() {
        if (canReset(this.layer)) doReset(this.layer);
      }
    }
  ],
  layerShown() {
    if (hasUpgrade('p1', 11))
    return true;
  },
  upgrades: {
    11: {
      name: "What",
      title : "What?",
      description: "You look around, and see a top spinning... you've watched enough of a moive to know what that means",
      cost: new Decimal(10),
      canAfford() {
        return !hasUpgrade("p1", 11) && player.p1.points.gte(this.cost);
        
      }
    },
    21: {
      name: "WAT",
      title : "Heh?",
      description: "What the hell is going on, seriously.",
      cost: new Decimal(20),
      unlocked() {
        return !hasUpgrade("p2", 11) && player.p2.points.gte(this.cost);
      }
    }
  }
});
addLayer("p3", {
  name: "p³",
  symbol: "p³",
  position: 2,
  startData() {
    return {
      unlocked: false,
      points: new Decimal(0)
    };
  },
  color: "#4BDC13",
  requires: new Decimal(100),
  resource: "Prestige Points³",
  baseResource: "p2",
  baseAmount() {
    return player.p2.points;
  },
  type: "normal",
  exponent: 0.5,
  gainMult() {
    mult = new Decimal(1);
    return mult;
  },
  gainExp() {
    return new Decimal(1);
  },
  row: 3,
  hotkeys: [
    {
      key: "3",
      description: "3: Reset for p<sup>3",
      onPress() {
        if (canReset(this.layer)) doReset(this.layer);
      }
    }
  ],
  layerShown() {
    return false;
  },
}
        );