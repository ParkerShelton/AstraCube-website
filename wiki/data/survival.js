WIKI.add({
  id: "survival",
  name: "Survival",
  color: "#ef5a5f",
  blurb: "Staying alive after the crash: health, air, hunger, heat and cold, and the deep.",
  intro:
    "You wake up in a wrecked lander with nothing. These pages cover the first hour, the three bars that keep you alive, and the things on a world that are trying to kill you.",
  groups: [
    { name: "Getting started" },
    { name: "Your vitals", blurb: "Three bars keep you alive. Let any of them run out and you start taking damage." },
    { name: "Dangers" },
    { name: "Shelter" },
  ],
  entries: [
    // ---------------------------------------------------------------- getting started
    {
      id: "the-crash",
      name: "The Crash",
      group: "Getting started",
      summary: "Every new world starts the same way: face down in a wrecked lander, with a computer in the nose telling you what's broken.",
      info: [
        ["Where", "Your home world"],
        ["Always intact", "The nose and its computer"],
        ["Can be missing", "Wings, tail, spine, belly, power, scrubber"],
        ["In the wreck", "Salvaged Journal, a supply chest"],
        ["Goal", "Seal the cabin, then get her flying"],
      ],
      body: [
        {
          p: [
            "Every new game opens with your lander on its belly and pieces torn off it. What broke is random for every new world: one wreck loses a wing and its tail, the next is nearly whole but has nothing left to power it. So the repair is different every time.",
            "The nose never breaks. The ship's computer lives there, and it keeps a checklist of what the ship still needs. Holographic outlines show where each missing part **can** go. They're a suggestion, not a rule: you can put parts wherever you like, as long as the ship still meets the [[ship-building|requirements to fly]].",
          ],
        },
        {
          h: "What's in the wreck",
          list: [
            "**The computer** in the nose: your repair checklist, and later the ship's log.",
            "**A supply chest** beside the console with whatever survived the landing.",
            "**A salvaged journal**: the approach survey you wrote on the way down. Reading it is the first [[advancements|advancement]].",
            "**Cracked plate**: split hull lying around the crash site. It crumbles to nothing when you break it, but it's worth breaking: the pieces torn off the ship came down on top of things, and a cracked plate can be hiding a spare [[thruster]] or a chest of supplies underneath. Check under and around the wreckage.",
          ],
        },
        {
          h: "Fixing her",
          p: "Nothing about the repair is scripted. You fix the ship with the ordinary game: [[metal-hull]] blocks to fill the gaps, a [[door]] in the doorway, and some [[thruster|Thrusters]] on the tail. Only the cabin has to be airtight to fly; the wings and tail don't count towards the seal. [[first-hour]] walks you through getting the materials, and [[ship-building]] explains everything a ship needs before she'll fly.",
        },
      ],
      related: ["first-hour", "ship-building", "advancements", "metal-hull"],
    },
    {
      id: "first-hour",
      name: "Your First Hour",
      group: "Getting started",
      summary: "A step-by-step route from bare hands to a sealed cabin, following the game's own tutorial line.",
      info: [
        ["Start with", "Nothing but your hands"],
        ["First station", "Carpenter's Bench (8 wood)"],
        ["First goal", "A cabin that holds air"],
      ],
      body: [
        {
          p: "The game doesn't hand out quests, but its \"Getting Down\" [[advancements|advancement]] tree is a straight line through the first evening. This is that line.",
        },
        {
          h: "The route",
          steps: [
            "**Read the journal** in the wreck. It's your survey of the world from orbit.",
            "**Punch down a tree.** Bare hands are slow but they do get [[wood]].",
            "**Open the build ring** to see what wood can make.",
            "**Put down a [[carpenters-bench]]** for 8 wood.",
            "**Make a [[pick]]** (2 wood, 3 rock). Bare hands can break rock slowly, but they can't get ore at all.",
            "**Dig out some [[ores|ore]].**",
            "**Build a [[smelter]]** (12 rock, 4 wood) and feed its firebox wood.",
            "**Smelt ore into an [[ingot]].** If the ore was a fuel ore you'll get [[coal]] instead.",
            "**Make a [[hammer]] and an [[anvil]]** (the anvil costs 3 ingots).",
            "**Beat an ingot down to [[plate]]** on the anvil.",
            "**Build a [[press]]** and press four plates into a block of [[metal-hull]].",
            "**Seal the cabin**: fill every hole in it. \"It Holds Air\" finishes the tutorial line.",
          ],
        },
        {
          h: "Don't forget",
          list: [
            "Nights are genuinely dark. Make [[torch|torches]] early (4 for 1 wood).",
            "A [[campfire]] turns raw meat into a meal. Raw food barely fills you.",
            "A [[bed]] sets where you wake up if you black out.",
          ],
        },
      ],
      related: ["the-crash", "advancements", "carpenters-bench", "smelter", "anvil"],
    },
    {
      id: "advancements",
      name: "Advancements",
      group: "Getting started",
      summary: "The game's progress tracker: four trees of things you've worked out how to do, each opening up what comes next.",
      info: [
        ["Trees", "4"],
        ["Tutorial", "Getting Down (one straight line)"],
        ["Optional", "Most of the other three"],
      ],
      body: [
        {
          p: "AstraCube refuses to hand out objectives. Advancements exist so \"there's nothing to do next\" never turns into \"I can't find out what to do next\". The first tree is one straight line on purpose. Past that, three trees run side by side, and two of them never go near the ship. You're allowed to decide not to leave for a while.",
        },
        {
          h: "The four trees",
          table: {
            cols: ["Tree", "What it covers", "Ends with"],
            rows: [
              ["Getting Down", "Wood, a bench, a pick, ore, a smelter, the anvil, hull", "It Holds Air: a sealed cabin"],
              ["Metal and Machines", "Coal, bars, sheets, scrap, wire, the Press, circuitry, alloy, the Heat Suit, the deep", "A Yard of Your Own (Shipworks), Down Where It Glows"],
              ["Making a Home", "Torches, campfires, cooking, beds, chests, cargo modules, the boat, climate and air machines", "A Proper Hold, Air of Your Own"],
              ["Getting Off", "Generators, solar, fuel rods, capacitor banks, the reactor, geothermal", "The Last Generator, Tapping the Rock"],
            ],
          },
        },
        {
          h: "A few worth knowing",
          list: [
            "**Baked Down**: smelt a fuel ore and you get [[coal]], not metal.",
            "**One Blow Too Many**: overwork a piece on the [[anvil]] and it cracks into [[scrap]]. Scrap remelts, so nothing's wasted.",
            "**A Proper Hold**: stand four [[cargo-module|Cargo Modules]] together and open them as one store.",
            "**Down Where It Glows**: stand in the lava caverns of [[the-deep]] and live.",
          ],
        },
      ],
      related: ["first-hour", "the-crash"],
    },

    // ---------------------------------------------------------------- vitals
    {
      id: "health",
      name: "Health",
      group: "Your vitals",
      summary: "100 points. It comes back slowly while you're fed, breathing and out of danger, and much faster in bed.",
      info: [
        ["Maximum", "100"],
        ["Regenerates", "3 per second"],
        ["In bed", "9 per second"],
        ["Stops healing", "Below 25 hunger"],
      ],
      body: [
        {
          p: "Health only comes back when you're safe: breathing, out of any hazard, and with at least 25 [[hunger]]. Lying in a [[bed]] heals three times as fast, and doesn't care how hungry you are. Resting is what you do because you're in a bad way.",
        },
        {
          h: "What hurts",
          table: {
            cols: ["Source", "Damage"],
            rows: [
              ["Out of oxygen", "7 per second"],
              ["Starving (0 hunger)", "1.1 per second"],
              ["World heat or cold", "1.2 to 4.5 per second depending on the world, less with a suit"],
              ["The deep", "Up to 3.2 per second, the hotter it gets"],
              ["Burning (fire spit)", "2.5 per second"],
              ["Creatures", "4 to 14 a hit for hostile wildlife"],
            ],
          },
        },
        {
          h: "Blacking out",
          p: "At zero health you black out and wake with full health, oxygen and hunger. You come round in your [[bed]] if you've slept in one on a world in this system, otherwise back at home.",
        },
      ],
      related: ["oxygen", "hunger", "hazards", "bed"],
    },
    {
      id: "oxygen",
      name: "Oxygen",
      group: "Your vitals",
      summary: "100 points of air. It drains anywhere you can't breathe: airless worlds, space and underwater.",
      info: [
        ["Maximum", "100"],
        ["Drains", "4 per second without air"],
        ["Refills", "30 per second when breathing"],
        ["At zero", "7 damage per second"],
      ],
      body: [
        {
          p: "A full tank lasts about 25 seconds without air, and refills almost instantly once you can breathe again.",
        },
        {
          h: "Where you can breathe",
          list: [
            "Outdoors on any world with an atmosphere, below the top of its sky.",
            "Inside a sealed ship with working [[life-support]] and air in its tank.",
            "Inside your own [[sealed-bases|sealed base]], once an [[oxygen-plant]] has filled it.",
          ],
        },
        {
          h: "Where you can't",
          list: [
            "On airless worlds: most moons, and some deserts. See [[world-types]].",
            "In space, outside a ship.",
            "With your head underwater.",
          ],
        },
      ],
      related: ["health", "life-support", "oxygen-plant", "sealed-bases"],
    },
    {
      id: "hunger",
      name: "Hunger",
      group: "Your vitals",
      summary: "100 points that drain slowly as you live and faster as you work. A full bar lasts roughly twelve minutes.",
      info: [
        ["Maximum", "100"],
        ["Drain at rest", "0.07 per second"],
        ["Extra when moving", "0.10 per second"],
        ["At zero", "1.1 damage/sec, 62% speed"],
      ],
      body: [
        {
          p: "Food is meant to be an errand, not a chore. Eating restores two things: **fill** (how much of the bar comes back now) and **saturation** (how long before the bar starts dropping again).",
        },
        {
          h: "Saturation",
          p: "Saturation is spent before hunger is. A handful of berries fills a little and is gone almost at once. A cooked dish fills less per ingredient than eating them raw would, but lasts about three times as long. That's the whole case for owning a [[cooking-pot]]. See [[food-values]].",
        },
        {
          h: "Running on empty",
          list: [
            "Below 25 hunger, your [[health]] stops coming back on its own.",
            "At zero you take 1.1 damage a second. It's slow, not sudden.",
            "You also drag your feet, moving at 62% speed.",
          ],
        },
      ],
      related: ["food-values", "cooking-pot", "campfire", "health"],
    },
    {
      id: "running",
      name: "Running",
      group: "Your vitals",
      summary: "A short burst of speed: 62% faster than walking for about four and a half seconds, then you need a breather.",
      info: [
        ["Walk speed", "3.7"],
        ["Run speed", "1.62× walking"],
        ["Full sprint", "4.5 seconds"],
        ["Refill", "3 seconds standing still"],
      ],
      body: [
        {
          p: "Running empties a sprint tank in 4.5 seconds flat out. Once you stop, it has to rest for just under a second before it starts refilling, and it takes about 3 seconds to fill completely.",
        },
        {
          p: "Land animals run a little slower than you walk, so a chase is one you can win if you commit to it. Birds and fish are another matter.",
        },
      ],
      related: ["hunger", "wildlife"],
    },

    // ---------------------------------------------------------------- dangers
    {
      id: "hazards",
      name: "Heat and Cold",
      group: "Dangers",
      summary: "Many worlds are trying to cook or freeze you, and they hurt every second you stand on them unprotected.",
      info: [
        ["Types", "Heat, cold"],
        ["Damage", "1.2 to 4.5 per second (by world)"],
        ["Reaches", "300 blocks above the ground"],
        ["Protection", "Suits, Climate Units, sealed bases"],
      ],
      body: [
        {
          p: "Each world's climate is random. Garden worlds, archipelagos and crystal deserts are harmless. Deserts and red mesas cook you, and ice worlds and moons freeze you. The hazard reaches 300 blocks above the surface, so flying high enough gets you out of it.",
        },
        {
          h: "Some examples",
          table: {
            cols: ["World type", "Hazard", "Damage / sec"],
            rows: [
              ["Rust barrens", "Heat", "1.2"],
              ["Tundra", "Cold", "1.5"],
              ["Desert", "Heat", "2.0"],
              ["Ice world", "Cold", "3.5"],
              ["Red mesas", "Heat", "4.5"],
            ],
          },
          note: "Every world type is listed with its hazard on the [[world-types]] page.",
        },
        {
          h: "Staying alive",
          list: [
            "**[[insulated-suit|Insulated Suit]]**: cuts the damage by 30% to 90%, depending on the Density of the ore it's lined with.",
            "**[[climate-unit|Climate Unit]]**: cancels it completely for 14 blocks around it, no walls needed.",
            "**[[sealed-bases|A sealed base]]** held at a survivable temperature by a [[heater]] or [[cooler]].",
            "**A sealed ship** with working [[life-support]].",
          ],
        },
      ],
      related: ["insulated-suit", "climate-unit", "sealed-bases", "world-types", "the-deep"],
    },
    {
      id: "the-deep",
      name: "The Deep",
      group: "Dangers",
      summary: "Below everything is a layer too hot to be in. The rock turns dark red, caverns open out, lava pools, and it starts killing you.",
      info: [
        ["Blocks", "Hot Stone, Lava"],
        ["Damage", "Up to 3.2 per second"],
        ["Protection", "Heat Suit (complete)"],
        ["Worth it for", "Geothermal Tap, deep ores"],
      ],
      body: [
        {
          p: "You know you've reached the deep when the rock changes to [[hot-stone]], shot through with red, and the caves get big. There's a margin below that line, so you can walk into the dark red stone, see it, and turn round.",
        },
        {
          p: "It's the one hazard in the game gated on **equipment**. You can't dig or build your way out of it: no amount of hull or stone helps. A [[heat-suit]] stops it outright, not just partly.",
        },
        {
          h: "Going down",
          list: [
            "A Heat Suit holds about **4 minutes** of protection: one trip down, grab what's in reach, come back.",
            "[[pack-cell|Pack Cells]] on your back top the suit up. Two of them and a Heat Suit is most of an afternoon in the lava.",
            "The [[insulated-suit]] holds about 20 minutes and is the late-game answer.",
            "A [[geothermal-tap]] down here is the steadiest power in the game.",
          ],
        },
      ],
      related: ["heat-suit", "hot-stone", "lava", "geothermal-tap", "hazards"],
    },
    {
      id: "night",
      name: "Night and Light",
      group: "Dangers",
      summary: "Nights are genuinely dark, and things come out in them. Light is what makes night and caves explorable.",
      info: [
        ["Day length", "11 to 17 minutes (by world)"],
        ["Night threats", "Night Stalkers, Watchers"],
        ["Light sources", "Torch, Ember Torch, Lantern, Aurora Bloom, Lava"],
      ],
      body: [
        {
          p: "Every world gets a random day length, somewhere between about 11 and 17 minutes. Nights and caves are dark enough that you need light to get anything done.",
        },
        {
          h: "What comes out",
          list: [
            "**[[night-stalker|Night Stalkers]]**: many-legged things that spit web, fire or stone. Every world has at least one out after dark.",
            "**[[watcher|Watchers]]**: tall grey figures that only move when you aren't looking. They come out near trees and crumble at dawn.",
          ],
        },
        {
          h: "Light",
          list: [
            "[[torch]]: cheap, 4 for one piece of wood.",
            "[[ember-torch]]: burns ore. How bright depends on the ore's Combustion.",
            "[[lantern]]: steady light for finished builds.",
            "Torches and lanterns can also go on your back in the pack slot.",
          ],
        },
        {
          h: "Or skip it",
          p: "A [[bed]] lets you sleep through to morning. On some nights there's a good reason to stay up: an aurora grows [[aurora-bloom|Aurora Blooms]] that are gone by dawn.",
        },
      ],
      related: ["torch", "bed", "night-stalker", "watcher", "weather"],
    },
    {
      id: "webbed-burning",
      name: "Webbed and Burning",
      group: "Dangers",
      summary: "What a Night Stalker's spit does to you: web slows and then sticks you, fire burns, stone knocks you back.",
      info: [
        ["Web, per glob", "−15% speed"],
        ["Stuck at", "4 globs, for 1.8 seconds"],
        ["Fire", "2.5 damage per second"],
        ["Web wears off", "5 seconds after the last hit"],
      ],
      body: [
        {
          p: "Each world's [[night-stalker|Night Stalkers]] spit one kind of glob. It's thrown ahead of where you're going in a readable arc, so you can sidestep it.",
        },
        {
          table: {
            cols: ["Spit", "What it does"],
            rows: [
              ["Web", "Each glob slows you by 15%. Four at once and you're stuck fast for 1.8 seconds. Five seconds after the last hit it starts shedding."],
              ["Fire", "Sets you burning for 2.5 damage a second."],
              ["Stone", "A rock that simply hurts and knocks you back."],
            ],
          },
        },
      ],
      related: ["night-stalker", "night", "health"],
    },

    // ---------------------------------------------------------------- shelter
    {
      id: "sealed-bases",
      name: "Sealed Bases",
      group: "Shelter",
      summary: "Close every gap in a room and it becomes a base: fill it with air and hold it at a safe temperature, and the world can't touch you.",
      info: [
        ["Needs", "A fully enclosed room"],
        ["Air", "Oxygen Plant"],
        ["Temperature", "Heater or Cooler"],
        ["Safe range", "Above 0° and below 45°"],
      ],
      body: [
        {
          p: "A room counts as sealed once nothing leaks. On its own that only keeps the weather out. To live in it on a hostile world, it also needs air and the right temperature.",
        },
        {
          h: "Making one",
          steps: [
            "Build a room and close every gap: walls, roof, floor and a [[door]].",
            "Put an [[oxygen-plant]] inside to flood it with breathable air. It needs about 15% before it counts as breathable.",
            "On a cold world, add a [[heater]]. On a hot one, add a [[cooler]].",
          ],
        },
        {
          h: "The shortcut",
          p: "A [[climate-unit]] skips the walls entirely: it cancels world hazard damage for 14 blocks around it. It doesn't give you air, though, so it's no help on an airless world.",
        },
      ],
      related: ["oxygen-plant", "heater", "cooler", "climate-unit", "hazards"],
    },
    {
      id: "respawning",
      name: "Respawning",
      group: "Shelter",
      summary: "Black out and you wake up in your bed, or back home on your starting world if you don't have one.",
      info: [
        ["Wake with", "Full health, oxygen and hunger"],
        ["Where", "Your bed, else the home world"],
      ],
      body: [
        {
          p: "When your [[health]] hits zero you black out and come round with every bar full. A [[bed]] is how you choose where that is. Without one, every death sends you back to the same spot on your home world.",
        },
        {
          note: "If your bed is on a world in another star system, you can't get back to it, and you'll respawn at home instead.",
        },
      ],
      related: ["bed", "health"],
    },
  ],
});
