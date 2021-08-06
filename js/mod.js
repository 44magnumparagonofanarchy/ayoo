let modInfo = {
  name: "The Inception Tree?",
  id: "ytsaTerAsebuP",
  author: "44. Magnum",
  pointsName: "dreams",
  discordName: "44. Magnum, Paragon of Anarchy!",
  discordLink: "none lol",
  initialStartPoints: new Decimal(10), // Used for hard resets and new players

  offlineLimit: 1 // In hours
};

// Set your version in num and name
let VERSION = {
  num: "0.1.-3.14159629349",
  name: "Hanosa"
};

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Do we wake them up?.<br>
		- Yes..`;

let winText = `Congratulations! you won, for now... now, let me say it's been awesome to dev, this all took around a month so don't expect 297 layers in a single update, sorry! for now, the top has stopped.`;

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"];

function getStartPoints() {
  return new Decimal(modInfo.initialStartPoints);
}

// Determines if it should show points/sec
function canGenPoints() {
  return true;
}

// Calculate points/sec!
function getPointGen() {
  if (!canGenPoints()) return new Decimal(0);

  let gain = new Decimal(1);
  if (hasUpgrade("p1", 11)) gain = gain.times(2);
  if (hasUpgrade("p2", 11))
    gain = fain.times(1000000000000000000000000000000000000);
  if (hasUpgrade("p3", 12)) gain = gain.times("e2800000000000")
  if (hasUpgrade("p3", 11)) gain = gain.add(upgradeEffect("p3", 11));
  if (hasUpgrade("p1", 31)) gain = gain.times(100);
  if (hasUpgrade("p1", 21)) gain = gain.times(3);
  if (hasUpgrade("p1", 22)) gain = gain.plus(player.p1.points);
  if (hasUpgrade("p2", 21)) gain = gain.times(1.25);
  return gain; // it won't NaN, it will just be infinity
} //well not anymore ;)

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() {
  return {};
}

// Display extra things at the top of the page
var displayThings = [];

// Determines when the game "ends"
function isEndgame() {
  return player.points.gte(new Decimal("e28000000"));
}

// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
  return 3600; // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion) {}
