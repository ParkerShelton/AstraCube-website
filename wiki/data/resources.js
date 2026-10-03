WIKI.add({
  id: "resources",
  name: "Resources",
  color: "#c9a46b",
  blurb: "What you dig, chop and pick up: ores and their properties, stone, sand, ice, wood and wild plants.",
  intro:
    "Everything starts as something you dug out of the ground or cut down. Ores are the deep end: every world invents its own, and what an ore is good for comes down to five numbers.",
  groups: [
    { name: "Ores", blurb: "No two worlds have the same ores. These pages explain how they work, so you can judge any ore you find." },
    { name: "Ground" },
    { name: "Wood and plants" },
    { name: "From animals" },
  ],
  entries: [
    // ---------------------------------------------------------------- ores
    {
      id: "ores",
      name: "How Ores Work",
      group: "Ores",
      summary: "Every world invents its own ores, each with a name, a colour, a tier and five properties. Bare hands can't break any of them.",
      info: [
        ["Per world", "Up to 4 ores"],
        ["Tiers", "Common, Uncommon, Rare, Exotic"],
        ["Tool needed", "Pick or Drill"],
        ["Smelts into", "An ingot, or coal"],
      ],
      body: [
        {
          p: "There's no Iron or Copper in AstraCube. Each world makes up its own ores from its seed: a name, a colour, a [[ore-tiers|tier]], and five [[ore-properties|properties]] that decide what the ore is good for.",
        },
        {
          h: "Names mean something",
          p: "An ore's name is the seed for everything else about it. Two worlds that land on the same name have **the same ore**: same colour, same stats. The ending tells you the tier, so you can read one from a name alone:",
          table: {
            cols: ["Tier", "Name endings"],
            rows: [
              ["Common", "-ite, -ar, -ide, -ash, -stone, -grit"],
              ["Uncommon", "-ium, -ine, -ora, -yte, -lith, -spar"],
              ["Rare", "-ex, -onite, -yr, -isk, -crys, -vein"],
              ["Exotic", "-ax, -yx, -arch, -ovar, -helion, -core"],
              ["Signature", "-volt, -flux, -spark, -pyre, -char, -cinder, -rime, -quell, -frost, -slag, -mass, -plumb"],
            ],
          },
        },
        {
          h: "Getting it out",
          list: [
            "Ore is the one thing **bare hands can't break**. You need a [[pick]] or a [[drill]].",
            "Higher tiers need more mining power. See [[ore-tiers]].",
            "A fuel ore sits in black, sooty stone, so you can tell a coal seam from a metal vein before you dig it.",
          ],
        },
        {
          h: "What next",
          p: "Take it to a [[smelter]]. A metal ore comes out as an [[ingot]]. A fuel ore has no metal in it, so it comes out as [[coal]].",
        },
      ],
      related: ["ore-tiers", "ore-properties", "signature-ores", "smelter", "coal"],
    },
    {
      id: "ore-tiers",
      name: "Ore Tiers",
      group: "Ores",
      summary: "Common, Uncommon, Rare and Exotic. Higher tiers are harder to mine and better at almost everything.",
      info: [
        ["Tiers", "4"],
        ["Hardest to mine", "Exotic: 2.8 s, power 2.4"],
      ],
      body: [
        {
          p: "Tier sets an ore's starting properties and how hard it is to dig. Each ore then varies a little from its tier's numbers. **Combustion is the exception**: it isn't tied to tier, so a common surface ore can burn ferociously while a deep exotic one barely smoulders.",
        },
        {
          table: {
            cols: ["Tier", "Mine time", "Power needed", "Hardness", "Density", "Energy", "Reactivity"],
            rows: [
              ["Common", "1.0 s", "1.0", "40", "40", "30", "15"],
              ["Uncommon", "1.4 s", "1.0", "55", "50", "50", "30"],
              ["Rare", "2.0 s", "1.6", "72", "62", "68", "55"],
              ["Exotic", "2.8 s", "2.4", "88", "82", "85", "85"],
            ],
          },
          note: "\"Power needed\" is the mining power that can break it at all. Hands are 1.0 but can't break ore at all, a [[pick]] is 2.4, and a [[drill]] is 1.5 to 3.3 depending on what it's made of.",
        },
      ],
      related: ["ores", "ore-properties", "pick", "drill"],
    },
    {
      id: "ore-properties",
      name: "Ore Properties",
      group: "Ores",
      summary: "Hardness, Density, Energy, Reactivity and Combustion. Each one decides something different about whatever you make from the ore.",
      info: [
        ["Properties", "5"],
        ["Range", "0 to 100"],
        ["Ordinary cap", "74 to 82"],
        ["Signature ores", "88 to 100 in one"],
      ],
      body: [
        {
          p: "The same ore can make a great battery and a terrible plate. Whatever you make keeps the properties of the ore it came from, so a drill is as good as its bar and a battery holds what its ingot can. Sorting what you dig into piles is the real game here.",
        },
        {
          table: {
            cols: ["Property", "What it decides"],
            rows: [
              ["**Hardness**", "Anvil strikes per stage, [[drill]] power, melee damage, [[metal-duct]] speed (7 to 14), [[wind-rotor]] output"],
              ["**Density**", "[[insulated-suit]] protection (30% to 90%). A [[containment-shell]] needs 85+."],
              ["**Energy**", "[[fuel-rod]] burn time and output, drill power, weapon damage, thruster push. A [[warp-coil]] needs 80+."],
              ["**Reactivity**", "How much [[wire]] a bar draws (2 to 14), [[battery]] capacity, [[solar-panel]] output. A [[coolant-jacket]] needs 80+."],
              ["**Combustion**", "How long and hard it burns as fuel, how many [[plate|plates]] an ingot gives, [[ember-torch]] brightness. An [[ignition-charge]] needs 85+."],
            ],
          },
        },
        {
          h: "Fuel or metal?",
          p: "Combustion splits ores in two. At 55 or more, an ore is **fuel**: it smelts to [[coal]] and is no use on an anvil. Below that it's a metal, and the lower its Combustion the better it casts:",
          table: {
            cols: ["Combustion", "Plates per ingot", "The game calls it"],
            rows: [
              ["Very low", "5", "Inert: the best plate there is, and no use as fuel"],
              ["Low", "4", "Steady: good plate, poor fuel"],
              ["Middling", "3", "Lively: middling either way"],
              ["High", "2", "Volatile: burns hard, casts badly"],
            ],
          },
        },
        {
          note: "Hover an ore in-game and its tooltip sums it up in words: \"burns hot\", \"conducts well\", \"barely conducts\" and so on.",
        },
      ],
      related: ["ores", "ore-tiers", "signature-ores", "coal", "anvil"],
    },
    {
      id: "signature-ores",
      name: "Signature Ores",
      group: "Ores",
      summary: "Four ores, one per planet family, each 88–100 in a single property. No ordinary ore comes close, and the Warp Drive needs all four.",
      info: [
        ["Count", "4"],
        ["Strength", "88–100 in one property"],
        ["Ordinary ores top out at", "74–82"],
      ],
      body: [
        {
          p: "Each [[planet-families|planet family]] holds one kind of signature ore. The four parts of a [[warp-drive]] each ask for a grade only a signature ore reaches, so building one means a trip to each family.",
        },
        {
          table: {
            cols: ["Family", "Best at", "Endings", "Make it into"],
            rows: [
              ["[[living-worlds|Living]]", "Energy", "-volt, -flux, -spark", "Bars → [[warp-coil]] (Energy 80+)"],
              ["[[dust-worlds|Dust]]", "Combustion", "-pyre, -char, -cinder", "Coal → [[ignition-charge]] (Combustion 85+)"],
              ["[[frozen-worlds|Frozen]]", "Reactivity", "-rime, -quell, -frost", "A sheet → [[coolant-jacket]] (Reactivity 80+)"],
              ["[[scorched-worlds|Scorched]]", "Density", "-slag, -mass, -plumb", "Plates → [[containment-shell]] (Density 85+)"],
            ],
          },
        },
      ],
      related: ["planet-families", "warp-drive", "ore-properties"],
    },
    {
      id: "coal",
      name: "Coal",
      group: "Ores",
      summary: "What a fuel ore becomes in a smelter: a dense black lump that burns far longer and harder than the raw ore.",
      color: "#2a2a2e",
      info: [
        ["Made from", "Any fuel ore (Combustion 55+)"],
        ["Made at", "Smelter"],
        ["Burns", "2.1× longer and harder than raw ore"],
      ],
      body: [
        {
          p: "A metal ore smelts into an [[ingot]] you can beat into something. A fuel ore has nothing in it to beat: it's the burning part. So the smelter bakes it down into coal instead.",
        },
        {
          p: "Coal keeps the properties of the ore it came from, so a fiercer seam makes fiercer coal. Raw fuel ore still burns if you're in a hurry, for 2 to 12 seconds at 1 to 6 power a second depending on its Combustion. Coal manages 2.1 times both.",
        },
        {
          h: "Used for",
          list: [
            "Fuel for a [[generator]].",
            "Two coal go into every [[thruster]].",
            "Coal with Combustion 85+ (only from a [[dust-worlds|dust world's]] signature ore) packs an [[ignition-charge]].",
          ],
        },
      ],
      related: ["ores", "smelter", "generator", "thruster", "ignition-charge"],
    },

    // ---------------------------------------------------------------- ground
    {
      id: "rock",
      name: "Rock",
      group: "Ground",
      summary: "The commonest block in the game, and half of every early recipe. Your hands can break it, slowly.",
      color: "#6b6e78",
      info: [
        ["Break time", "0.9 s (with a pick)"],
        ["Best tool", "Pick"],
        ["By hand", "8× slower"],
      ],
      body: [
        {
          p: "Rock (and [[sandstone]], which counts as rock in recipes) goes into your first tools, your [[smelter]], your [[campfire]] and plenty more. Bare hands can break it, but at an eighth of the speed. Make a [[pick]] as soon as you can.",
        },
        {
          h: "Used in",
          list: [
            "[[pick]], [[axe]], [[spade]], [[hammer]] and [[stone-sword]]",
            "[[smelter]] (12), [[campfire]] (4), [[block-shaper]] (6), [[heater]] (10), [[pipe-bench]] (4)",
          ],
        },
      ],
      related: ["pick", "sandstone", "hot-stone"],
    },
    {
      id: "dirt-and-grass",
      name: "Dirt and Grass",
      group: "Ground",
      summary: "The soil of living worlds. A spade moves it quickly, and a hoe turns it into a field.",
      color: "#5d7a3a",
      info: [
        ["Break time", "0.35 s"],
        ["Best tool", "Spade"],
        ["By hand", "7× slower"],
      ],
      body: [
        {
          p: "Grass is dirt with a living top. Both count as soil, which a [[spade]] digs fastest. Grass and dirt are also where [[sapling|saplings]] can be planted, and a [[hoe]] turns them into [[farming|tilled soil]] for crops.",
        },
        {
          p: "Grass blocks carry tall grass you brush through without stopping. Cutting it sometimes drops [[seeds]].",
        },
      ],
      related: ["spade", "hoe", "farming"],
    },
    {
      id: "sand",
      name: "Sand",
      group: "Ground",
      summary: "Loose ground that falls when nothing holds it up. Melt any kind of sand in a smelter and you get glass.",
      color: "#d9c48c",
      info: [
        ["Kinds", "Sand, Rust Sand, Ash Sand, Bone Sand, Regolith"],
        ["Falls", "Yes"],
        ["Smelts into", "Glass"],
      ],
      body: [
        {
          p: "Each kind of world has its own sand, the way each has its own wood. Every one of them falls, which is how you tell it's sand.",
        },
        {
          table: {
            cols: ["Sand", "Found on"],
            rows: [
              ["Sand", "Beaches of temperate, arid and ocean worlds"],
              ["Rust Sand", "Arid worlds"],
              ["Ash Sand", "Scorched worlds"],
              ["Bone Sand", "Frozen worlds"],
              ["Regolith", "Airless worlds. It's what a world with no weather has instead of sand."],
            ],
          },
        },
        {
          h: "Glass",
          p: "Any sand smelts into one [[glass]]. Green worlds have sand on their beaches, so glass is a reason to go to the coast.",
        },
      ],
      related: ["glass", "sandstone", "smelter", "dust-worlds"],
    },
    {
      id: "sandstone",
      name: "Sandstone",
      group: "Ground",
      summary: "Sand that's been under its own weight long enough. It doesn't fall, so it's what a dune stops pouring on.",
      color: "#c7a96b",
      info: [
        ["Break time", "0.75 s"],
        ["Counts as", "Rock in recipes"],
        ["Falls", "No"],
      ],
      body: [
        {
          p: "On worlds whose surface is all sand, the layer underneath is sandstone, about 14 blocks deep before ordinary rock takes over. It gives desert worlds something to build with that isn't running through your fingers, and it counts as [[rock]] for every recipe.",
        },
      ],
      related: ["sand", "rock"],
    },
    {
      id: "snow",
      name: "Snow",
      group: "Ground",
      summary: "The top layer of frozen worlds. Soft and quick to dig.",
      color: "#eef3f8",
      info: [["Break time", "0.25 s"], ["Best tool", "Spade"]],
      body: [{ p: "Snow covers [[ice-world|ice worlds]], [[tundra]] and [[frost-reef|frost reefs]]. It counts as soil, so a [[spade]] makes short work of it." }],
      related: ["ice", "frozen-worlds", "spade"],
    },
    {
      id: "ice",
      name: "Ice",
      group: "Ground",
      summary: "Frozen water, and the ground of the coldest worlds. Four of it go into a Coolant Jacket.",
      color: "#a8d6f2",
      info: [["Break time", "0.7 s"], ["Best tool", "Spade"], ["Used in", "Coolant Jacket (4)"]],
      body: [
        { p: "On [[ice-world|ice worlds]] the water has frozen solid, and there's ice under the snow all the way to an ice core. It counts as soil for digging." },
        { p: "Ice is one of the three ingredients of a [[coolant-jacket]], the frozen-world part of a [[warp-drive]]." },
      ],
      related: ["snow", "coolant-jacket", "frozen-worlds"],
    },
    {
      id: "crystal",
      name: "Crystal",
      group: "Ground",
      summary: "A hard, glassy block covering crystal deserts and crystal moons. The Warp Drive needs four.",
      color: "#7fd8e6",
      info: [["Break time", "1.2 s"], ["Best tool", "Pick"], ["Found on", "Crystal desert, Crystal moon, ruins, vaults"]],
      body: [
        { p: "Crystal is the surface of two world types: the [[crystal-desert]] and the [[crystal-moon]]. Anywhere else, you'll find it in the chests of [[sites|ruins and vaults]]." },
        { p: "Four crystal go into a [[warp-drive]], alongside its four warp parts." },
      ],
      related: ["crystal-desert", "crystal-moon", "warp-drive"],
    },
    {
      id: "hot-stone",
      name: "Hot Stone",
      group: "Ground",
      summary: "Stone down where it's hot: darker, and shot through with red. It's how you know you've reached the deep.",
      color: "#5a2a24",
      info: [["Found in", "The deep"], ["Counts as", "Rock"]],
      body: [{ p: "When the rock around you turns to hot stone, you're at the top of [[the-deep]]. Walk in, see it, and turn round, or put on a [[heat-suit]] and keep going." }],
      related: ["the-deep", "lava", "heat-suit"],
    },
    {
      id: "lava",
      name: "Lava",
      group: "Ground",
      summary: "It pools on the floors of the deep caverns, and it glows.",
      color: "#ff5a1a",
      info: [["Found in", "The deep"], ["Gives off", "Light"]],
      body: [
        { p: "Lava lies on the floors of the big caverns in [[the-deep]] and lights them up. It's one of the few things in the game that gives off light on its own." },
        { p: "A [[geothermal-tap]] set down beside it makes the steadiest power in the game." },
      ],
      related: ["the-deep", "geothermal-tap", "hot-stone"],
    },
    {
      id: "water",
      name: "Water",
      group: "Ground",
      summary: "Lakes and seas you can swim in, fish in, boat across and carry home in a bucket. Not something you can breathe in.",
      color: "#3b78c4",
      info: [["Swim speed", "6"], ["Breathing", "No: oxygen drains"]],
      body: [
        { p: "Water is liquid on temperate worlds, archipelagos, tundra and crystal moons, frozen solid on ice worlds and frost reefs, and missing entirely on dust and scorched worlds." },
        {
          list: [
            "With your head under, [[oxygen]] drains like anywhere else without air.",
            "A [[fishing-rod]] catches the world's [[fish]].",
            "A [[wooden-boat]] gets you across it.",
            "A [[bucket]] carries it, so your fields don't have to be on the shore.",
          ],
        },
      ],
      related: ["fishing", "wooden-boat", "bucket", "farming"],
    },

    // ---------------------------------------------------------------- wood & plants
    {
      id: "wood",
      name: "Wood",
      group: "Wood and plants",
      summary: "Logs from trees, in plain, pale and dark. The first thing you gather and the first thing you build with.",
      color: "#8a5a32",
      info: [
        ["Kinds", "Wood, Pale Wood, Dark Wood"],
        ["Break time", "0.6 s"],
        ["Best tool", "Axe"],
        ["By hand", "5× slower"],
      ],
      body: [
        {
          p: "You can tear a tree down with your bare hands. That's how the game starts. An [[axe]] does it five times faster. Each world grows its own timber, and a log keeps its species: a pale forest builds a pale house.",
        },
        {
          h: "What it becomes",
          list: [
            "**Planks**: sawn boards in the same three colours. Recipes that ask for wood usually take planks too.",
            "**[[wood-plate|Wood plates]]**: flat stock cut at a [[pipe-bench]], 4 per log, for wooden ducts.",
            "Fuel for a [[smelter]]'s firebox.",
          ],
        },
        {
          h: "Used in",
          list: [
            "[[carpenters-bench]] (8), [[campfire]] (4), [[chest]] (8), [[wide-chest]] (18), [[bed]] (6), [[pipe-bench]] (10)",
            "Your first tools, [[torch|torches]] (4 for 1), a [[door]] (6) and a [[wooden-boat]] (10)",
          ],
        },
      ],
      related: ["trees", "axe", "wood-plate", "carpenters-bench"],
    },
    {
      id: "trees",
      name: "Trees",
      group: "Wood and plants",
      summary: "Where wood and leaves come from. They fall when you cut them, and saplings grow new ones.",
      info: [
        ["Drops", "Wood, Leaves, sometimes a Sapling"],
        ["Regrow", "Plant a sapling: 4 minutes"],
        ["Leaf colours", "12"],
      ],
      body: [
        {
          p: "Trees come in round, pine, wide and giant shapes, and every world picks its own leaf colours from twelve (green, lime, olive, autumn, rust, golden, teal, violet, azure, pink, mint and deep green). Cut through the trunk and the tree comes down.",
        },
        {
          h: "Kinds by class",
          table: {
            cols: ["Tree", "Grows on"],
            rows: [
              ["Broadleaf", "Temperate"],
              ["Silverbark", "Temperate, frozen"],
              ["Ice Pine", "Frozen"],
              ["Ironroot", "Arid, scorched"],
              ["Mangrove", "Ocean"],
            ],
          },
          note: "Each world renames its plants, so a Broadleaf might be a Virewood or a Sorrelleaf where you are. The ending stays the same, and the same name always means the same plant.",
        },
        {
          h: "Replanting",
          p: "Plant a [[sapling]] on grass or dirt. It grows into a young tree that can't be broken yet, and becomes a full tree after about four minutes.",
        },
        {
          h: "Leaves",
          p: "Leaves (or plant fibre) fill the scrubber bed of a ship's [[life-support]]: eight of them per unit.",
        },
      ],
      related: ["wood", "sapling", "biomes", "life-support"],
    },
    {
      id: "wild-plants",
      name: "Wild Plants",
      group: "Wood and plants",
      summary: "Grass tufts, flowers, shrubs, bushes, fronds and pods. The ground cover of every world, and some of it bears berries.",
      info: [
        ["Shapes", "Grass Tuft, Flower, Shrub, Bush, Frond, Pod"],
        ["Species", "30"],
        ["Edible", "Berries, from some bushes"],
      ],
      body: [
        {
          p: "Six shapes cover a few dozen species. Which species it is changes only its colour and height. You can pick them up and place them again to decorate.",
        },
        {
          table: {
            cols: ["Shape", "Looks like", "Examples"],
            rows: [
              ["Grass Tuft", "A handful of blades", "Fescue, Rime Grass, Ember Lash, Salt Grass"],
              ["Flower", "A stem with a head of petals", "Bluebell, Kingcup, Foxglove, Glasswort, Cinder Cup, Tide Lily"],
              ["Shrub", "A low woody clump", "Gorse, Heather, Ice Moss, Saltbush"],
              ["Bush", "Chest-high leaf mass, sometimes with berries", "Bramble, Dog Rose, Snowberry, Thorn Bush, Sea Berry"],
              ["Frond", "A tall fan on a stalk. Nothing on Earth.", "Spine Fan, Glass Frond"],
              ["Pod", "A bulb on a stem, with smaller ones beside it", "Lantern Pod, Slag Pod, Brine Pod"],
            ],
          },
        },
        {
          h: "Berries",
          p: "Bramble, Dog Rose, Snowberry, Desert Currant and Sea Berry carry [[berries]] on the outside of the bush. They're the one thing you can eat straight off the plant without regretting it.",
        },
      ],
      related: ["berries", "trees", "crops", "aurora-bloom"],
    },
    {
      id: "aurora-bloom",
      name: "Aurora Bloom",
      group: "Wood and plants",
      summary: "A glowing crystal that grows out of open ground while an aurora is overhead, and is gone by morning.",
      color: "#8cf2e6",
      info: [
        ["Grows", "Under an aurora, at night"],
        ["Lasts", "Until dawn"],
        ["Gives off", "Light"],
      ],
      body: [
        {
          p: "The one reason to be outside after dark. Most nights you're indoors or asleep, so the night worth going out for announces itself from a long way off: a field of blooms lights up a hillside. Cut them while they're up. By dawn there's nothing there.",
        },
        { p: "Auroras are most common on cold worlds. See [[weather]]." },
      ],
      related: ["weather", "night", "frozen-worlds"],
    },

    // ---------------------------------------------------------------- animals
    {
      id: "raw-meat",
      name: "Raw Meat",
      group: "From animals",
      summary: "Dropped by every creature you bring down. It keeps you alive in a pinch, but it's only a meal once it's cooked.",
      color: "#b5524a",
      info: [["Fill", "9"], ["Saturation", "4"], ["Cooks into", "Cooked Meat (fill 38)"]],
      body: [
        { p: "Every animal drops meat, and bigger animals drop more. Eaten raw it's barely worth it. Cook it on a [[campfire]] for four times the fill and over ten times the saturation, or put it in a [[cooking-pot]]." },
      ],
      related: ["food-values", "campfire", "wildlife"],
    },
    {
      id: "hide",
      name: "Hide",
      group: "From animals",
      summary: "Skin from four-legged animals, grazers and hoppers. Two of it tan into Leather.",
      color: "#8a6a4a",
      info: [["Dropped by", "Quads, grazers, hoppers (not tiny ones)"], ["Becomes", "Leather (2 hide)"]],
      body: [{ p: "Turn it into [[leather]] at a [[carpenters-bench]]. Leather does the same job as cloth, so a hunter can make a bed or a suit without ever farming." }],
      related: ["leather", "wildlife", "carpenters-bench"],
    },
    {
      id: "bone",
      name: "Bone",
      group: "From animals",
      summary: "Only the bigger creatures drop it. Ground into Bone Meal, it makes crops grow faster.",
      color: "#e8e2cf",
      info: [["Dropped by", "Creatures of 1.2× size and up"], ["Becomes", "Bone Meal ×3"]],
      body: [{ p: "Grind one bone into three [[bone-meal]] at a [[carpenters-bench]]. It's the first place hunting feeds farming." }],
      related: ["bone-meal", "farming", "wildlife"],
    },
  ],
});
