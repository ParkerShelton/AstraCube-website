WIKI.add({
  id: "ships",
  name: "Ships and Travel",
  color: "#5fd3b5",
  blurb: "Fixing the wreck, building and flying ships, warping between stars, and the humble wooden boat.",
  intro:
    "Your way off the first world is the wreck you woke up in. Ships are grids of blocks you build yourself; fit the right systems and seal the cabin, and she'll fly. Add a Warp Drive and the rest of the galaxy opens up.",
  groups: [
    { name: "Your ship" },
    { name: "Ship systems", blurb: "Built at the Shipworks and placed in the hull." },
    { name: "Warp Drive parts", blurb: "One from each planet family's signature ore." },
    { name: "Other vehicles" },
  ],
  entries: [
    // ---------------------------------------------------------------- your ship
    {
      id: "ship-building",
      name: "Building a Ship",
      group: "Your ship",
      summary: "A ship is any grid of blocks with a cockpit, thrusters, a sealed cabin, power and life support. The ship's computer tells you what's missing.",
      info: [
        ["Needs", "Cockpit, thrusters, sealed cabin, door, power, life support"],
        ["Checklist", "The ship's computer (right-click the cockpit)"],
      ],
      body: [
        {
          p: "While you build her, a ship sits still and you can walk around on her. Your first ship is the [[the-crash|wreck]] you woke up in. Right-click the cockpit and the computer lists what's wrong, in the order worth fixing it, and ticks things off as you go.",
        },
        {
          h: "The checklist",
          steps: [
            "**Hull sealed**: a block of [[metal-hull]] in every hole in the cabin. Only the cabin has to be airtight, not the wings or tail.",
            "**A [[door]]**: a cabin needs one to hold air.",
            "**Power**: a [[battery-dock]] with a charged [[battery]] in it. Charge batteries at a [[generator]].",
            "**[[life-support]]**: scrubs the cabin air.",
            "**[[thruster|Thrusters]]**: enough for the ship's mass. The computer tells you how many it wants.",
          ],
        },
        {
          h: "Mass and balance",
          p: "Every block adds mass, and denser materials add more, so a heavier ship is less agile. The computer reports your acceleration (from \"barely moves\" to \"lively\") and whether your thrusters are balanced. Lopsided thrust makes her pull to one side.",
        },
      ],
      related: ["flying", "ship-air-power", "cockpit", "thruster", "the-crash"],
    },
    {
      id: "flying",
      name: "Flying",
      group: "Your ship",
      summary: "Thrust fights the planet's gravity. Out-thrust the world to lift off, then coast free once gravity fades in space.",
      info: [
        ["Liftoff", "Hold climb; the engines spool up first"],
        ["Landing assist", "Within 280 blocks of the ground"],
        ["Out of power", "10% thrust: enough to set down badly"],
      ],
      body: [
        {
          p: "Lifting off isn't instant. Hold climb while she sits on the ground and the engines wind up, the view shaking harder as they build, and she goes when they're there. The very first liftoff takes the longest. That's the moment the whole wreck was for. After that it's a beat.",
        },
        {
          list: [
            "Close to a surface, **landing assist** takes over: she levels belly-down and caps your speed so a fast dive can't become a crater.",
            "Out in space, gravity fades and you coast.",
            "Thrust draws on the ship's charge. If the tank runs dry you keep 10% thrust, enough to set down badly but never enough to go anywhere. Running out should strand you on the ground, not in the sky.",
          ],
        },
      ],
      related: ["ship-building", "ship-air-power", "warp-travel"],
    },
    {
      id: "ship-air-power",
      name: "Ship Air and Power",
      group: "Your ship",
      summary: "The cabin has an air tank and a charge. Life support spends charge to keep the air good; thrusters spend charge to fly.",
      info: [["Air tank", "600 litres"], ["Refill air", "At a base"], ["Power from", "Battery Dock or Power Rack"]],
      body: [
        {
          p: "Inside a sealed cabin with working [[life-support]] you can breathe anywhere, including space. The air tank slowly empties while you're aboard breathing it, and life support draws a little charge while it runs. Refill the tank at a base.",
        },
        {
          h: "Lasting longer",
          list: [
            "A [[dense-cell]] holds far more, so a trip out is longer.",
            "A [[power-rack]] holds three cells instead of one, so a trip back is rarer.",
            "A [[regulator]] makes the scrubbers sip instead of gulp, so neither trip is as often.",
          ],
        },
      ],
      related: ["life-support", "regulator", "battery-dock", "power-rack"],
    },
    {
      id: "warp-travel",
      name: "Warp Travel",
      group: "Your ship",
      summary: "With a Warp Drive fitted and the ship out in space, the star map opens and you can jump to another system.",
      info: [
        ["Needs", "A Warp Drive, in space"],
        ["Cost", "Two thirds of a full charge"],
        ["Destinations", "The galaxy's other systems"],
      ],
      body: [
        {
          p: "Crossing between stars is meant to be the expensive thing, so a jump has its own budget: two thirds of a full tank. A full tank gets you there with enough left to land at the far end. A jump you can't make yet is a reason to sit on a planet and charge.",
        },
        {
          p: "Each system in the [[star-systems|galaxy]] has its own planets, its own ores and its own life. See [[warp-drive]] for what it takes to build one.",
        },
        { note: "If your [[bed]] is in a system you've left, you'll respawn at home instead." },
      ],
      related: ["warp-drive", "star-systems", "flying"],
    },

    // ---------------------------------------------------------------- systems
    {
      id: "cockpit",
      name: "Cockpit",
      group: "Ship systems",
      summary: "The pilot's seat and the ship's computer. A ship needs exactly one.",
      info: [["Per ship", "Exactly one"], ["Found", "Your wreck, crashed ships"]],
      body: [
        { p: "Sit in it to fly, and right-click it to talk to the ship's computer. While she's wrecked it's your repair checklist; once she flies it shows how the ship is doing, where you've been and where you could go." },
        { p: "There's no recipe for one. Your wreck's nose never breaks, and [[sites|crashed ships]] sometimes have a spare." },
      ],
      related: ["ship-building", "the-crash", "sites"],
    },
    {
      id: "thruster",
      name: "Thruster",
      group: "Ship systems",
      summary: "A burn chamber: it wants something that burns. How hard it pushes comes from its material's Energy.",
      info: [["Made at", "Shipworks"], ["Recipe", "1 Machine Core, 2 Alloy, 2 Wire, 2 Coal"]],
      body: [
        { p: "Each thruster gives a base push, scaled by the **Energy** of what it's made from. Fit enough of them for your ship's mass, and keep them balanced either side of the middle." },
        { p: "Every ship needs at least one. [[sites|Crashed ships and vaults]] sometimes have them in their chests." },
      ],
      related: ["ship-building", "coal", "machine-core", "alloy-plating"],
    },
    {
      id: "life-support",
      name: "Life Support",
      group: "Ship systems",
      summary: "Tanks of glass and a scrubber bed packed with living leaves, to turn stale air back into good.",
      info: [["Made at", "Shipworks"], ["Recipe", "1 Machine Core, 4 Glass, 2 Circuitry, 8 Leaves or Fibre"]],
      body: [
        { p: "Without it the cabin has no air no matter how well it's sealed. The scrubber bed takes leaves **or** [[plant-fibre]], so a treeless world isn't a dead end." },
      ],
      related: ["ship-air-power", "regulator", "plant-fibre", "trees"],
    },
    {
      id: "regulator",
      name: "Regulator",
      group: "Ship systems",
      summary: "The first thing that makes the bucket last: the ship asks for less instead of holding more.",
      info: [["Made at", "Shipworks"], ["Recipe", "3 Circuitry, 1 Alloy, 4 Wire"]],
      body: [{ p: "Fitted to a ship, it makes the scrubbers sip instead of gulp, cutting how fast [[life-support]] drains the charge. Everything else on the power line is a bigger bucket; this one makes the bucket last." }],
      related: ["life-support", "power-rack", "dense-cell"],
    },
    {
      id: "warp-drive",
      name: "Warp Drive",
      group: "Ship systems",
      summary: "The big one. Four parts, each from a different planet family's signature ore, plus cores, circuitry and crystal.",
      info: [
        ["Made at", "Shipworks"],
        ["Recipe", "Warp Coil, Ignition Charge, Coolant Jacket, Containment Shell, 2 Machine Cores, 6 Circuitry, 4 Crystal"],
        ["Unlocks", "The star map, in space"],
      ],
      body: [
        {
          p: "Each of its four parts asks for stock of an ore so good at one property that no ordinary ore reaches it, so each part is a trip to its own world. Your home system always has one world of each family.",
        },
        {
          table: {
            cols: ["Part", "Needs", "From a"],
            rows: [
              ["[[warp-coil]]", "2 Bars with Energy 80+, 4 Wire", "[[living-worlds|Living world]]"],
              ["[[ignition-charge]]", "2 Coal with Combustion 85+, 1 Sheet", "[[dust-worlds|Dust world]]"],
              ["[[coolant-jacket]]", "1 Sheet with Reactivity 80+, 2 Glass, 4 Ice", "[[frozen-worlds|Frozen world]]"],
              ["[[containment-shell]]", "4 Plates with Density 85+", "[[scorched-worlds|Scorched world]]"],
            ],
          },
        },
        { note: "Vaults and crashed ships occasionally hold a ready-made warp drive. Vaults are your best bet. See [[sites]]." },
      ],
      related: ["signature-ores", "warp-travel", "planet-families", "shipworks"],
    },

    // ---------------------------------------------------------------- warp parts
    {
      id: "warp-coil",
      name: "Warp Coil",
      group: "Warp Drive parts",
      summary: "Bars of a living world's best conductor, wound round with wire.",
      info: [["Made at", "Shipworks"], ["Recipe", "2 Bars (Energy 80+), 4 Wire"], ["Ore from", "Living worlds"]],
      body: [{ p: "Find a [[living-worlds|living world's]] signature ore (it ends in -volt, -flux or -spark), smelt it and draw it into [[bar|bars]] on the anvil." }],
      related: ["warp-drive", "living-worlds", "signature-ores"],
    },
    {
      id: "ignition-charge",
      name: "Ignition Charge",
      group: "Warp Drive parts",
      summary: "A sheet casing packed with a dust world's fiercest fuel.",
      info: [["Made at", "Shipworks"], ["Recipe", "2 Coal (Combustion 85+), 1 Sheet"], ["Ore from", "Dust worlds"]],
      body: [{ p: "Find a [[dust-worlds|dust world's]] signature ore (ending -pyre, -char or -cinder) and bake it down to [[coal]] in a smelter. The coal keeps its Combustion." }],
      related: ["warp-drive", "dust-worlds", "coal"],
    },
    {
      id: "coolant-jacket",
      name: "Coolant Jacket",
      group: "Warp Drive parts",
      summary: "A frozen world's reactive metal, with glass and ice.",
      info: [["Made at", "Shipworks"], ["Recipe", "1 Sheet (Reactivity 80+), 2 Glass, 4 Ice"], ["Ore from", "Frozen worlds"]],
      body: [{ p: "Find a [[frozen-worlds|frozen world's]] signature ore (ending -rime, -quell or -frost) and beat it to a [[sheet]]. The [[ice]] is easy to come by on the same world." }],
      related: ["warp-drive", "frozen-worlds", "ice"],
    },
    {
      id: "containment-shell",
      name: "Containment Shell",
      group: "Warp Drive parts",
      summary: "Plates of a scorched world's densest metal, dense enough that the heat of a warp can't move it.",
      info: [["Made at", "Shipworks"], ["Recipe", "4 Plates (Density 85+)"], ["Ore from", "Scorched worlds"]],
      body: [{ p: "Find a [[scorched-worlds|scorched world's]] signature ore (ending -slag, -mass or -plumb) and beat it all the way to [[plate]]. Bring heat protection: these are the hottest worlds in the game." }],
      related: ["warp-drive", "scorched-worlds", "plate"],
    },

    // ---------------------------------------------------------------- other
    {
      id: "wooden-boat",
      name: "Wooden Boat",
      group: "Other vehicles",
      summary: "The simplest vehicle in the game: set it on water, sit in it and row. So a lake stops being a wall on your first afternoon.",
      info: [["Made at", "Carpenter's Bench"], ["Recipe", "10 Wood"], ["Fuel", "None"]],
      body: [
        { p: "It floats and goes where you point it. No fuel, no damage, nothing to repair. Set it down on water, right-click to sit in it, and crouch to get out, the same as a pilot's seat." },
        { p: "Cheap and early on purpose: a boat you can't afford until you have a smelter would be a boat nobody builds. Essential on an [[archipelago]]." },
      ],
      related: ["water", "archipelago", "carpenters-bench"],
    },
  ],
});
