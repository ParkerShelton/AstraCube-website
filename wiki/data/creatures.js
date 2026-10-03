WIKI.add({
  id: "creatures",
  name: "Creatures",
  color: "#ff8a5c",
  blurb: "How each world's wildlife is built, what it drops, and the things that come out at night.",
  intro:
    "There's no fixed bestiary. Every world generates its own animals from its seed: their bodies, colours, size, temper and drops. These pages explain how to read whatever you meet, plus the night monsters every world shares.",
  groups: [
    { name: "Wildlife" },
    { name: "Night monsters", blurb: "Every world has at least one of each out after dark." },
    { name: "Fighting" },
  ],
  entries: [
    // ---------------------------------------------------------------- wildlife
    {
      id: "wildlife",
      name: "How Wildlife Works",
      group: "Wildlife",
      summary: "Each world randomly generates its own animals: how many kinds, what shape, how big, how they behave. A name always means the same animal.",
      info: [
        ["Kinds per world", "0–4 land, 0–3 air, 0–3 fish, 1–3 cave"],
        ["Tempers", "Neutral, passive, hostile"],
        ["Drops", "Meat, hide, bone"],
      ],
      body: [
        {
          p: "Some worlds teem, some are nearly empty, and a few have no animals at all. Your home world always has something to hunt. Every species is built entirely out of its name, so a Grumhide is the same animal on every world it turns up on.",
        },
        {
          h: "Read the name",
          table: {
            cols: ["Ending", "What it is"],
            rows: [
              ["-back, -hide, -snout, -hopper, -beast, -hoof", "Land animal"],
              ["-wing, -flit, -soar, -quill", "Flyer"],
              ["-gill, -fin, -scale, -minnow", "[[fish|Fish]]"],
              ["-crawler, -burrow, -grub, -creep", "Cave dweller"],
              ["-fang, -claw, -render, -maw", "[[hostile-humanoids|Hostile humanoid]]"],
            ],
          },
        },
        {
          h: "Size",
          p: "Size comes in bands: about a fifth of animals are critters underfoot, most are ordinary, some are large, and a rare few (about one in twenty-five) are genuine giants over 2.6 times normal size. Health, speed and drops all scale with size, so a giant is an event.",
        },
      ],
      related: ["body-types", "temperament", "animal-drops", "fish"],
    },
    {
      id: "body-types",
      name: "Body Types",
      group: "Wildlife",
      summary: "Quads, grazers, hoppers, crawlers, serpents, flyers and fish. The shape decides how it moves, whether it herds, and what it drops.",
      info: [["Shapes", "7 (plus the upright biped)"]],
      body: [
        {
          table: {
            cols: ["Body", "Found", "Habits"],
            rows: [
              ["Quad", "Land, caves", "Four legs. Travels in herds of 2–5 and grazes."],
              ["Grazer", "Land", "Long-necked; lowers its head to graze. Herds of 2–5."],
              ["Hopper", "Land, caves", "Quickest on land. Sometimes in pairs."],
              ["Crawler", "Land, caves", "Low and many-legged, insect-like. A loner."],
              ["Serpent", "Land, caves", "Long and legless. A loner."],
              ["Flyer", "Sky", "Wanders, lands to perch, takes off again. Most soar in circles, in flocks of 2–6."],
              ["Fish", "Water", "See [[fish]]."],
            ],
          },
        },
        {
          p: "Roughly half of furred-shape land animals (quads, grazers, hoppers) have fur; the rest have stripes, spots, patches, scales or banding. Cave dwellers are dim and dark, since there's no sun down there. Upright two-legged bodies are only used for [[hostile-humanoids|humanoids]], so anything on two legs is a person, not an animal.",
        },
      ],
      related: ["wildlife", "temperament", "animal-drops"],
    },
    {
      id: "temperament",
      name: "Temperament",
      group: "Wildlife",
      summary: "Most animals ignore you, a few run, and some will come for you. Things in the dark bite more often.",
      info: [["Neutral", "~75%"], ["Hostile", "~15%, more in caves and on harsh worlds"], ["Passive", "The rest"]],
      body: [
        {
          table: {
            cols: ["Temper", "What it does"],
            rows: [
              ["Neutral", "Goes about its day and ignores you."],
              ["Passive", "Skittish: runs once you're within 8–14 blocks."],
              ["Hostile", "Comes for you once you're within 9–17 blocks, hitting for 4–14 damage."],
            ],
          },
        },
        {
          p: "Cave dwellers are about 30% more likely to be hostile, and worlds with a heat or cold hazard add a little more. Hostile species come out mostly at night.",
        },
        {
          p: "Land animals run a little slower than you walk, so a chase is one you can win if you commit. Birds and fish are a different story.",
        },
      ],
      related: ["wildlife", "combat", "night"],
    },
    {
      id: "animal-drops",
      name: "Animal Drops",
      group: "Wildlife",
      summary: "Everything drops meat. Bigger four-legged animals add hide, and big ones add bone.",
      info: [["Meat", "Everything"], ["Hide", "Quads, grazers, hoppers"], ["Bone", "Size 1.2× and up"]],
      body: [
        {
          table: {
            cols: ["Drop", "Who drops it", "How many"],
            rows: [
              ["[[raw-meat]]", "Every animal", "About 2 per unit of size (less for birds and fish)"],
              ["[[hide]]", "Quads, grazers, hoppers, humanoids, if not tiny", "About 1 per unit of size"],
              ["[[bone]]", "Anything 1.2× normal size or more, except fish", "1 up to its size"],
            ],
          },
        },
        { p: "Hide becomes [[leather]] and bone becomes [[bone-meal]], so hunting feeds both your wardrobe and your farm." },
      ],
      related: ["raw-meat", "hide", "bone", "wildlife"],
    },

    // ---------------------------------------------------------------- night monsters
    {
      id: "night-stalker",
      name: "Night Stalker",
      group: "Night monsters",
      summary: "Something many-legged that comes out after dark, and never quite the same thing twice. It spits web, fire or stone.",
      info: [
        ["Comes out", "Once it's properly dark"],
        ["At once", "1 to 3, by world"],
        ["Spits", "Web, fire or stone (by world)"],
      ],
      body: [
        {
          p: "What a stalker looks like is a property of the world: every planet randomly generates its own kind, so all of one world's stalkers share a build (how many legs, how long, what colour, what they spit) and the next world's are their own. What's fixed is the idea: a body slung low between legs that arch high at the knee, something with a face on the front, and a will to come at you after dark.",
        },
        {
          p: "It walks properly: each foot stays planted until the body has carried it too far, then steps, with four feet always down. It climbs a step by reaching a foot up onto it first.",
        },
        {
          h: "Its spit",
          p: "Thrown ahead of where you're going, in an arc you can read and sidestep. See [[webbed-burning]] for what each kind does.",
        },
        { note: "Swords, bullets and loot treat it like any other animal. You can fight it." },
      ],
      related: ["webbed-burning", "night", "watcher", "combat"],
    },
    {
      id: "watcher",
      name: "Watcher",
      group: "Night monsters",
      summary: "Tall, thin and grey, with arms that hang past its knees. It only moves when you aren't looking at it.",
      info: [
        ["Comes out", "At night, near trees"],
        ["At once", "1 to 3, by world"],
        ["Leaves", "Crumbles at dawn"],
      ],
      body: [
        {
          p: "Every frame it works out whether you can actually **see** it: inside your view, with a clear line from your eye to its body. Seen, it's a statue, frozen mid-stride. Unseen, it's fast, and it doesn't come in a straight line. It picks its way between spots hidden from where you're standing, so when you turn back it's behind the next tree instead of out in the open.",
        },
        {
          h: "Things to know",
          list: [
            "Anything in the way counts as not looking, including a **tree trunk**. Stand with a trunk between you and it, and it's free to move however squarely you're facing it.",
            "The longer you stare at it, the harder it comes the moment you look away.",
            "It comes out at night near trees and crumbles at dawn. A [[bed]] lets you skip the night entirely.",
          ],
        },
        {
          note: "You've met one already if you scrolled through the homepage's After Dark section.",
        },
      ],
      related: ["night-stalker", "night", "bed"],
    },
    {
      id: "hostile-humanoids",
      name: "Hostile Humanoids",
      group: "Fighting",
      summary: "Upright, red-to-purple fighters with sword and shield. They read your swings, feint, and punish mistakes.",
      info: [
        ["Home world", "Always at least one kind"],
        ["Wind-up", "0.7 to 1.1 seconds"],
        ["Reach", "2.2 to 2.6 blocks"],
      ],
      body: [
        {
          p: "Humanoid enemies are coloured toward red and purple so they read as dangerous at a glance. Your home world always has one kind about, and like other hostiles they're mostly out at night.",
        },
        {
          h: "How they fight",
          steps: [
            "**Chase**, then circle you briefly, sizing you up.",
            "**Wind up** for the better part of a second. That's your window to dodge. Sometimes it's a **feint** and they break off.",
            "**Strike**: a committed step in and a hit.",
            "**Recover** for about a second. That's when you punish.",
          ],
        },
        {
          p: "If they see you winding up a heavy swing, they can raise a block that soaks most of it. Hit them hard enough, often enough, and they stagger.",
        },
      ],
      related: ["combat", "melee-weapon", "temperament"],
    },

    // ---------------------------------------------------------------- fighting
    {
      id: "combat",
      name: "Combat",
      group: "Fighting",
      summary: "Close-range and deliberate: light taps, charged heavy swings, and a ranged pistol. Read the wind-up, punish the recovery.",
      info: [
        ["Fists", "3 damage"],
        ["Melee reach", "3 blocks"],
        ["Heavy swing", "Hold 0.5 s, 2.2× damage"],
      ],
      body: [
        {
          h: "Weapons",
          table: {
            cols: ["Weapon", "Damage", "Notes"],
            rows: [
              ["Fists", "3", "Better than nothing"],
              ["[[stone-sword]]", "6", "Wood and rock, from the first bench"],
              ["[[melee-weapon]]", "8 to 32", "Hardness and Energy of its bars; light and heavy attacks"],
              ["[[pulse-pistol]]", "6 to 28 per shot", "Travelling bolt, 30-block range; leans on Energy"],
            ],
          },
        },
        {
          h: "Tips",
          list: [
            "Tap to swing quickly. Hold for half a second and release for a heavy blow that hits harder and staggers more, but a heavy wind-up can be read and blocked.",
            "Against [[hostile-humanoids|humanoids]], wait out the wind-up, sidestep, and hit during the recovery.",
            "Sidestep a [[night-stalker]]'s spit: it's thrown at where you're going, not where you are.",
            "Every weapon wears out. See each item for how many hits it lasts.",
          ],
        },
      ],
      related: ["melee-weapon", "pulse-pistol", "hostile-humanoids", "health"],
    },
  ],
});
