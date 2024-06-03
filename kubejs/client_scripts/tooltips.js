// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// priority: 0

ItemEvents.tooltip(allthemods => {
  // Re-add Chemlib info to unified materials
  let chemlibTooltips = JsonIO.read('kubejs/client_scripts/chemlibCompat.json')
  chemlibTooltips.forEach((item, tooltips) => {
    allthemods.addAdvanced(item, (stack, advanced, text) => {
      text.add(1, tooltips[0])
      if (tooltips.length > 1) {
        text.add(2, tooltips[1])
      }
    })
  })
  
  //AllTheModium
  allthemods.add('allthemodium:teleport_pad',[
    Text.of('Place the pad down in the specified Dimension'),
    Text.of('Sneak Right Click with both hands empty to teleport'),
    Text.of('§aOverworld TO Mining Dimension').red(),
    Text.of('§cThe Nether TO The Other').red(),
    Text.of('§bThe End TO The Beyond')
  ])
  
  //Mekanism
  allthemods.add('mekanism:creative_energy_cube', [ [Text.of('Needs to be Energized').darkPurple()],])
  
  // Mob Grinding Utils
  allthemods.addAdvanced('mob_grinding_utils:rotten_egg', (stack, advanced, text) => {
    text.add(3, Text.of("Created from Cursed Chicken Feed").yellow())
  })
  allthemods.addAdvanced('mob_grinding_utils:golden_egg', (stack, advanced, text) => {
    text.add(3, Text.of("Created from Nutritious Chicken Feed").yellow())
  })
  
  // RS Infinity Booster
  allthemods.add('rsinfinitybooster:infinity_card', [
    Text.of('Infinite range for RS wireless'),
    Text.of('Only works in the same dimension')
  ])
  allthemods.add('rsinfinitybooster:dimension_card', [
    Text.of('Infinite range for RS wireless'),
    Text.of('Works across dimensions')
  ])

  // AE2 Infinity Booster
  allthemods.add('aeinfinitybooster:infinity_card', [
    Text.of('Infinite range for AE2 wireless'),
    Text.of('Only works in the same dimension')
  ])
  allthemods.add('aeinfinitybooster:dimension_card', [
    Text.of('Infinite range for AE2 wireless'),
    Text.of('Works across dimensions')
  ])

  // Extradisks
  allthemods.add('extradisks:infinite_storage_disk', [Text.of('Recipe disabled').red()])
  allthemods.add('extradisks:infinite_storage_block', [Text.of('Recipe disabled').red()])
  allthemods.add('extradisks:infinite_storage_part', [Text.of('Recipe disabled').red()])
  allthemods.add('extradisks:infinite_fluid_storage_disk', [Text.of('Recipe disabled').red()])
  allthemods.add('extradisks:infinite_fluid_storage_block', [Text.of('Recipe disabled').red()])
  allthemods.add('extradisks:infinite_fluid_storage_part', [Text.of('Recipe disabled').red()])

  //pipes
  allthemods.add('pipez:item_pipe', [
    [Text.of('Default:'), ' ', Text.of('4'), ' ', Text.of('items/20t')],
    [Text.of('Basic:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
    [Text.of('Improved:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()]
  ])
  allthemods.add('pipez:fluid_pipe', [
    [Text.of('Default:'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
  ])
  allthemods.add('pipez:gas_pipe', [
    [Text.of('Default:'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()]
  ])
  allthemods.add('pipez:energy_pipe', [
    [Text.of('Default:'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
    [Text.of('Basic:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()]
  ])

  //upgrades
  allthemods.add('pipez:basic_upgrade', [
    [Text.of('Item:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
    [Text.of('Fluid:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Gas:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Energy:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
  ])
  allthemods.add('pipez:improved_upgrade', [
    [Text.of('Item:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
    [Text.of('Fluid:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Gas:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Energy:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
  ])
  allthemods.add('pipez:advanced_upgrade', [
    [Text.of('Item:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
    [Text.of('Fluid:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Gas:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Energy:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
  ])
  allthemods.add('pipez:ultimate_upgrade', [
    [Text.of('Item:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
    [Text.of('Fluid:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Gas:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Energy:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
  ])
  
  
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
