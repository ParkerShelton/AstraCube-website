(function () {
  // Blocks.CROP_GROWTH + the class lists from Blocks.FLORA.
  const CROPS = [
    ["Meadow Grass", "Temperate", "Food", 3, 150, 2, "3", "10%, +1"],
    ["Rye Grass", "Temperate", "Food", 3, 140, 2, "3.2", "12%, +1"],
    ["Clover", "Temperate", "Food", 3, 170, 2, "3", "18%, +1–2"],
    ["Briar", "Temperate, Frozen", "Fibre", 4, 230, 2, "—", "11%, +1–2"],
    ["Frost Grass", "Frozen", "Food", 4, 260, 2, "4", "8%, +1"],
    ["Tundra Moss", "Frozen", "Fibre", 3, 210, 2, "—", "14%, +1–2"],
    ["Snowberry", "Frozen", "Food", 4, 240, 3, "4.5", "15%, +1–2"],
    ["Rime Berry", "Frozen", "Food", 4, 250, 3, "4.2", "13%, +1–2"],
    ["Dune Weed", "Arid", "Fibre", 3, 200, 1, "—", "12%, +1"],
    ["Sand Sedge", "Arid, Scorched", "Food", 3, 180, 2, "3", "10%, +1"],
    ["Thorn Bush", "Arid, Scorched", "Fibre", 4, 280, 2, "—", "10%, +1"],
    ["Ash Grass", "Scorched", "Food", 5, 320, 2, "5", "7%, +1–3"],
    ["Cinder Weed", "Scorched", "Fibre", 4, 260, 2, "—", "9%, +1"],
    ["Kelp Vine", "Ocean", "Fibre", 2, 120, 3, "—", "22%, +1–3"],
    ["Reed Grass", "Ocean", "Food", 2, 140, 2, "2.8", "20%, +1–3"],
    ["Coral Bush", "Ocean", "Food", 3, 190, 3, "3.5", "20%, +1–3"],
  ];
  const mins = (s) => (s % 60 ? `${Math.floor(s / 60)}m ${s % 60}s` : `${s / 60}m`);

  WIKI.add({
    id: "food",
    name: "Food and Farming",
    color: "#8bd17c",
    blurb: "What to eat and how much it fills you, cooking, farming crops, and fishing.",
    intro:
      "Hunger never stops, but feeding yourself is meant to be an errand, not a chore. Hunt, farm, fish or forage, then cook it. Cooked food is what actually keeps you going.",
    groups: [
      { name: "Eating" },
      { name: "Farming" },
      { name: "Fishing" },
    ],
    entries: [
      // ---------------------------------------------------------------- eating
      {
        id: "food-values",
        name: "Food Values",
        group: "Eating",
        summary: "How much each food fills you now, and how long it keeps you full. Cooking is almost always worth it.",
        info: [["Best single food", "Cooked Meat"], ["Best overall", "A mixed dish"]],
        body: [
          {
            p: "Every food has two numbers. **Fill** is how much of your [[hunger]] bar comes back now. **Saturation** is how long before the bar starts dropping again, and it's spent first.",
          },
          {
            table: {
              cols: ["Food", "Fill", "Saturation", "How you get it"],
              rows: [
                ["[[berries]]", "6", "3", "Off a bearing bush"],
                ["[[raw-meat]]", "9", "4", "Any animal"],
                ["Raw Fish", "11", "5", "[[fishing]]"],
                ["Cooked Vegetables", "30", "30", "[[campfire]]: 2 Crop"],
                ["Cooked Fish", "34", "38", "Campfire: 1 Raw Fish"],
                ["Cooked Meat", "38", "44", "Campfire: 1 Raw Meat"],
                ["A dish", "Varies", "Up to ~3× its parts", "[[cooking-pot]]"],
              ],
            },
          },
          {
            h: "Rules of thumb",
            list: [
              "A raw crop isn't a meal. The only way a field feeds you is through a fire.",
              "Berries are a bridge to the next meal, not the meal.",
              "Raw meat and fish keep you alive in a pinch. Cooking them roughly quadruples the fill and multiplies the saturation by about ten.",
              "A [[cooking-pot]] dish fills a little less than its parts would raw, but lasts far longer, and more so the more different foods go in.",
            ],
          },
        ],
        related: ["hunger", "campfire", "cooking-pot"],
      },
      {
        id: "berries",
        name: "Berries",
        group: "Eating",
        summary: "The one thing you can eat straight off the plant without regretting it. Poor value, but always there.",
        color: "#7a2a4a",
        info: [["Fill", "6"], ["Saturation", "3"], ["Grows on", "Bearing bushes"]],
        body: [
          { p: "Bramble, Dog Rose, Snowberry, Desert Currant and Sea Berry bushes carry berries on the outside of the leaf mass, where you can see them. See [[wild-plants]]." },
          { p: "Stewed down at a [[campfire]] with one crop, three berries make **two** helpings of Berry Mash. That's what makes hunting out a bearing bush worth the walk." },
        ],
        related: ["wild-plants", "campfire", "food-values"],
      },

      // ---------------------------------------------------------------- farming
      {
        id: "farming",
        name: "Farming",
        group: "Farming",
        summary: "Till soil near water, plant seeds, wait, harvest. Each harvest gives back at least the seed it grew from.",
        info: [
          ["Tool", "Hoe"],
          ["Soil must be", "Within 3 blocks of water"],
          ["Speed it up", "Bone Meal"],
        ],
        body: [
          {
            h: "Starting a field",
            steps: [
              "Gather [[seeds]]: cutting tall grass sometimes drops them.",
              "Make a [[hoe]] and till grass or dirt within about 3 blocks of water. A [[bucket]] lets you bring the water to the field instead.",
              "Plant seeds on the tilled soil.",
              "Wait. A crop grows through its stages, standing taller each time and turning **gold** when it's ripe, so you can read a field from across it.",
              "Harvest the ripe plants.",
            ],
          },
          {
            h: "What a harvest gives",
            list: [
              "**Food crops** give Crop, which you cook. **Fibre crops** give [[plant-fibre]] for cloth instead.",
              "Always at least one seed back, so farming can't make you run out of plants.",
              "Sometimes extra seeds. Some species barely spread; others go like potatoes, one in and a handful out now and then.",
            ],
          },
          {
            h: "Which crops grow where",
            p: "Crops belong to [[planet-classes|planet classes]]. A frost crop won't take on a desert. Every class has at least one fibre crop, so wherever you land, something makes rope. See [[crops]].",
          },
        ],
        related: ["crops", "seeds", "hoe", "bone-meal", "plant-fibre"],
      },
      {
        id: "crops",
        name: "Crops",
        group: "Farming",
        summary: "Sixteen species across five planet classes. Fast or slow, food or fibre, steady or spreading: which you plant is a real choice.",
        info: [["Species", String(CROPS.length)], ["Fastest", "Kelp Vine (2 minutes)"], ["Best food", "Ash Grass"]],
        body: [
          {
            p: "Each world renames its plants, so a crop might be called something like Sorrelfrost where you are. The ending tells you the species, and the same name always means the same plant.",
          },
          {
            table: {
              cols: ["Crop", "Class", "Gives", "Stages", "Ripens in", "Yield", "Nourishment", "Extra seeds"],
              rows: CROPS.map(([n, c, u, st, t, y, food, spread]) => [n, c, u, String(st), mins(t), String(y), food, spread]),
            },
            note: "\"Extra seeds\" is the chance a harvest gives back more than the one seed it always returns, and how many more.",
          },
          {
            h: "Picking a crop",
            list: [
              "**Steady** crops (Meadow Grass, Frost Grass, Sand Sedge) stay a row unless you work at them.",
              "**Runners** (Clover, Snowberry, Kelp Vine, Coral Bush, Reed Grass) are worth planting for the seed as much as the food.",
              "**Ash Grass** is slow but generous: the best nourishment, and sometimes three extra seeds.",
            ],
          },
        ],
        related: ["farming", "seeds", "plant-fibre", "planet-classes"],
      },
      {
        id: "seeds",
        name: "Seeds",
        group: "Farming",
        summary: "What tall grass sometimes leaves behind. Plant them on tilled soil.",
        info: [["Found by", "Cutting tall grass"], ["Planted on", "Tilled soil"]],
        body: [{ p: "One item for every crop species; which one it is rides along with the seed. Every harvest gives at least one back. See [[farming]]." }],
        related: ["farming", "crops", "sapling"],
      },
      {
        id: "sapling",
        name: "Sapling",
        group: "Farming",
        summary: "A young tree. Plant it on grass or dirt and in about four minutes it's a full tree.",
        info: [["Found by", "Felling trees, clearing leaves"], ["Planted on", "Grass or dirt"], ["Grows in", "About 4 minutes"]],
        body: [{ p: "It stands as a skinny young tree that can't be broken yet, then becomes a full-grown tree of its species. The way to keep a wood supply near your base. See [[trees]]." }],
        related: ["trees", "wood", "seeds"],
      },
      {
        id: "bone-meal",
        name: "Bone Meal",
        group: "Farming",
        summary: "Ground bone. Use it on a growing plant to push it one stage on.",
        info: [["Made at", "Carpenter's Bench"], ["Recipe", "1 Bone → 3"]],
        body: [{ p: "Three from one bone, because the point is to make a field worth tending rather than to ration it. Bone only comes off the bigger creatures, so the supply is already limited by what you can bring down." }],
        related: ["bone", "farming", "crops"],
      },
      {
        id: "plant-fibre",
        name: "Plant Fibre",
        group: "Farming",
        summary: "Cut from the fibre crops. Spin it into cloth, string a fishing rod, or pack it into life support.",
        info: [["From", "Fibre crops"], ["Becomes", "Cloth (4 fibre)"]],
        body: [
          {
            list: [
              "[[cloth]]: 4 fibre at a [[carpenters-bench]].",
              "[[fishing-rod]]: 2 fibre and 3 planks.",
              "[[life-support]]: its scrubber bed takes 8 leaves **or** fibre, so a treeless world isn't a dead end.",
            ],
          },
          { p: "The fibre crops are Briar, Tundra Moss, Dune Weed, Thorn Bush, Cinder Weed and Kelp Vine. See [[crops]]." },
        ],
        related: ["cloth", "crops", "life-support"],
      },

      // ---------------------------------------------------------------- fishing
      {
        id: "fishing",
        name: "Fishing",
        group: "Fishing",
        summary: "Cast, wait, and strike when the float goes under. Then fight it in without pulling while it runs.",
        info: [
          ["Tool", "Fishing Rod"],
          ["Bite comes after", "5 to 16 seconds"],
          ["Strike window", "~0.95 s (0.62 s for rare fish)"],
          ["Cast gives up after", "90 seconds"],
        ],
        body: [
          { p: "The difficulty is in your attention, not in the rod. You can't learn a rhythm: the timing is random every time." },
          {
            h: "Step by step",
            steps: [
              "**Cast** onto water and wait. The bite comes anywhere from 5 to 16 seconds later.",
              "**Strike** when the float dips. You have just under a second, and less for a rarer fish. Striking a moment early still counts.",
              "**Reel** by holding the button. The fish takes runs: the float twitches for about 0.6 s as a warning, then it pulls line back.",
              "**Let go during a run.** Pulling against a running fish is how you lose it. Wait for it to calm, then reel again.",
              "**Land it.** Once it's at your feet you get one last, slightly longer window to lift it out.",
            ],
          },
        ],
        related: ["fishing-rod", "fish", "water"],
      },
      {
        id: "fish",
        name: "Fish",
        group: "Fishing",
        summary: "Every world with open water has up to three species of its own. Their names always end -gill, -fin, -scale or -minnow.",
        info: [["Per world", "0 to 3 species"], ["Raw", "Fill 11"], ["Cooked", "Fill 34"]],
        body: [
          { p: "Like all wildlife, fish are generated per world. A name ending in **-gill**, **-fin**, **-scale** or **-minnow** is always a fish, and the same name is the same fish wherever you meet it." },
          { p: "Raw fish is a little better than raw meat because you didn't have to fight it. Cook it at a [[campfire]] or put it in a [[cooking-pot]] for a Fish Stew or Surf and Turf." },
        ],
        related: ["fishing", "wildlife", "food-values"],
      },
    ],
  });
})();
