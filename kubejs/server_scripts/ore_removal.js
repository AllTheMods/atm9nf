// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.highPriorityData(allthemods => {
    allthemods.addJson('immersiveengineering:forge/biome_modifier/bauxite', {
        type: "forge:remove_features",
        biomes: "#minecraft:is_overworld",
        features: "immersiveengineering:bauxite",
        step: "underground_ores"
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.