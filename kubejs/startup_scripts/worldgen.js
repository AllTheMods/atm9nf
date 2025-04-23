// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

WorldgenEvents.remove(allthemods => {
  allthemods.removeOres(props => {
    props.worldgenLayer = 'underground_ores';
    props.blocks = [
      "create:zinc_ore",
      "create:deepslate_zinc_ore",
      "occultism:silver_ore",
      "occultism:silver_ore_deepslate",
      "bigreactors:yellorite_ore",
      "immersiveengineering:ore_aluminum",
      "immersiveengineering:deepslate_ore_aluminum"
    ]
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.