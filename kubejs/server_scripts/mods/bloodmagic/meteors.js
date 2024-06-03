// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.highPriorityData(allthemods => {
    let addMeteorWithCore = (id, explosionRadius, input, coreBlock, innerRadius, outerRadius, fillBlock, weightMap, syphon) => {
        let meteorJson = JsonIO.toObject(
            {
                "type": "bloodmagic:meteor",
                "explosion": explosionRadius,
                "input": input,
                "layers": [
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": coreBlock
                    },
                    "minWeight": 0,
                    "radius": innerRadius
                  },
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": fillBlock
                    },
                    "minWeight": 1000,
                    "radius": outerRadius,
                    "weightMap": weightMap
                  }
                ],
                "syphon": syphon
              }
        )

        allthemods.addJson(`bloodmagic:recipes/meteor/${id}`, meteorJson)
    }

    let addMeteor = (id, explosionRadius, input, radius, fillBlock, weightMap, syphon) => {
        let meteorJson = JsonIO.toObject(
            {
                "type": "bloodmagic:meteor",
                "explosion": explosionRadius,
                "input": input,
                "layers": [
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": fillBlock
                    },
                    "minWeight": 1000,
                    "radius": radius,
                    "weightMap": weightMap
                  }
                ],
                "syphon": syphon
              }
        )

        allthemods.addJson(`bloodmagic:recipes/meteor/${id}`, meteorJson)
    }
       
    const speedRuneMap = [
        {
            "block": "bloodmagic:dungeon_ore",
            "weight": 400
        },
        {
            "block": "bloodmagic:speedrune2",
            "weight": 30
        }
    ]

    const atmMap = [
        {
            "block": "allthemodium:unobtainium_ore",
            "weight": 50
        },
        {
            "block": "allthemodium:vibranium_ore",
            "weight": 75
        },
        {
            "block": "allthemodium:allthemodium_ore",
            "weight": 100
        }
    ]

    const diamondMap = [
        {
            "block": "minecraft:diamond_ore",
            "weight": 200
        },
        {
            "block": "minecraft:emerald_ore",
            "weight": 200
        },
        {
            "block": "minecraft:coal_ore",
            "weight": 400
        }
    ]

    const netherstarMap = [
        {
            "block": "minecraft:wither_skeleton_skull",
            "weight": 100
        },
        {
            "block": "allthetweaks:nether_star_block",
            "weight": 50
        }
    ]



    addMeteorWithCore('intricate_parts', 12, { "item": "bloodmagic:hellforgedparts" }, "bloodmagic:dungeon_ore", 1, 3, "bloodmagic:dungeon_stone", speedRuneMap, 5000000)
    addMeteor('allthemodium', 12, { "item": "allthemodium:unobtainium_ingot" }, 3, "allthemodium:ancient_stone", atmMap, 2500000)

    addMeteorWithCore('diamond_block', 16, { "item": "allthecompressed:diamond_block_1x" }, "minecraft:diamond_block", 2, 8, "minecraft:stone", diamondMap, 1000000)
    addMeteorWithCore('netherstar', 24, { "item": "allthecompressed:nether_star_block_1x" }, "allthetweaks:nether_star_block", 2, 5, "minecraft:soul_sand", netherstarMap, 7500000)

    addMeteorWithCore('intricate_parts_big', 24, { "item": "allthetweaks:withers_compass" }, "bloodmagic:dungeon_ore", 4, 6, "bloodmagic:dungeon_stone", speedRuneMap, 9750000)
    addMeteor('allthemodium_big', 12, { "item": "allthemodium:unobtainium_vibranium_alloy_block" }, 6, "allthemodium:ancient_stone", atmMap, 5000000)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
