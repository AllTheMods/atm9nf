// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('item', allthemods => {
  allthemods.add('minecraft:boats', /byg:\w+?_boat/)
  allthemods.add('minecraft:chest_boats', /byg:.+?_chest_boat/)
  allthemods.add('forge:plastic', 'pneumaticcraft:plastic')
  allthemods.add('forge:dusts/ender', 'ae2:ender_dust')
  allthemods.add('ars_nouveau:golem/shard', ['minecraft:amethyst_shard', 'ae2:certus_quartz_crystal'])
  allthemods.add('forge:raw_materials', ['silentgear:raw_azure_silver', 'silentgear:raw_crimson_iron'])
  allthemods.add('forge:rubber', ['ftbic:rubber','industrialforegoing:dryrubber','thermal:cured_rubber'])
  allthemods.add('mysticalagriculture:essences', [
    'mysticalagriculture:allthemodium_essence',
    'mysticalagriculture:azure_silver_essence',
    'mysticalagriculture:crimson_iron_essence',
    'mysticalagriculture:unobtainium_essence',
    'mysticalagriculture:vibranium_essence',
  ])
  allthemods.add('mysticalagriculture:seeds', [
    'mysticalagriculture:allthemodium_seeds',
    'mysticalagriculture:azure_silver_seeds',
    'mysticalagriculture:crimson_iron_seeds',
    'mysticalagriculture:unobtainium_seeds',
    'mysticalagriculture:vibranium_seeds',
  ])
  allthemods.remove('tombstone:seeds', 'mysticalagriculture:seeds')
  allthemods.remove('forge:seeds', '#mysticalagriculture:seeds')

  allthemods.add('forge:dusts', 'alltheores:netherite_dust')
  allthemods.add('forge:dusts/netherite', 'alltheores:netherite_dust')
  allthemods.add('forbidden_arcanus:modifier/eternal_incompatible',[
    '#alltheores:ore_hammers','@ftbic','minecraft:nether_star','bloodmagic:sanguinereverter','#occultism:miners/ores','apotheosis:potion_charm'
  ])

  // Mythicbotany tags
  allthemods.add('forge:raw_materials/elementium', 'mythicbotany:raw_elementium')
  allthemods.add('forge:storage_blocks/raw_elementium', 'mythicbotany:raw_elementium_block')

  allthemods.remove('forge:shears', 'allthemodium:alloy_paxel')
  allthemods.remove('forge:ingots/naquadah', 'sgjourney:naquadah')
  allthemods.remove('forge:ingots/naquadah_alloy', 'sgjourney:naquadah')
  allthemods.remove('forge:ingots/naquadah_alloy', 'sgjourney:naquadah_alloy')
  allthemods.remove('forge:purified_ores/naquadah', 'sgjourney:pure_naquadah')
  allthemods.remove('forge:rods/naquadah_alloy', 'sgjourney:naquadah_rod')
  allthemods.remove('forge:raw_materials/naquadah', 'sgjourney:raw_naquadah')

  // Croptopia
  allthemods.add('forge:dusts', 'croptopia:salt')
  allthemods.add('forge:dusts/salt', 'croptopia:salt')
  allthemods.add('supplementaries:hourglass_dusts', 'croptopia:salt')
  allthemods.add('minecolonies:reduceable_ingredient', 'croptopia:salt')
  // Mek
  allthemods.add('forge:storage_blocks', 'mekanism:block_salt')
	allthemods.add('forge:storage_blocks/salt', 'mekanism:block_salt')
  // Create
  allthemods.remove('create:safe_nbt', ['create:clipboard'])
  allthemods.add('create:non_movable',['@sophisticatedstorage'])
})

ServerEvents.tags('block', allthemods => {
  allthemods.add('buildinggadgets:blacklist/generic', '#forge:relocation_not_supported')
  allthemods.add('ae2:blacklisted/spatial', '#forge:relocation_not_supported')
  allthemods.add('forge:relocation_not_supported', [/productivebees:.+/, 'minecraft:beehive', 'minecraft:bee_nest', /integrateddynamics:.+/, '@waystones'])
  allthemods.add('ars_nouveau:golem/budding', [
    'minecraft:budding_amethyst',
    'ae2:damaged_budding_quartz',
    'ae2:chipped_budding_quartz',
    'ae2:flawed_budding_quartz',
    'ae2:flawless_budding_quartz'
  ])
  allthemods.add('industrialforegoingsouls:cant_accelerate', [
    'thermal:machine_insolator',
    'industrialforegoing:stasis_chamber',
    'industrialforegoing:laser_drill',
    '#productivebees:advanced_beehives',
    'industrialforegoing:hydroponic_bed'
  ])
  allthemods.add('ars_nouveau:golem/cluster', ['minecraft:amethyst_cluster', 'ae2:quartz_cluster'])
  allthemods.add('mysticalagriculture:crops', [
    'mysticalagriculture:allthemodium_crop',
    'mysticalagriculture:azure_silver_crop',
    'mysticalagriculture:crimson_iron_crop',
    'mysticalagriculture:unobtainium_crop',
    'mysticalagriculture:vibranium_crop'
  ])
  
  allthemods.add('minecraft:beacon_base_blocks', [
    'allthemodium:vibranium_allthemodium_alloy_block',
    'allthemodium:unobtainium_allthemodium_alloy_block',
    'allthemodium:unobtainium_vibranium_alloy_block',
    'allthetweaks:atm_star_block'
  ])

  allthemods.add('entangled:invalid_targets', ['@megacells','@expatternprovider','@cabletiers','@ae2','@refinedstorage'])

})

ServerEvents.tags('fluid', allthemods => {
  allthemods.remove('minecraft:water',[
    'ad_astra:oil','ad_astra:flowing_oil',
    'ad_astra:cryo_fuel','ad_astra:flowing_cryo_fuel',
    'ad_astra:fuel','ad_astra:flowing_fuel',
    'createaddition:flowing_seed_oil','createaddition:seed_oil',
    'createaddition:bioethanol','createaddition:flowing_bioethanol'])
  allthemods.add('forge:oil', '#forge:crude_oil')
})

ServerEvents.tags('entity_type', allthemods => {
  allthemods.add('kubejs:mob_blacklist', [/productivebees:.+/, 'allthemodium:piglich', 'artifacts:mimic', 'minecraft:iron_golem','minecraft:wither'])
  allthemods.add('mob_grinding_utils:no_swab', '#kubejs:mob_blacklist')
  allthemods.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')
  allthemods.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist')
  allthemods.add('industrialforegoing:mob_duplicator_blacklist', '#kubejs:mob_blacklist')
  allthemods.add('ars_nouveau:drygmy_blacklist', [/productivebees:.+/, 'artifacts:mimic'])
})

ServerEvents.tags('worldgen/biome', allthemods => {
  allthemods.add('botania:mystical_flower_spawnlist', 'allthemodium:mining')
  allthemods.add('botania:mystical_mushroom_spawnlist', [
    'allthemodium:the_other', 'allthemodium:soul_sand_valley', 'allthemodium:warped_forest',
    'allthemodium:desert_hills', 'allthemodium:desert', 'allthemodium:crimson_forest', 'allthemodium:basalt_deltas'])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.