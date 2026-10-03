(function () {
  // Every world type the game can roll (main.gd _ARCHETYPES). Class is derived
  // the same way Planet.planet_class() does it.
  const GROWTHS = {
    round: "round-crowned trees", pine: "pines", wide: "wide trees", giant: "giant trees",
    coral: "lobed coral", mushroom: "giant mushrooms", dome: "blisters", branch: "staghorn coral",
    tube: "tube sponges", spire: "banded spires",
  };
  const TYPES = [
    ["garden-world", "Garden world", "verdant", "Grass over dirt", "Yes", "Liquid (15–40% of the world)", "None", 0, "", ["giant", "coral", "mushroom", "branch", "wide"], "M",
      "The homely one: green ground, open water and air you can breathe. Your home world is usually something like this, and it grows recognisable trees."],
    ["archipelago", "Archipelago", "verdant", "Grass over dirt", "Yes", "Liquid (72–92% of the world)", "None", 0, "", ["coral", "branch", "tube", "dome"], "M",
      "A temperate world that's mostly drowned. Islands to find rather than a continent to walk across, so a [[wooden-boat]] earns its keep here."],
    ["reef-world", "Reef world", "verdant", "Grass over dirt", "Yes", "Liquid (8–25%)", "None", 0, "rounded swells", ["coral", "branch", "tube", "dome"], "M",
      "Coral country left high and dry: staghorn, tube sponges, lobed coral and blisters, on ground that swells into rounded heads."],
    ["fungal-world", "Fungal world", "verdant", "Grass over dirt", "Yes", "Liquid (5–20%)", "None", 0, "", ["mushroom", "mushroom", "dome"], "M",
      "A forest of mushrooms the size of trees under a dim, purple sky. You can shelter under the caps."],
    ["ice-world", "Ice world", "frozen", "Snow over ice", "Yes", "Frozen (30–60%)", "Cold", 3.5, "terraces", ["pine", "spire", "branch"], "P",
      "Snow over solid ice, all the way down to an ice core. The open water has frozen over, and the cold is serious."],
    ["tundra", "Tundra", "frozen", "Snow over dirt", "Yes", "Liquid (10–30%)", "Cold", 1.5, "", ["pine", "mushroom", "spire"], "P",
      "Cold, but a cold you can live in, and the only frozen world with trees on it."],
    ["frost-reef", "Frost reef", "frozen", "Snow over ice", "Yes", "Frozen (20–40%)", "Cold", 2.5, "", ["branch", "tube"], "P",
      "Frozen seas, with coral-like growths standing up out of the snow."],
    ["desert", "Desert", "dust", "Loose dust (regolith)", "Yes", "None", "Heat", 2.0, "dunes", [], "H",
      "Dunes of loose dust under an orange sky, with no water and nothing growing."],
    ["rust-barrens", "Rust barrens", "dust", "Dust over dirt", "Yes", "None", "Heat", 1.2, "terraces", ["tube"], "H",
      "Dust you can stand on without much of a suit: warm, dry and nearly harmless. The desert you'd actually build a base on."],
    ["ash-plain", "Ash plain", "dust", "Dust over rock", "Yes", "None", "Heat", 3.2, "spires", ["spire"], "Y",
      "Dust with a sky over it, and the sky is the problem. Hot enough to count as scorched."],
    ["spire-forest", "Spire forest", "dust", "Dust over rock", "Yes", "None", "Heat", 1.8, "spires", ["spire"], "H",
      "Dust between needles of rock, with banded spires growing among them like trees."],
    ["dust-moon", "Dust moon", "dust", "Loose dust (regolith)", "No", "None", "Cold", 2.5, "craters", [], "D",
      "Airless, freezing and nothing but dust. The moon you land on for its ores and leave again."],
    ["red-mesas", "Red mesas", "scorched", "Bare rock over dirt", "Yes", "None", "Heat", 4.5, "terraces", ["dome"], "Y",
      "Stepped red rock under a burning sky. The hottest surface in the game."],
    ["blister-fields", "Blister fields", "scorched", "Bare rock over dirt", "Yes", "None", "Heat", 3.0, "rounded swells", ["dome"], "Y",
      "Hot ground heaving up in domes, with hollow blisters growing out of it."],
    ["glass-mesas", "Glass mesas", "scorched", "Bare rock", "Yes", "None", "Heat", 3.6, "terraces", ["spire", "dome"], "Y",
      "Stepped shelves of baked stone with needles standing on them."],
    ["crystal-desert", "Crystal desert", "", "Crystal over dust", "Yes", "None", "None", 0, "dunes", ["spire"], "H",
      "Dust with something growing out of it that isn't alive. Harmless, and one of the two places crystal covers the surface."],
    ["crystal-moon", "Crystal moon", "", "Crystal over rock", "No", "Liquid (60–95%)", "None", 0, "craters", ["spire"], "O",
      "An airless moon with a crystal crust and a great deal of water. The only ocean-class world."],
    ["rock-moon", "Rock moon", "", "Bare rock", "No", "None", "Cold", 3.0, "craters", [], "D",
      "Cratered rock with no air and nothing alive. Barren in every sense."],
  ];
  const FAMILY = { verdant: "living-worlds", frozen: "frozen-worlds", dust: "dust-worlds", scorched: "scorched-worlds" };
  const FAMILY_NAME = { verdant: "Living world", frozen: "Frozen world", dust: "Dust world", scorched: "Scorched world" };
  const CLASS = { M: "Temperate (M)", P: "Frozen (P)", H: "Arid (H)", Y: "Scorched (Y)", O: "Ocean (O)", D: "Barren (D)" };

  const typeEntries = TYPES.map(([id, name, fam, ground, air, water, hz, dps, relief, growths, cls, text]) => ({
    id,
    name,
    group: "World types",
    summary: text,
    tags: [cls, FAMILY_NAME[fam] || "", ...growths.map((g) => GROWTHS[g])],
    info: [
      ["Family", fam ? `[[${FAMILY[fam]}|${FAMILY_NAME[fam]}]]` : "None"],
      ["Class", `[[planet-classes|${CLASS[cls]}]]`],
      ["Ground", ground],
      ["Air", air],
      ["Water", water],
      ["Hazard", hz === "None" ? "None" : `[[hazards|${hz}]], ${dps} damage/sec`],
      ...(relief ? [["Terrain", relief]] : []),
    ],
    body: [
      { p: text },
      growths.length
        ? { h: "What grows here", p: `Strange worlds pick their growths from this pool, one per region: ${[...new Set(growths)].map((g) => GROWTHS[g]).join(", ")}. See [[biomes]].` }
        : { h: "What grows here", p: "Nothing. No trees, no growths." },
      fam
        ? { h: "Why visit", p: `It's a ${FAMILY_NAME[fam].toLowerCase()}, so it can hold that family's [[signature-ores|signature ore]], one of the four the [[warp-drive]] needs.` }
        : { h: "Why visit", p: "It's not part of any family, so it has no signature ore. Visit it for its crystal, its ordinary ores, and the view." },
    ],
    related: [FAMILY[fam], "planet-classes", "world-types", "hazards"].filter(Boolean),
  }));

  WIKI.add({
    id: "worlds",
    name: "Worlds",
    color: "#6fb7ff",
    blurb: "Star systems, planet families and classes, every type of world, and what you'll find on them.",
    intro:
      "Every world is generated from a seed: its ground, sky, water, weather, ores, plants and wildlife. These pages explain how worlds are sorted and what each kind is like.",
    groups: [
      { name: "How worlds work" },
      { name: "Planet families", blurb: "Every home system has at least one world of each family, and each family holds one signature ore the Warp Drive needs." },
      { name: "World types", blurb: "Eighteen kinds of world the game can generate. Several are moons." },
      { name: "On a world" },
    ],
    entries: [
      {
        id: "star-systems",
        name: "Star Systems",
        group: "How worlds work",
        summary: "The galaxy holds 24 star systems with 4 to 6 planets each. Only the one you're in is ever built.",
        info: [
          ["Systems", "24 per galaxy"],
          ["Planets", "4 to 6 per system"],
          ["Travel", "Warp Drive"],
        ],
        body: [
          {
            p: "A galaxy is generated from one seed. Each system has a name (like Tauuna), a seed of its own, a number of planets and a level of life. Only your current system's planets are actually built. Every other system stays a short summary until you [[warp-travel|warp]] there.",
          },
          {
            h: "Life in a system",
            table: {
              cols: ["Level", "Chance", "What it means"],
              rows: [
                ["Uninhabited", "28%", "No wildlife at all"],
                ["Wildlife", "27%", "Animals, but no intelligent life"],
                ["Primitive Colony", "30%", "One settled world"],
                ["Advanced Empire", "15%", "Several colonised worlds"],
              ],
            },
            note: "Settlements are switched off in the current alpha, so for now this mostly decides whether there's wildlife.",
          },
          {
            h: "Your home system",
            p: "A new game always starts in a system with at least one world from each [[planet-families|family]], so everything the [[warp-drive]] needs is within reach before you ever leave.",
          },
        ],
        related: ["planet-families", "warp-travel", "warp-drive"],
      },
      {
        id: "planet-families",
        name: "Planet Families",
        group: "How worlds work",
        summary: "Worlds come in four families (living, dust, frozen and scorched), and each one alone holds a particular signature ore.",
        info: [
          ["Families", "4"],
          ["Signature ores", "One per family"],
          ["Needed for", "The Warp Drive"],
        ],
        body: [
          {
            p: "Most [[world-types]] belong to a family. The family decides which [[signature-ores|signature ore]] can turn up there: an ore so good at one property that no ordinary ore comes close.",
          },
          {
            table: {
              cols: ["Family", "Signature ore is best at", "Used for"],
              rows: [
                ["[[living-worlds]]", "Energy", "[[warp-coil]]"],
                ["[[dust-worlds]]", "Combustion", "[[ignition-charge]]"],
                ["[[frozen-worlds]]", "Reactivity", "[[coolant-jacket]]"],
                ["[[scorched-worlds]]", "Density", "[[containment-shell]]"],
              ],
            },
          },
          {
            p: "Building a [[warp-drive]] means visiting all four. A few world types (crystal deserts and the crystal and rock moons) belong to no family.",
          },
        ],
        related: ["signature-ores", "warp-drive", "planet-classes"],
      },
      {
        id: "planet-classes",
        name: "Planet Classes",
        group: "How worlds work",
        summary: "A one-letter label for what a world is like to stand on: temperate, frozen, arid, scorched, ocean or barren.",
        info: [
          ["Classes", "M, P, H, Y, O, D"],
          ["Decides", "Which plants and crops grow"],
        ],
        body: [
          {
            p: "A world's class is never stored. It's worked out from what the world already is: whether it has air, what its water is doing, and whether it's trying to freeze or cook you. You can work out a planet's class just by standing on it and looking around.",
          },
          {
            table: {
              cols: ["Class", "Name", "How you know"],
              rows: [
                ["M", "Temperate", "Air, liquid water, no hazard"],
                ["P", "Frozen", "Air, and it's cold"],
                ["H", "Arid", "Air, warm or dry but not deadly hot"],
                ["Y", "Scorched", "Air, and the heat does 3+ damage a second"],
                ["O", "Ocean", "No air, but liquid water"],
                ["D", "Barren", "No air and no water. Nothing lives here."],
              ],
            },
          },
          {
            h: "Why it matters",
            p: "Class decides which [[crops]] and wild plants can live on a world, and which kind of sand its beaches are made of. See [[sand]].",
          },
        ],
        related: ["planet-families", "world-types", "crops", "sand"],
      },
      {
        id: "world-types",
        name: "All World Types",
        group: "How worlds work",
        summary: "Every kind of world the game can generate, side by side: family, class, air, water and hazard.",
        info: [["World types", String(TYPES.length)], ["Moons", "3"]],
        body: [
          {
            table: {
              cols: ["World", "Family", "Class", "Air", "Hazard"],
              rows: TYPES.map(([id, name, fam, , air, , hz, dps, , , cls]) => [
                `[[${id}|${name}]]`,
                fam ? FAMILY_NAME[fam] : "—",
                cls,
                air,
                hz === "None" ? "None" : `${hz} ${dps}/s`,
              ]),
            },
          },
        ],
        related: ["planet-families", "planet-classes", "hazards"],
      },

      // ---------------------------------------------------------------- families
      {
        id: "living-worlds",
        name: "Living Worlds",
        group: "Planet families",
        summary: "Green, wet and safe. Home to the best conductor there is, the ore a Warp Coil is wound from.",
        color: "#59d9ff",
        info: [
          ["Family", "Verdant"],
          ["Signature ore", "Best at Energy"],
          ["Ore endings", "-volt, -flux, -spark"],
          ["Warp part", "Warp Coil"],
        ],
        body: [
          { p: "Garden worlds, archipelagos, reef worlds and fungal worlds. Plenty of air, water and food, and nothing in the climate trying to kill you." },
          { h: "Signature ore", p: "Living worlds alone can hold an ore ending in **-volt**, **-flux** or **-spark**, with Energy of 88–100. Bars of it wound with wire make a [[warp-coil]]." },
          { h: "World types", list: ["[[garden-world]]", "[[archipelago]]", "[[reef-world]]", "[[fungal-world]]"] },
        ],
        related: ["planet-families", "signature-ores", "warp-coil"],
      },
      {
        id: "dust-worlds",
        name: "Dust Worlds",
        group: "Planet families",
        summary: "Loose dust, little or no water, and usually some heat. Home to the fiercest fuel there is.",
        color: "#f26b1f",
        info: [
          ["Family", "Dust"],
          ["Signature ore", "Best at Combustion"],
          ["Ore endings", "-pyre, -char, -cinder"],
          ["Warp part", "Ignition Charge"],
        ],
        body: [
          { p: "Deserts, rust barrens, ash plains, spire forests and dust moons. Dust worlds are where glass comes from, since their loose surface is [[sand]]." },
          { h: "Signature ore", p: "An ore ending in **-pyre**, **-char** or **-cinder**, black with soot, with Combustion of 88–100. Smelted down to [[coal]], it packs an [[ignition-charge]]." },
          { h: "World types", list: ["[[desert]]", "[[rust-barrens]]", "[[ash-plain]]", "[[spire-forest]]", "[[dust-moon]]"] },
        ],
        related: ["planet-families", "signature-ores", "ignition-charge", "coal"],
      },
      {
        id: "frozen-worlds",
        name: "Frozen Worlds",
        group: "Planet families",
        summary: "Snow, ice and cold. Home to an ore that reacts at a touch, the one a Coolant Jacket needs.",
        color: "#b3e6ff",
        info: [
          ["Family", "Frozen"],
          ["Signature ore", "Best at Reactivity"],
          ["Ore endings", "-rime, -quell, -frost"],
          ["Warp part", "Coolant Jacket"],
        ],
        body: [
          { p: "Ice worlds, tundra and frost reefs. It snows here, the water is often frozen, and the cold hurts. Bring an [[insulated-suit]] or build a [[climate-unit]]." },
          { h: "Signature ore", p: "An ore ending in **-rime**, **-quell** or **-frost**, with Reactivity of 88–100. A sheet of it, with glass and ice, makes a [[coolant-jacket]]." },
          { h: "World types", list: ["[[ice-world]]", "[[tundra]]", "[[frost-reef]]"] },
        ],
        related: ["planet-families", "signature-ores", "coolant-jacket", "ice"],
      },
      {
        id: "scorched-worlds",
        name: "Scorched Worlds",
        group: "Planet families",
        summary: "Bare rock under a burning sky. Home to metal so dense the heat of a warp can't move it.",
        color: "#8c5a4d",
        info: [
          ["Family", "Scorched"],
          ["Signature ore", "Best at Density"],
          ["Ore endings", "-slag, -mass, -plumb"],
          ["Warp part", "Containment Shell"],
        ],
        body: [
          { p: "Red mesas, blister fields and glass mesas. The hottest surfaces in the game: plan to be protected before you land." },
          { h: "Signature ore", p: "An ore ending in **-slag**, **-mass** or **-plumb**, with Density of 88–100. Four plates of it make a [[containment-shell]]." },
          { h: "World types", list: ["[[red-mesas]]", "[[blister-fields]]", "[[glass-mesas]]"] },
        ],
        related: ["planet-families", "signature-ores", "containment-shell", "hazards"],
      },

      ...typeEntries,

      // ---------------------------------------------------------------- on a world
      {
        id: "biomes",
        name: "Biomes",
        group: "On a world",
        summary: "Regions within a world, from wetland and meadow to highland and barrens, each with its own mix of trees, grass and flowers.",
        info: [["Kinds", "7"]],
        body: [
          {
            p: "A world isn't one landscape. It's split into regions, and each region is one of these. They differ in how many trees grow there, how thick the grass is, how many flowers there are, and how hilly the ground gets.",
          },
          {
            table: {
              cols: ["Biome", "Trees", "Grass", "Flowers", "Ground"],
              rows: [
                ["Wetland", "Some", "Thick", "Plenty", "Low and flat"],
                ["Meadow", "Few", "Very thick", "Lots", "Gentle"],
                ["Woodland", "Dense", "Normal", "Some", "Rolling"],
                ["Heath", "Few", "Sparse", "Lots of low scrub", "Rolling"],
                ["Highland", "Some", "Sparse", "Few", "High and steep"],
                ["Steppe", "Very few", "Thin", "Barely", "Raised"],
                ["Barrens", "None", "None", "None", "Rough"],
              ],
            },
          },
          {
            h: "Growths on strange worlds",
            p: "Away from home, most worlds grow something other than trees: giant mushrooms, blisters, staghorn coral, tube sponges or banded spires. Each region picks one from its world's pool, so you can walk from a mushroom forest into a field of spires on the same planet.",
          },
        ],
        related: ["world-types", "trees", "wild-plants"],
      },
      {
        id: "weather",
        name: "Weather",
        group: "On a world",
        summary: "Rain, snow, fog and auroras. Each world randomly gets its own mix, and \"never\" is a real answer.",
        info: [
          ["Kinds", "Rain, snow, fog, aurora"],
          ["Spells", "A few minutes each"],
        ],
        body: [
          {
            p: "What a world's weather is like is decided randomly when the world is made: how often it rains, how often fog comes in, and whether its nights have auroras. Frozen worlds, and any world whose water is ice, get snow instead of rain. Arid and scorched worlds rarely see rain, if ever. Worlds without air get no weather at all.",
          },
          {
            p: "Auroras belong to cold worlds, where they're common, and only turn up now and then anywhere else. Some worlds with meadows also get fireflies after dark, in a colour of the world's own.",
          },
          {
            p: "What the weather is doing right now changes every few minutes, and it drifts in and out rather than switching. Everyone in a co-op game sees the same rain at the same moment.",
          },
          {
            h: "Weather that matters",
            list: [
              "**Auroras** grow [[aurora-bloom|Aurora Blooms]] out of open ground: crystals that light up a hillside and are gone by morning.",
              "**Cloud and rain** cut what a [[solar-array]] makes.",
              "**Still days** stop a [[wind-rotor]].",
            ],
          },
        ],
        related: ["aurora-bloom", "night", "solar-array", "wind-rotor"],
      },
      {
        id: "sites",
        name: "Sites",
        group: "On a world",
        summary: "Crashed ships and derelict outposts on the surface, ruins and vaults below it, each with chests of loot.",
        info: [
          ["Kinds", "Crashed Ship, Derelict Outpost, Ruins, Vault"],
          ["Loot", "Chests, plus this world's ores"],
        ],
        body: [
          {
            p: "Things left behind, worth going to find. How common each kind of site is changes randomly from world to world, and zero is one of the answers: some worlds have no wrecks at all, and finding that out is part of the world.",
          },
          {
            table: {
              cols: ["Site", "Where", "What you might find"],
              rows: [
                ["Crashed Ship", "Surface", "Hull, glass, wire, batteries, lanterns, and sometimes thrusters, a cockpit, life support or (rarely) a warp drive"],
                ["Derelict Outpost", "Surface", "Torches, lanterns, cooked meat, cloth, first tools, hull, a battery"],
                ["Ruins", "Underground", "Crystal, torches, bone, lanterns"],
                ["Vault", "Underground", "Batteries, thrusters, crystal, lanterns, life support, and a good chance of a warp drive"],
              ],
            },
          },
          {
            note: "Every site also has some of the world's own ores in its chests.",
          },
        ],
        related: ["warp-drive", "thruster", "the-crash"],
      },
    ],
  });
})();
