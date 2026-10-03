WIKI.add({
  id: "stations",
  name: "Crafting Stations",
  color: "#f2a641",
  blurb: "Benches, furnaces and presses: what each one costs to put down and everything it makes.",
  intro:
    "Almost everything is made at a station. You build stations from the station ring: pick one and its cost comes out of your pockets when it lands. Early stations want what you can pick up with your hands; later ones want what the earlier ones made.",
  groups: [
    { name: "Camp" },
    { name: "Crafting", blurb: "Roughly in the order you'll build them." },
    { name: "Storage" },
  ],
  entries: [
    // ---------------------------------------------------------------- camp
    {
      id: "campfire",
      name: "Campfire",
      group: "Camp",
      summary: "The cheapest station in the game: somewhere to cook, so going hungry is never gated behind a workshop.",
      info: [
        ["Build cost", "4 Wood, 4 Rock"],
        ["Makes", "Cooked meat, fish and vegetables"],
        ["Gives off", "Light"],
      ],
      body: [
        {
          h: "Recipes",
          table: {
            cols: ["Makes", "From"],
            rows: [
              ["Cooked Meat", "1 [[raw-meat]]"],
              ["Cooked Fish", "1 Raw Fish"],
              ["Cooked Vegetables", "2 [[crops|Crop]]"],
              ["Berry Mash ×2", "3 [[berries]] + 1 Crop"],
            ],
          },
        },
        {
          p: "Raw food barely fills you; cooked food is what actually feeds you. See [[food-values]]. A campfire also lights up the area around it.",
        },
      ],
      related: ["food-values", "cooking-pot", "raw-meat"],
    },
    {
      id: "cooking-pot",
      name: "Cooking Pot",
      group: "Camp",
      summary: "Put up to five foods in and see what comes out. Dishes fill less than their parts but last about three times as long.",
      info: [
        ["Build cost", "4 Rock, 3 Wood, 2 Metal Hull"],
        ["Slots", "5"],
        ["Makes", "Dishes"],
      ],
      body: [
        {
          p: "There's no recipe list. What you put in is the choice. Cooking takes a little off the fill (82% of what went in) and multiplies the saturation by 2.6, plus 22% for every different kind of food in the pot. A pot of five identical berries is berries. A fish, a crop and some berries is a meal.",
        },
        {
          h: "What you'll get",
          table: {
            cols: ["Dish", "What went in"],
            rows: [
              ["Hearty Stew", "Four or more different foods"],
              ["Surf and Turf", "Meat and fish"],
              ["Meat Stew", "Meat and vegetables"],
              ["Fish Stew", "Fish and vegetables"],
              ["Roast", "Only meat"],
              ["Fish Supper", "Only fish"],
              ["Vegetable Stew", "Two or more kinds of vegetable"],
              ["Simple Pottage", "One kind of vegetable"],
            ],
          },
        },
      ],
      related: ["food-values", "hunger", "campfire"],
    },
    {
      id: "bed",
      name: "Bed",
      group: "Camp",
      summary: "Where you wake up if you black out, a way to sleep through the night, and the fastest way to heal.",
      info: [
        ["Build cost", "6 Wood, 4 Cloth or Leather"],
        ["Heals", "9 health per second"],
        ["Sets", "Your respawn point"],
      ],
      body: [
        {
          list: [
            "**Respawn point**: black out and you'll [[respawning|wake up here]] instead of back at your crash site.",
            "**Sleep**: at night, lie down and sleep until morning.",
            "**Heal**: lying in it heals 9 health a second, three times the normal rate, however hungry you are.",
          ],
        },
        {
          p: "The soft part can be [[cloth]] or [[leather]], so you can make a bed whether you farm or hunt.",
        },
      ],
      related: ["respawning", "health", "cloth", "leather", "night"],
    },

    // ---------------------------------------------------------------- crafting
    {
      id: "carpenters-bench",
      name: "Carpenter's Bench",
      group: "Crafting",
      summary: "The bootstrap bench. Everything on it is made from things you can gather with your hands: tools, torches, cloth, a boat.",
      info: [
        ["Build cost", "8 Wood"],
        ["Makes", "First tools, light, soft goods, suits"],
      ],
      body: [
        { p: "Usually the first station you put down. Its recipes ask for plain gathered material, so it's the bench you can reach with nothing." },
        {
          h: "Tools and weapons",
          table: {
            cols: ["Makes", "From"],
            rows: [
              ["[[pick]]", "2 Wood, 3 Rock"],
              ["[[axe]]", "2 Wood, 3 Rock"],
              ["[[spade]]", "2 Wood, 2 Rock"],
              ["[[stone-sword]]", "1 Wood, 3 Rock"],
              ["[[hammer]]", "2 Wood, 3 Rock"],
              ["[[hoe]]", "3 Wood"],
              ["[[fishing-rod]]", "3 Planks, 2 Plant Fibre"],
            ],
          },
        },
        {
          h: "Building and light",
          table: {
            cols: ["Makes", "From"],
            rows: [
              ["[[anvil]]", "3 Ingots"],
              ["[[torch]] ×4", "1 Wood"],
              ["[[ember-torch]] ×6", "1 Ingot, 1 Wood"],
              ["[[lantern]] ×2", "1 Torch, 2 Bars, 1 Glass"],
              ["[[door]]", "6 Wood or Planks"],
              ["[[wooden-boat]]", "10 Wood"],
            ],
          },
        },
        {
          h: "Soft goods and suits",
          table: {
            cols: ["Makes", "From"],
            rows: [
              ["[[cloth]]", "4 Plant Fibre"],
              ["[[leather]]", "2 Hide"],
              ["[[bone-meal]] ×3", "1 Bone"],
              ["[[heat-suit]]", "3 Sheets, 4 Leather or Cloth, 2 Wire"],
              ["[[insulated-suit]]", "2 Ingots, 3 Cloth or Leather"],
            ],
          },
        },
      ],
      related: ["first-hour", "pick", "anvil", "wood"],
    },
    {
      id: "smelter",
      name: "Smelter",
      group: "Crafting",
      summary: "The fire. Ore goes in, ingots or coal come out. It also melts sand into glass and turns scrap back into ingots.",
      info: [
        ["Build cost", "12 Rock, 4 Wood"],
        ["Smelt time", "1.5 s per ore"],
        ["Fuel", "Wood, planks, wood plates, coal, fuel ore"],
      ],
      body: [
        {
          p: "A smelter only cooks while something is burning under it. Keep its **firebox** stocked with wood, planks, [[wood-plate|wood plates]], [[coal]] or a fuel ore. The fire only burns while there's work to do, so stoking it early doesn't waste anything.",
        },
        {
          h: "What it does",
          table: {
            cols: ["Put in", "Get out"],
            rows: [
              ["A metal [[ores|ore]]", "An [[ingot]]"],
              ["A fuel ore (Combustion 55+)", "[[coal]]"],
              ["Any [[sand]]", "1 [[glass]]"],
              ["[[scrap]]", "The ingot it was beaten from"],
              ["2 Ingots + 3 [[plate|Plates]]", "[[alloy-plating]] ×2"],
            ],
          },
        },
      ],
      related: ["ores", "ingot", "coal", "glass", "anvil"],
    },
    {
      id: "anvil",
      name: "Anvil",
      group: "Crafting",
      summary: "Put an ingot on it and strike it with a hammer. Each blow beats it further: bar, then sheet, then plate. One too many and it cracks.",
      info: [
        ["Made at", "Carpenter's Bench (3 Ingots)"],
        ["Needs", "A Hammer"],
        ["Stages", "Ingot → Bar → Sheet → Plate → Scrap"],
      ],
      body: [
        {
          p: "Smithing is how metal becomes parts. Lay an [[ingot]] on the anvil and hit it with a [[hammer]]. Take it off at whichever stage you want:",
          steps: [
            "**[[bar]]**: wire, machine cores, tools and drills.",
            "**[[sheet]]**: casings for batteries, circuitry, buckets and suits.",
            "**[[plate]]**: what machines are built from. One ingot gives 2 to 5 plates, depending on the ore.",
            "One more blow and it starts **cracking** (you still get plate). Hit it again and it's [[scrap]].",
          ],
        },
        {
          h: "How many blows",
          p: "Harder ores take more strikes per stage. A typical common ore goes to bar in 2, sheet in 4 and plate in about 7. The hardest exotics take roughly twice that.",
        },
        {
          note: "Scrap isn't wasted: a [[smelter]] turns it back into the ingot it came from.",
        },
      ],
      related: ["hammer", "ingot", "bar", "sheet", "plate", "scrap"],
    },
    {
      id: "press",
      name: "Press",
      group: "Crafting",
      summary: "A bed with four spots and a ram. Lay metal parts on the bed, pull the lever, and if they match a recipe the ram stamps them into something.",
      info: [
        ["Build cost", "4 Plates, 2 Bars"],
        ["Bed", "4 spots"],
        ["Time", "1.6 s per part"],
      ],
      body: [
        {
          p: "No buttons and no list: what's on the bed is the recipe. The **first** part listed is where the result gets its material from, so a drill is as good as its bar and a battery holds what its ingot can. \"Ingot\" means any ingot.",
        },
        {
          h: "Recipes",
          table: {
            cols: ["Makes", "Parts on the bed"],
            rows: [
              ["[[metal-hull]]", "4 Plate"],
              ["[[wire]] ×2–14", "1 Bar"],
              ["[[circuitry]] ×2", "1 Sheet, 2 Wire"],
              ["[[machine-core]]", "2 Bar, 2 Plate"],
              ["[[battery]]", "1 Ingot, 2 Sheet"],
              ["[[dense-cell]]", "1 Ingot, 2 Sheet, 1 Circuitry"],
              ["[[pack-cell]]", "1 Sheet, 2 Wire"],
              ["[[jetpack]]", "2 Sheet, 2 Circuitry, 2 Bar"],
              ["[[fuel-rod]]", "2 Ingot, 1 Sheet"],
              ["[[solar-panel]] ×2", "1 Ingot, 2 Glass"],
              ["[[bucket]]", "2 Sheet"],
              ["[[drill]]", "1 Bar, 3 Circuitry"],
              ["[[pulse-pistol]]", "1 Sheet, 3 Circuitry"],
              ["[[melee-weapon]]", "2 Bar, 1 Plate"],
            ],
          },
        },
      ],
      related: ["anvil", "circuitry", "metal-hull", "wire"],
    },
    {
      id: "pipe-bench",
      name: "Pipe Bench",
      group: "Crafting",
      summary: "A saw at one end and rollers at the other. Cut logs into flat stock, then roll flat stock into duct.",
      info: [
        ["Build cost", "10 Wood, 4 Rock"],
        ["Saw", "1 log → 4 Wood Plates"],
        ["Time", "1.2 s per part"],
      ],
      body: [
        {
          p: "It has three places, each with one job: the **saw** takes logs, the **bed** holds flat stock (wood plates, metal plates, glass, bars), and the **rollers** turn what's on the bed into pipe. Wood, glass and metal all go the same way through.",
        },
        {
          h: "Rolling",
          table: {
            cols: ["Makes", "On the bed"],
            rows: [
              ["[[wooden-duct]] ×4", "4 Wood Plate"],
              ["[[reinforced-duct]] ×4", "3 Wood Plate, 1 Bar"],
              ["[[metal-duct]] ×4", "1 Plate"],
              ["[[glass-duct]] ×4", "2 Glass"],
            ],
          },
        },
      ],
      related: ["ducts", "wood-plate", "wooden-duct"],
    },
    {
      id: "block-shaper",
      name: "Block Shaper",
      group: "Crafting",
      summary: "Load a plain block and it offers every shape that material can take: slabs, stairs and more.",
      info: [
        ["Build cost", "8 Wood, 6 Rock"],
        ["Shapes", "Slabs, stairs (straight and corner)"],
      ],
      body: [
        {
          p: "The shaper has no recipe list. You load a block and it offers whatever shapes that material supports.",
        },
        {
          h: "Materials that shape",
          p: "Rock, dirt, grass, regolith, ice, snow, crystal, [[metal-hull]], all three woods, all three plank colours, and [[glass]].",
        },
        {
          p: "Slabs of the same material stack into one block, and stairs come straight or as corners and can be placed upside down.",
        },
      ],
      related: ["carpenters-bench", "metal-hull", "glass"],
    },
    {
      id: "shipworks",
      name: "Shipworks",
      group: "Crafting",
      summary: "Where ship systems are built: thrusters, life support, the regulator, and the Warp Drive and its four parts.",
      info: [
        ["Build cost", "20 Plates, 6 Alloy Plating"],
        ["Makes", "Ship systems"],
      ],
      body: [
        {
          p: "Nothing here is just \"so much alloy\". Each system is built from what it's actually made of, gathered along different lines: the press, the anvil, the smelter, the ground. So each one is a small project of its own.",
        },
        {
          h: "Recipes",
          table: {
            cols: ["Makes", "From"],
            rows: [
              ["[[thruster]]", "1 Machine Core, 2 Alloy, 2 Wire, 2 Coal"],
              ["[[life-support]]", "1 Machine Core, 4 Glass, 2 Circuitry, 8 Leaves or Fibre"],
              ["[[regulator]]", "3 Circuitry, 1 Alloy, 4 Wire"],
              ["[[warp-coil]]", "2 Bars (Energy 80+), 4 Wire"],
              ["[[ignition-charge]]", "2 Coal (Combustion 85+), 1 Sheet"],
              ["[[coolant-jacket]]", "1 Sheet (Reactivity 80+), 2 Glass, 4 Ice"],
              ["[[containment-shell]]", "4 Plates (Density 85+)"],
              ["[[warp-drive]]", "The four parts above, 2 Machine Cores, 6 Circuitry, 4 Crystal"],
            ],
          },
        },
      ],
      related: ["ship-building", "warp-drive", "alloy-plating"],
    },

    // ---------------------------------------------------------------- storage
    {
      id: "chest",
      name: "Wooden Chest",
      group: "Storage",
      summary: "A small box. It holds what it holds, and two side by side are two boxes, not a bigger one.",
      info: [["Build cost", "8 Wood"], ["Slots", "12"]],
      body: [{ p: "Deliberately small: your first place to put things down. When one box isn't enough and you don't have metal to spare, build a [[wide-chest]]." }],
      related: ["wide-chest", "cargo-module", "ducts"],
    },
    {
      id: "wide-chest",
      name: "Wide Chest",
      group: "Storage",
      summary: "Two chests' worth of space under one lid.",
      info: [["Build cost", "18 Wood"], ["Slots", "24"]],
      body: [{ p: "The same idea as a [[chest]], built properly, for when one box isn't enough and you don't yet have metal to spare." }],
      related: ["chest", "cargo-module"],
    },
    {
      id: "cargo-module",
      name: "Cargo Module",
      group: "Storage",
      summary: "The only container that joins: set modules against each other and they open as one store.",
      info: [
        ["Build cost", "5 Plates, 3 Wire, 1 Circuitry"],
        ["Slots", "16 each"],
        ["Joins up to", "4 modules (64 slots)"],
      ],
      body: [
        {
          p: "On its own a Cargo Module barely beats a chest. Four of them standing together open as a single 64-slot hold, which beats everything. That's what you're paying plate, wire and a circuit for. Standing four together earns the \"A Proper Hold\" [[advancements|advancement]].",
        },
      ],
      related: ["chest", "wide-chest", "ducts"],
    },
  ],
});
