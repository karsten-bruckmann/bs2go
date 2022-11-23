import { Rooster } from '../../models/rooster.model';

export const testCases: { html: string; rooster: Rooster }[] = [
  {
    rooster: {
      title:
        'Killadakka Kriegerhaufen (Warhammer 40,000 9th Edition) [33 PL, 510pts]',
      summaries: [
        {
          name: 'Force Rules',
          textItems: [
            '<span class="bold">Ork Detachment Abilities:</span> - &lt;CLAN&gt; units (excluding GRETCHIN units) in ORKS Detachments gain the Clan Kulturs ability.<br> - Troops units (excluding GRETCHIN units) in ORKS Detachments gain the Objective Secured ability (this ability is described in the Warhammer 40,000 Core Book). ()',
            '<span class="bold">Waaagh!:</span> If your WARLORD is a WARBOSS, then once per battle, in your Command phase, you can call a Waaagh!. To do so, that WARBOSS must be on the battlefield or embarked on a TRANSPORT that is on the battlefield. If your WARLORD is a SPEEDBOSS, then once per battle, in your COmmand phase, you can instead call a Speedwaaagh!. To do so, that SPEEDBOSS must be on the battlefield. If your WARLORD is GHAZGHKULL THRAKA, you can instead call a Great Waaagh!.<br> <br> To do so, GHAZGHKULL THRAKA must be on the battlefield or embarked on a TRANSPORT that is on the battlefield.<br> <br> A Waaagh! and Speedwaagh! each have two stages. The first stage is active from when the Waaagh! or Speedwaaagh! is called, and lasts until the start of your next Command phase. When the first stage ends, the second stage starts, and lasts until the start of your subsequent Command phase. After this point, the Waaagh! or Speedwaaagh! is no longer active, and has no further effect. Calling a Great Waaagh! is treated as calling both a Waaagh! and a Speedwaagh! at the same time. Both are active from when the Great Waaagh! is called, and each stage starts and finishes as described above.<br> <br> WAAAAGH!<br> Stage 1: Call Da Waaagh!<br> - ORKS CORE and ORKS CHARACTER units from your army are eligible to declare a charge even if they Advanced this turn.<br> - Add 1 to the Strength and Attacks characteristic or ORKS models from your army.<br> - ORKS models from your army have a 5+ invulnerable save.<br> <br> Stage 2: Get Stuck In!<br> - Add 1 to the Strength and Attacks characteristic of ORKS models from your army.<br> - ORKS models from your army have a 6+ invulnerable save.<br> <br> SPEEDWAAAGH!<br> Stage 1: Da Big Race<br> - ORKS models from your army do not suffer the penalty incurred to their hit rolls for firing Assault weapons in the same turn their unit Advanced. Each time an ORKS VEHICLE or ORKS BIKER model from your army shoots with a Dakka weapon, make 1 additional attack with that weapon.<br> - Each time a model in an ORKS VEHICLE or ORKS BIKER unit from your army makes a ranged attack, improve the Armour Penetration charcateristic of that attack by 1.<br> <br> Stage 2: Give \'Em Sum Dakka!<br> - Each time a model in an ORKS VEHICLE or ORKS BIKER unit from your army makes a ranged attack, improve the Armour Penetration charcateristic of that attack by 1. (Codex: Orks 2021 p81)',
          ],
        },
        {
          name: 'Selection Rules',
          textItems: [
            '<span class="bold">\'Ere We Go!:</span> You can re-roll charge rolls made for units with this ability. (Codex: Orks 2021 p82)',
            '<span class="bold">Airborne:</span> This model cannot charge, can only be charged by units that can FLY, and can only attack or be attacked in the Fight phase by units that can FLY. ()',
            '<span class="bold">Hard to Hit:</span> Your opponent must subtract 1 from hit rolls for attacks that target this model in the Shooting phase. ()',
            '<span class="bold">Mob Rule:</span> While this unit is within 6" of a friendly &lt;CLAN&gt; MOB unit that is not under half strength, this unit is never considered to be under half strength (Codex: Orks 2021 p82)',
          ],
        },
      ],
      forces: [
        {
          name: 'Unbound Army (Faction) (Orks)',
          categories: [
            {
              name: 'Configuration',
              sections: [
                {
                  name: 'Clan Kultur',
                  sections: [],
                  textItems: [
                    '\n                    <span class="bold">Selections:</span> No Clan / Specialist\n                    Mob\n                  ',
                    '\n                    <span class="bold">Abilities:</span>\n                    <span class="italic">No Clan</span>\n                  ',
                  ],
                  tables: [
                    {
                      name: 'Abilities',
                      header: ['Abilities', 'Description', 'Ref'],
                      rows: [
                        [
                          'No Clan',
                          'You can take units from multiple Clans and Mobs, but you lose access to particular Clan Kultures and Subkulturs',
                          '',
                        ],
                      ],
                    },
                  ],
                },
                {
                  name: 'Game Type',
                  sections: [],
                  textItems: ['<span class="bold">Selections:</span> Open'],
                  tables: [],
                },
              ],
            },
            {
              name: 'No Force Org Slot',
              sections: [
                {
                  name: 'Runtherd',
                  sections: [],
                  textItems: [
                    '<span class="bold">Selections:</span> Grabba Stikk',
                    '\n                    <span class="bold">Rules:</span>\n                    <span class="italic">\'Ere We Go!</span>\n                  ',
                    '\n                    <span class="bold">Abilities:</span>\n                    <span class="italic">Runtherd (Restriction)</span>,\n                    <span class="bold">Unit:</span>\n                    <span class="italic">Runtherd</span>,\n                    <span class="bold">Weapon:</span>\n                    <span class="italic">Grabba Stikk, Slugga</span>\n                  ',
                  ],
                  tables: [
                    {
                      name: 'Abilities',
                      header: ['Abilities', 'Description', 'Ref'],
                      rows: [
                        [
                          'Runtherd (Restriction)',
                          'If your army is Battle-forged, you must include at least one GRETCHIN INFANTRY unit in a Detachment for each RUNTHERD unit in that Detachment. RUNTHERD units do not take up slots in a Detachment.',
                          'Codex: Orks 2021 p97',
                        ],
                      ],
                    },
                    {
                      name: 'Unit',
                      header: [
                        'Unit',
                        'M',
                        'WS',
                        'BS',
                        'S',
                        'T',
                        'W',
                        'A',
                        'Ld',
                        'Save',
                        'Ref',
                      ],
                      rows: [
                        [
                          'Runtherd',
                          '5"',
                          '3+',
                          '5+',
                          '4',
                          '5',
                          '4',
                          '3',
                          '7',
                          '6+',
                          'Codex: Orks 2021 p97',
                        ],
                      ],
                    },
                    {
                      name: 'Weapon',
                      header: [
                        'Weapon',
                        'Range',
                        'Type',
                        'S',
                        'AP',
                        'D',
                        'Abilities',
                        'Ref',
                      ],
                      rows: [
                        [
                          'Grabba Stikk',
                          'Melee',
                          'Melee',
                          '+1',
                          '0',
                          '1',
                          'Each time the bearer fights it can make 1 additional attack with this weapon.',
                          'Codex: Orks 2021 p97',
                        ],
                        [
                          'Slugga',
                          '12"',
                          'Pistol 1',
                          '4',
                          '0',
                          '1',
                          '-',
                          'Codex: Orks 2021 p120',
                        ],
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'HQ',
              sections: [
                {
                  name: 'Big Mek [Legends]',
                  sections: [],
                  textItems: [
                    '<span class="bold">Selections:</span> Choppa, Slugga',
                    '\n                    <span class="bold">Rules:</span>\n                    <span class="italic">\'Ere We Go!, Mob Rule</span>\n                  ',
                    '\n                    <span class="bold">Abilities:</span>\n                    <span class="italic">Big Mekaniak</span>,\n                    <span class="bold">Unit:</span>\n                    <span class="italic">Big Mek</span>,\n                    <span class="bold">Weapon:</span>\n                    <span class="italic">Choppa, Slugga, Stikkbomb</span>\n                  ',
                  ],
                  tables: [
                    {
                      name: 'Abilities',
                      header: ['Abilities', 'Description', 'Ref'],
                      rows: [
                        [
                          'Big Mekaniak',
                          'At the end of your Movement phase, this model can repair a single friendly <CLAN> VEHICLE model within 3". That model regains D3 lost wounds. Each model can only be repaired once per turn.',
                          'Codex: Orks 2021 p86',
                        ],
                      ],
                    },
                    {
                      name: 'Unit',
                      header: [
                        'Unit',
                        'M',
                        'WS',
                        'BS',
                        'S',
                        'T',
                        'W',
                        'A',
                        'Ld',
                        'Save',
                        'Ref',
                      ],
                      rows: [
                        [
                          'Big Mek',
                          '5"',
                          '3+',
                          '5+',
                          '5',
                          '4',
                          '4',
                          '3',
                          '7',
                          '4+',
                          'Index: Xenos 2 p14',
                        ],
                      ],
                    },
                    {
                      name: 'Weapon',
                      header: [
                        'Weapon',
                        'Range',
                        'Type',
                        'S',
                        'AP',
                        'D',
                        'Abilities',
                        'Ref',
                      ],
                      rows: [
                        [
                          'Choppa',
                          'Melee',
                          'Melee',
                          'User',
                          '-1',
                          '1',
                          'Each time the bearer fights, it can make 1 additional attack with this weapon.',
                          'Codex: Orks 2021 p121',
                        ],
                        [
                          'Slugga',
                          '12"',
                          'Pistol 1',
                          '4',
                          '0',
                          '1',
                          '-',
                          'Codex: Orks 2021 p120',
                        ],
                        [
                          'Stikkbomb',
                          '8"',
                          'Grenade D6',
                          '3',
                          '0',
                          '1',
                          'Blast',
                          'Codex: Orks 2021 p129',
                        ],
                      ],
                    },
                  ],
                },
                {
                  name: 'Deffkilla Wartrike',
                  sections: [],
                  textItems: [
                    '<span class="bold">Selections:</span> Warlord',
                    '\n                    <span class="bold">Rules:</span>\n                    <span class="italic">\'Ere We Go!</span>\n                  ',
                    '\n                    <span class="bold">Abilities:</span>\n                    <span class="italic">Big Red Button, Dead Tough, Explodes, Fuel Mixa Grot,\n                      Killa Jet, Ramshackle</span>, <span class="bold">Unit:</span>\n                    <span class="italic">Deffkilla Wartrike</span>,\n                    <span class="bold">Weapon:</span>\n                    <span class="italic">Killa Jet (Burna), Killa Jet (Cutta), Snagga Klaw , Twin\n                      Boomstick</span>\n                  ',
                  ],
                  tables: [
                    {
                      name: 'Abilities',
                      header: ['Abilities', 'Description', 'Ref'],
                      rows: [
                        [
                          'Big Red Button',
                          'Each time this model Advances, do not make an Advance roll. Instead, until the end of the phase, add 6" to the Move characteristic of this model.',
                          '',
                        ],
                        [
                          'Dead Tough',
                          'This model has a 5+ invulnerable save.',
                          '',
                        ],
                        [
                          'Explodes',
                          'If this model is reduced to 0 wounds, roll a D6 before removing it from the battlefield and before any embarked models disembark. On a 6 it explodes, and each unit within 3" suffers 1 mortal wound.',
                          '',
                        ],
                        [
                          'Fuel Mixa Grot',
                          'Once per battle when this model advances, do not make an Advance roll, Instead, until the end of the phase, add 9" to the Move characteristic of this model.',
                          '',
                        ],
                        [
                          'Killa Jet',
                          'Before selecting targets, select one of the profiles below to make attacks with.',
                          '',
                        ],
                        [
                          'Ramshackle',
                          'Each time an attack is allocated to this model, unless that attack has a Strength characteristic of 8 or more, subtract 1 from the Damage characteristic of that attack (to a minimum of 1)',
                          'Codex: Orks 2021 p113',
                        ],
                      ],
                    },
                    {
                      name: 'Unit',
                      header: [
                        'Unit',
                        'M',
                        'WS',
                        'BS',
                        'S',
                        'T',
                        'W',
                        'A',
                        'Ld',
                        'Save',
                        'Ref',
                      ],
                      rows: [
                        [
                          'Deffkilla Wartrike',
                          '14"',
                          '2+',
                          '5+',
                          '5',
                          '6',
                          '8',
                          '5',
                          '7',
                          '4+',
                          'Codex: Orks 2021 p89',
                        ],
                      ],
                    },
                    {
                      name: 'Weapon',
                      header: [
                        'Weapon',
                        'Range',
                        'Type',
                        'S',
                        'AP',
                        'D',
                        'Abilities',
                        'Ref',
                      ],
                      rows: [
                        [
                          'Killa Jet (Burna)',
                          '12"',
                          'Assault D6',
                          '5',
                          '-1',
                          '1',
                          'Each time an attack is made with this weapon profile, that attack automatically hits the target.',
                          '',
                        ],
                        [
                          'Killa Jet (Cutta)',
                          '12"',
                          'Assault 2',
                          '8',
                          '-4',
                          'D6',
                          'Each time an attack made with this weapon profile targets a unit within half range, that attack has a Damage characteristic of D6+2',
                          '',
                        ],
                        [
                          'Snagga Klaw',
                          'Melee',
                          'Melee',
                          '+2',
                          '-2',
                          '2',
                          'Each time an attack is made with this weapon, you can re-roll the wound roll.',
                          '',
                        ],
                        [
                          'Twin Boomstick',
                          '12"',
                          'Assault 2',
                          '5',
                          '0',
                          '1',
                          '',
                          '',
                        ],
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'Troops',
              sections: [
                {
                  name: 'Boyz',
                  sections: [
                    {
                      name: 'Boss Nob',
                      sections: [],
                      textItems: [
                        '\n                        <span class="bold">Selections:</span> Choppa, Slugga\n                      ',
                        '\n                        <span class="bold">Unit:</span>\n                        <span class="italic">Boss Nob</span>,\n                        <span class="bold">Weapon:</span>\n                        <span class="italic">Choppa, Slugga, Stikkbomb</span>\n                      ',
                      ],
                      tables: [],
                    },
                    {
                      name: '9x Ork Boy w/ Slugga & Choppa',
                      sections: [],
                      textItems: [
                        '\n                        <span class="bold">Selections:</span> 9x Choppa, 9x\n                        Slugga, 9x Stikkbombs\n                      ',
                        '\n                        <span class="bold">Unit:</span>\n                        <span class="italic">Ork Boy</span>,\n                        <span class="bold">Weapon:</span>\n                        <span class="italic">Choppa, Slugga, Stikkbomb</span>\n                      ',
                      ],
                      tables: [],
                    },
                  ],
                  textItems: [
                    '\n                    <span class="bold">Rules:</span>\n                    <span class="italic">\'Ere We Go!, Mob Rule</span>\n                  ',
                  ],
                  tables: [
                    {
                      name: 'Unit',
                      header: [
                        'Unit',
                        'M',
                        'WS',
                        'BS',
                        'S',
                        'T',
                        'W',
                        'A',
                        'Ld',
                        'Save',
                        'Ref',
                      ],
                      rows: [
                        [
                          'Boss Nob',
                          '5"',
                          '3+',
                          '5+',
                          '5',
                          '5',
                          '2',
                          '3',
                          '7',
                          '6+',
                          'Codex: Orks 2021 p91',
                        ],
                        [
                          'Ork Boy',
                          '5"',
                          '3+',
                          '5+',
                          '4',
                          '5',
                          '1',
                          '2',
                          '6',
                          '6+',
                          'Codex: Orks 2021 p89',
                        ],
                      ],
                    },
                    {
                      name: 'Weapon',
                      header: [
                        'Weapon',
                        'Range',
                        'Type',
                        'S',
                        'AP',
                        'D',
                        'Abilities',
                        'Ref',
                      ],
                      rows: [
                        [
                          'Choppa',
                          'Melee',
                          'Melee',
                          'User',
                          '-1',
                          '1',
                          'Each time the bearer fights, it can make 1 additional attack with this weapon.',
                          'Codex: Orks 2021 p121',
                        ],
                        [
                          'Slugga',
                          '12"',
                          'Pistol 1',
                          '4',
                          '0',
                          '1',
                          '-',
                          'Codex: Orks 2021 p120',
                        ],
                        [
                          'Stikkbomb',
                          '8"',
                          'Grenade D6',
                          '3',
                          '0',
                          '1',
                          'Blast',
                          'Codex: Orks 2021 p129',
                        ],
                      ],
                    },
                  ],
                },
                {
                  name: 'Gretchin',
                  sections: [
                    {
                      name: '10x Gretchin',
                      sections: [],
                      textItems: [
                        '\n                        <span class="bold">Selections:</span> 10x Grot Blaster\n                      ',
                        '\n                        <span class="bold">Unit:</span>\n                        <span class="italic">Gretchin</span>,\n                        <span class="bold">Weapon:</span>\n                        <span class="italic">Grot Blaster</span>\n                      ',
                      ],
                      tables: [],
                    },
                  ],
                  textItems: [
                    '\n                    <span class="bold">Abilities:</span>\n                    <span class="italic">Cowardly, Diminutive</span>\n                  ',
                  ],
                  tables: [
                    {
                      name: 'Abilities',
                      header: ['Abilities', 'Description', 'Ref'],
                      rows: [
                        [
                          'Cowardly',
                          'Unless a friendly RUNTHERD model is within 6" of this unit, each time a model in this unit makes a Combat Attrition test, subtract 1 from the result.',
                          '',
                        ],
                        [
                          'Diminutive',
                          'Each time a ranged attack is allocated to a model in this unit while it is receiving the benefits of cover, add an additional 1 to any armour saving throw made against that attack.',
                          'Codex: Orks 2021',
                        ],
                      ],
                    },
                    {
                      name: 'Unit',
                      header: [
                        'Unit',
                        'M',
                        'WS',
                        'BS',
                        'S',
                        'T',
                        'W',
                        'A',
                        'Ld',
                        'Save',
                        'Ref',
                      ],
                      rows: [
                        [
                          'Gretchin',
                          '5"',
                          '5+',
                          '4+',
                          '2',
                          '3',
                          '1',
                          '1',
                          '4',
                          '7+',
                          'Codex: Orks 2021 p91',
                        ],
                      ],
                    },
                    {
                      name: 'Weapon',
                      header: [
                        'Weapon',
                        'Range',
                        'Type',
                        'S',
                        'AP',
                        'D',
                        'Abilities',
                        'Ref',
                      ],
                      rows: [
                        [
                          'Grot Blaster',
                          '12"',
                          'Pistol 1',
                          '3',
                          '0',
                          '1',
                          '-',
                          'Codex: Orks 2021 p119',
                        ],
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'Elites',
              sections: [
                {
                  name: 'Nobz',
                  sections: [
                    {
                      name: 'Boss Nob',
                      sections: [],
                      textItems: [
                        '\n                        <span class="bold">Selections:</span> Choppa, Slugga\n                      ',
                        '\n                        <span class="bold">Unit:</span>\n                        <span class="italic">Boss Nob (Nobz)</span>,\n                        <span class="bold">Weapon:</span>\n                        <span class="italic">Choppa, Slugga, Stikkbomb</span>\n                      ',
                      ],
                      tables: [],
                    },
                    {
                      name: 'Nob',
                      sections: [],
                      textItems: [
                        '\n                        <span class="bold">Selections:</span> Choppa, Slugga\n                      ',
                        '\n                        <span class="bold">Unit:</span>\n                        <span class="italic">Nob</span>,\n                        <span class="bold">Weapon:</span>\n                        <span class="italic">Choppa, Slugga, Stikkbomb</span>\n                      ',
                      ],
                      tables: [],
                    },
                    {
                      name: 'Nob',
                      sections: [],
                      textItems: [
                        '\n                        <span class="bold">Selections:</span> Choppa, Slugga\n                      ',
                        '\n                        <span class="bold">Unit:</span>\n                        <span class="italic">Nob</span>,\n                        <span class="bold">Weapon:</span>\n                        <span class="italic">Choppa, Slugga, Stikkbomb</span>\n                      ',
                      ],
                      tables: [],
                    },
                    {
                      name: 'Nob',
                      sections: [],
                      textItems: [
                        '\n                        <span class="bold">Selections:</span> Choppa, Slugga\n                      ',
                        '\n                        <span class="bold">Unit:</span>\n                        <span class="italic">Nob</span>,\n                        <span class="bold">Weapon:</span>\n                        <span class="italic">Choppa, Slugga, Stikkbomb</span>\n                      ',
                      ],
                      tables: [],
                    },
                    {
                      name: 'Nob',
                      sections: [],
                      textItems: [
                        '\n                        <span class="bold">Selections:</span> Choppa, Slugga\n                      ',
                        '\n                        <span class="bold">Unit:</span>\n                        <span class="italic">Nob</span>,\n                        <span class="bold">Weapon:</span>\n                        <span class="italic">Choppa, Slugga, Stikkbomb</span>\n                      ',
                      ],
                      tables: [],
                    },
                  ],
                  textItems: [
                    '\n                    <span class="bold">Rules:</span>\n                    <span class="italic">\'Ere We Go!, Mob Rule</span>\n                  ',
                  ],
                  tables: [
                    {
                      name: 'Unit',
                      header: [
                        'Unit',
                        'M',
                        'WS',
                        'BS',
                        'S',
                        'T',
                        'W',
                        'A',
                        'Ld',
                        'Save',
                        'Ref',
                      ],
                      rows: [
                        [
                          'Boss Nob (Nobz)',
                          '5"',
                          '3+',
                          '5+',
                          '5',
                          '5',
                          '2',
                          '3',
                          '7',
                          '4+',
                          'Codex: Orks 2021 p102',
                        ],
                        [
                          'Nob',
                          '5"',
                          '3+',
                          '5+',
                          '5',
                          '5',
                          '2',
                          '3',
                          '7',
                          '4+',
                          'Codex: Orks 2021 p102',
                        ],
                      ],
                    },
                    {
                      name: 'Weapon',
                      header: [
                        'Weapon',
                        'Range',
                        'Type',
                        'S',
                        'AP',
                        'D',
                        'Abilities',
                        'Ref',
                      ],
                      rows: [
                        [
                          'Choppa',
                          'Melee',
                          'Melee',
                          'User',
                          '-1',
                          '1',
                          'Each time the bearer fights, it can make 1 additional attack with this weapon.',
                          'Codex: Orks 2021 p121',
                        ],
                        [
                          'Slugga',
                          '12"',
                          'Pistol 1',
                          '4',
                          '0',
                          '1',
                          '-',
                          'Codex: Orks 2021 p120',
                        ],
                        [
                          'Stikkbomb',
                          '8"',
                          'Grenade D6',
                          '3',
                          '0',
                          '1',
                          'Blast',
                          'Codex: Orks 2021 p129',
                        ],
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'Flyer',
              sections: [
                {
                  name: 'Dakkajet',
                  sections: [],
                  textItems: [
                    '\n                    <span class="bold">Rules:</span>\n                    <span class="italic">Airborne, Hard to Hit</span>\n                  ',
                    '\n                    <span class="bold">Abilities:</span>\n                    <span class="italic">Explodes, Ramshackle, Supersonic</span>, <span class="bold">Unit:</span>\n                    <span class="italic">Dakkajet [1] (7+ Wounds), Dakkajet [2] (4-6 Wounds),\n                      Dakkajet [3] (1-3 Wounds)</span>, <span class="bold">Weapon:</span>\n                    <span class="italic">Supa Shoota</span>\n                  ',
                  ],
                  tables: [
                    {
                      name: 'Abilities',
                      header: ['Abilities', 'Description', 'Ref'],
                      rows: [
                        [
                          'Explodes',
                          'When this model is destroyed, roll one D6 before any embarked models disembark and before removing it from play. On a 6, it explodes, and each unit within 6" suffers D3 moral wounds.',
                          '',
                        ],
                        [
                          'Ramshackle',
                          'Each time an attack is allocated to this model, unless that attack has a Strength characteristic of 8 or more, subtract 1 from the Damage characteristic of that attack (to a minimum of 1)',
                          'Codex: Orks 2021 p113',
                        ],
                        [
                          'Supersonic',
                          'Each time this model makes a Normal Move, Advances or Falls Back, first pivot it on the spot up to 90 degress (this does not contribute to how far the model moves), then move the model straight fowards. It cannot pivot again after the initial pivot.',
                          '',
                        ],
                      ],
                    },
                    {
                      name: 'Unit',
                      header: [
                        'Unit',
                        'M',
                        'WS',
                        'BS',
                        'S',
                        'T',
                        'W',
                        'A',
                        'Ld',
                        'Save',
                        'Ref',
                      ],
                      rows: [
                        [
                          'Dakkajet [1] (7+ Wounds)',
                          '20-60"',
                          '5+',
                          '5+',
                          '6',
                          '6',
                          '12',
                          '3',
                          '6',
                          '4+',
                          'Codex: Orks 2021 p114',
                        ],
                        [
                          'Dakkajet [2] (4-6 Wounds)',
                          '20-40"',
                          '5+',
                          '5+',
                          '6',
                          '6',
                          'N/A',
                          'D3',
                          '6',
                          '4+',
                          'Codex: Orks 2021 p114',
                        ],
                        [
                          'Dakkajet [3] (1-3 Wounds)',
                          '20-40"',
                          '5+',
                          '6+',
                          '6',
                          '6',
                          'N/A',
                          '1',
                          '6',
                          '4+',
                          'Codex: Orks 2021 p114',
                        ],
                      ],
                    },
                    {
                      name: 'Weapon',
                      header: [
                        'Weapon',
                        'Range',
                        'Type',
                        'S',
                        'AP',
                        'D',
                        'Abilities',
                        'Ref',
                      ],
                      rows: [
                        [
                          'Supa Shoota',
                          '36"',
                          'Dakka 6/4',
                          '6',
                          '-1',
                          '1',
                          '-',
                          'Codex: Orks 2021 p120',
                        ],
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    html: `<html>
  <head>
    <meta name="viewport" content="width=670" />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,700;1,400&family=Oswald:wght@700&display=swap');

      div.battlescribe {
        --text-color: #1c311a;
        --font: 'Crimson Pro', serif;
        --theme-font: 'Oswald', sans-serif;
        --theme-color: #222e33;
        --theme-color-contrast: white;
        --theme-color-light: #d2e0e7;
      }
      div.battlescribe li.category:first-child,
      div.battlescribe div.summary {
        --text-color: #1c311a;
        --font: 'Crimson Pro', serif;
        --theme-font: 'Oswald', sans-serif;
        --theme-color: #e3510e;
        --theme-color-contrast: white;
        --theme-color-light: #f2e5df;
      }

      div.battlescribe * {
        font-family: var(--font);
        color: var(--text-color);
        padding: 0;
        margin: 0;
      }

      div.battlescribe {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        font-size: 16px;
      }

      div.battlescribe h1,
      div.battlescribe h2,
      div.battlescribe h3,
      div.battlescribe h4,
      div.battlescribe th {
        margin: 0;
        text-align: center;
        font-family: var(--theme-font);
        color: var(--theme-color);
      }

      div.battlescribe h1 {
        font-size: 300%;
        margin-bottom: 50px;
        font-weight: bold;
      }

      div.battlescribe h2 {
        font-size: 200%;
        margin-bottom: 40px;
        font-weight: bold;
      }

      div.battlescribe h3 {
        font-size: 166%;
        margin-bottom: 30px;
        font-weight: bold;
      }

      div.battlescribe h4 {
        font-size: 133%;
      }
      div.battlescribe h4,
      div.battlescribe th {
        margin: 0;
        padding: 3px;
        font-weight: bold;
        background: var(--theme-color-light);
      }

      div.battlescribe p,
      div.battlescribe td {
        margin: 0;
        padding: 3px;
      }

      div.battlescribe p {
        margin: 10px 0;
      }

      div.battlescribe li {
        list-style: none;
      }

      div.battlescribe table:not(:last-child) {
        margin-bottom: 30px;
      }

      div.battlescribe li.category:not(:first-child),
      div.battlescribe div.summary {
        page-break-before: always;
      }

      div.battlescribe li.force > h2,
      div.battlescribe li.force > p {
        display: none;
      }

      div.battlescribe li.category li.rootselection {
        border: 1px solid var(--theme-color);
        margin-bottom: 50px;
        page-break-inside: avoid;
        padding: 3px;
      }

      div.battlescribe li.category li.rootselection > h4 {
        font-family: var(--theme-font);
        background: var(--theme-color);
        color: var(--theme-color-contrast);
        font-weight: bold;
        margin: -3px -3px 3px -3px;
      }

      div.battlescribe .bold {
        font-weight: bold;
      }
      div.battlescribe .italic {
        font-style: italic;
      }

      div.battlescribe li.category li.rootselection table {
        width: 100%;
        background: var(--theme-color-light);
      }

      div.battlescribe li.category li.rootselection th,
      div.battlescribe li.category li.rootselection td {
        vertical-align: top;
      }

      div.battlescribe li.category li.rootselection th {
        font-weight: bold;
        text-align: start;
      }

      div.battlescribe li.category li.rootselection td {
        background: var(--theme-color-contrast);
      }

      div.battlescribe li.category li.rootselection td:first-child {
        min-width: 50px;
      }

      div.battlescribe li.category li.rootselection td:first-child {
        width: 200px;
      }

      div.battlescribe li.category li.rootselection td:not(:nth-last-child(2)) {
        white-space: pre;
      }

      /** Ref TDs */
      div.battlescribe li.category li.rootselection th:last-child,
      div.battlescribe li.category li.rootselection td:last-child {
        display: none;
      }

      div.battlescribe li.category li.rootselection > ul {
        width: 100%;
        display: flex;
      }

      div.battlescribe li.category li.rootselection > ul > li {
        background: var(--theme-color-light);
        width: 100%;
        padding: 3px;
        width: 33%;
      }
      div.battlescribe li.category li.rootselection > ul > li h4 {
        font-size: 16px;
      }

      div.battlescribe li.category li.rootselection > ul > li:not(:last-child) {
        margin-right: 10px;
      }
    </style>
  </head>
  <body class="battlescribe">
    <div class="battlescribe">
      <h1>
        Killadakka Kriegerhaufen (Warhammer 40,000 9th Edition) [33 PL, 510pts]
      </h1>
      <ul>
        <li class="force">
          <h2>Unbound Army (Faction) (Orks)</h2>
          <p class="rule-names">
            <span class="bold">Rules:</span>
            <span class="italic">Ork Detachment Abilities, Waaagh!</span>
          </p>
          <ul>
            <li class="category">
              <h3>Configuration</h3>
              <ul>
                <li class="rootselection">
                  <h4>Clan Kultur</h4>
                  <p>
                    <span class="bold">Selections:</span> No Clan / Specialist
                    Mob
                  </p>
                  <p class="profile-names">
                    <span class="bold">Abilities:</span>
                    <span class="italic">No Clan</span>
                  </p>
                  <br />
                  <table cellspacing="-1">
                    <tr>
                      <th>Abilities</th>
                      <th>Description</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">No Clan</td>
                      <td>
                        You can take units from multiple Clans and Mobs, but you
                        lose access to particular Clan Kultures and Subkulturs
                      </td>
                      <td></td>
                    </tr>
                  </table>
                </li>
                <li class="rootselection">
                  <h4>Game Type</h4>
                  <p><span class="bold">Selections:</span> Open</p>
                </li>
              </ul>
            </li>
            <li class="category">
              <h3>No Force Org Slot</h3>
              <ul>
                <li class="rootselection">
                  <h4>Runtherd</h4>
                  <p><span class="bold">Selections:</span> Grabba Stikk</p>
                  <p class="rule-names">
                    <span class="bold">Rules:</span>
                    <span class="italic">'Ere We Go!</span>
                  </p>
                  <p class="profile-names">
                    <span class="bold">Abilities:</span>
                    <span class="italic">Runtherd (Restriction)</span>,
                    <span class="bold">Unit:</span>
                    <span class="italic">Runtherd</span>,
                    <span class="bold">Weapon:</span>
                    <span class="italic">Grabba Stikk, Slugga</span>
                  </p>
                  <br />
                  <table cellspacing="-1">
                    <tr>
                      <th>Abilities</th>
                      <th>Description</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Runtherd (Restriction)</td>
                      <td>
                        If your army is Battle-forged, you must include at least
                        one GRETCHIN INFANTRY unit in a Detachment for each
                        RUNTHERD unit in that Detachment. RUNTHERD units do not
                        take up slots in a Detachment.
                      </td>
                      <td>Codex: Orks 2021 p97</td>
                    </tr>
                  </table>
                  <table cellspacing="-1">
                    <tr>
                      <th>Unit</th>
                      <th>M</th>
                      <th>WS</th>
                      <th>BS</th>
                      <th>S</th>
                      <th>T</th>
                      <th>W</th>
                      <th>A</th>
                      <th>Ld</th>
                      <th>Save</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Runtherd</td>
                      <td>5"</td>
                      <td>3+</td>
                      <td>5+</td>
                      <td>4</td>
                      <td>5</td>
                      <td>4</td>
                      <td>3</td>
                      <td>7</td>
                      <td>6+</td>
                      <td>Codex: Orks 2021 p97</td>
                    </tr>
                  </table>
                  <table cellspacing="-1">
                    <tr>
                      <th>Weapon</th>
                      <th>Range</th>
                      <th>Type</th>
                      <th>S</th>
                      <th>AP</th>
                      <th>D</th>
                      <th>Abilities</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Grabba Stikk</td>
                      <td>Melee</td>
                      <td>Melee</td>
                      <td>+1</td>
                      <td>0</td>
                      <td>1</td>
                      <td>
                        Each time the bearer fights it can make 1 additional
                        attack with this weapon.
                      </td>
                      <td>Codex: Orks 2021 p97</td>
                    </tr>
                    <tr>
                      <td class="profile-name">Slugga</td>
                      <td>12"</td>
                      <td>Pistol 1</td>
                      <td>4</td>
                      <td>0</td>
                      <td>1</td>
                      <td>-</td>
                      <td>Codex: Orks 2021 p120</td>
                    </tr>
                  </table>
                </li>
              </ul>
            </li>
            <li class="category">
              <h3>HQ</h3>
              <ul>
                <li class="rootselection">
                  <h4>Big Mek [Legends]</h4>
                  <p><span class="bold">Selections:</span> Choppa, Slugga</p>
                  <p class="rule-names">
                    <span class="bold">Rules:</span>
                    <span class="italic">'Ere We Go!, Mob Rule</span>
                  </p>
                  <p class="profile-names">
                    <span class="bold">Abilities:</span>
                    <span class="italic">Big Mekaniak</span>,
                    <span class="bold">Unit:</span>
                    <span class="italic">Big Mek</span>,
                    <span class="bold">Weapon:</span>
                    <span class="italic">Choppa, Slugga, Stikkbomb</span>
                  </p>
                  <br />
                  <table cellspacing="-1">
                    <tr>
                      <th>Abilities</th>
                      <th>Description</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Big Mekaniak</td>
                      <td>
                        At the end of your Movement phase, this model can repair
                        a single friendly &lt;CLAN&gt; VEHICLE model within 3".
                        That model regains D3 lost wounds. Each model can only
                        be repaired once per turn.
                      </td>
                      <td>Codex: Orks 2021 p86</td>
                    </tr>
                  </table>
                  <table cellspacing="-1">
                    <tr>
                      <th>Unit</th>
                      <th>M</th>
                      <th>WS</th>
                      <th>BS</th>
                      <th>S</th>
                      <th>T</th>
                      <th>W</th>
                      <th>A</th>
                      <th>Ld</th>
                      <th>Save</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Big Mek</td>
                      <td>5"</td>
                      <td>3+</td>
                      <td>5+</td>
                      <td>5</td>
                      <td>4</td>
                      <td>4</td>
                      <td>3</td>
                      <td>7</td>
                      <td>4+</td>
                      <td>Index: Xenos 2 p14</td>
                    </tr>
                  </table>
                  <table cellspacing="-1">
                    <tr>
                      <th>Weapon</th>
                      <th>Range</th>
                      <th>Type</th>
                      <th>S</th>
                      <th>AP</th>
                      <th>D</th>
                      <th>Abilities</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Choppa</td>
                      <td>Melee</td>
                      <td>Melee</td>
                      <td>User</td>
                      <td>-1</td>
                      <td>1</td>
                      <td>
                        Each time the bearer fights, it can make 1 additional
                        attack with this weapon.
                      </td>
                      <td>Codex: Orks 2021 p121</td>
                    </tr>
                    <tr>
                      <td class="profile-name">Slugga</td>
                      <td>12"</td>
                      <td>Pistol 1</td>
                      <td>4</td>
                      <td>0</td>
                      <td>1</td>
                      <td>-</td>
                      <td>Codex: Orks 2021 p120</td>
                    </tr>
                    <tr>
                      <td class="profile-name">Stikkbomb</td>
                      <td>8"</td>
                      <td>Grenade D6</td>
                      <td>3</td>
                      <td>0</td>
                      <td>1</td>
                      <td>Blast</td>
                      <td>Codex: Orks 2021 p129</td>
                    </tr>
                  </table>
                </li>
                <li class="rootselection">
                  <h4>Deffkilla Wartrike</h4>
                  <p><span class="bold">Selections:</span> Warlord</p>
                  <p class="rule-names">
                    <span class="bold">Rules:</span>
                    <span class="italic">'Ere We Go!</span>
                  </p>
                  <p class="profile-names">
                    <span class="bold">Abilities:</span>
                    <span class="italic"
                      >Big Red Button, Dead Tough, Explodes, Fuel Mixa Grot,
                      Killa Jet, Ramshackle</span
                    >, <span class="bold">Unit:</span>
                    <span class="italic">Deffkilla Wartrike</span>,
                    <span class="bold">Weapon:</span>
                    <span class="italic"
                      >Killa Jet (Burna), Killa Jet (Cutta), Snagga Klaw , Twin
                      Boomstick</span
                    >
                  </p>
                  <br />
                  <table cellspacing="-1">
                    <tr>
                      <th>Abilities</th>
                      <th>Description</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Big Red Button</td>
                      <td>
                        Each time this model Advances, do not make an Advance
                        roll. Instead, until the end of the phase, add 6" to the
                        Move characteristic of this model.
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="profile-name">Dead Tough</td>
                      <td>This model has a 5+ invulnerable save.</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="profile-name">Explodes</td>
                      <td>
                        If this model is reduced to 0 wounds, roll a D6 before
                        removing it from the battlefield and before any embarked
                        models disembark. On a 6 it explodes, and each unit
                        within 3" suffers 1 mortal wound.
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="profile-name">Fuel Mixa Grot</td>
                      <td>
                        Once per battle when this model advances, do not make an
                        Advance roll, Instead, until the end of the phase, add
                        9" to the Move characteristic of this model.
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="profile-name">Killa Jet</td>
                      <td>
                        Before selecting targets, select one of the profiles
                        below to make attacks with.
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="profile-name">Ramshackle</td>
                      <td>
                        Each time an attack is allocated to this model, unless
                        that attack has a Strength characteristic of 8 or more,
                        subtract 1 from the Damage characteristic of that attack
                        (to a minimum of 1)
                      </td>
                      <td>Codex: Orks 2021 p113</td>
                    </tr>
                  </table>
                  <table cellspacing="-1">
                    <tr>
                      <th>Unit</th>
                      <th>M</th>
                      <th>WS</th>
                      <th>BS</th>
                      <th>S</th>
                      <th>T</th>
                      <th>W</th>
                      <th>A</th>
                      <th>Ld</th>
                      <th>Save</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Deffkilla Wartrike</td>
                      <td>14"</td>
                      <td>2+</td>
                      <td>5+</td>
                      <td>5</td>
                      <td>6</td>
                      <td>8</td>
                      <td>5</td>
                      <td>7</td>
                      <td>4+</td>
                      <td>Codex: Orks 2021 p89</td>
                    </tr>
                  </table>
                  <table cellspacing="-1">
                    <tr>
                      <th>Weapon</th>
                      <th>Range</th>
                      <th>Type</th>
                      <th>S</th>
                      <th>AP</th>
                      <th>D</th>
                      <th>Abilities</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Killa Jet (Burna)</td>
                      <td>12"</td>
                      <td>Assault D6</td>
                      <td>5</td>
                      <td>-1</td>
                      <td>1</td>
                      <td>
                        Each time an attack is made with this weapon profile,
                        that attack automatically hits the target.
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="profile-name">Killa Jet (Cutta)</td>
                      <td>12"</td>
                      <td>Assault 2</td>
                      <td>8</td>
                      <td>-4</td>
                      <td>D6</td>
                      <td>
                        Each time an attack made with this weapon profile
                        targets a unit within half range, that attack has a
                        Damage characteristic of D6+2
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="profile-name">Snagga Klaw</td>
                      <td>Melee</td>
                      <td>Melee</td>
                      <td>+2</td>
                      <td>-2</td>
                      <td>2</td>
                      <td>
                        Each time an attack is made with this weapon, you can
                        re-roll the wound roll.
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="profile-name">Twin Boomstick</td>
                      <td>12"</td>
                      <td>Assault 2</td>
                      <td>5</td>
                      <td>0</td>
                      <td>1</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                </li>
              </ul>
            </li>
            <li class="category">
              <h3>Troops</h3>
              <ul>
                <li class="rootselection">
                  <h4>Boyz</h4>
                  <p class="rule-names">
                    <span class="bold">Rules:</span>
                    <span class="italic">'Ere We Go!, Mob Rule</span>
                  </p>
                  <ul>
                    <li>
                      <h4>Boss Nob</h4>
                      <p>
                        <span class="bold">Selections:</span> Choppa, Slugga
                      </p>
                      <p class="profile-names">
                        <span class="bold">Unit:</span>
                        <span class="italic">Boss Nob</span>,
                        <span class="bold">Weapon:</span>
                        <span class="italic">Choppa, Slugga, Stikkbomb</span>
                      </p>
                    </li>
                    <li>
                      <h4>9x Ork Boy w/ Slugga &amp; Choppa</h4>
                      <p>
                        <span class="bold">Selections:</span> 9x Choppa, 9x
                        Slugga, 9x Stikkbombs
                      </p>
                      <p class="profile-names">
                        <span class="bold">Unit:</span>
                        <span class="italic">Ork Boy</span>,
                        <span class="bold">Weapon:</span>
                        <span class="italic">Choppa, Slugga, Stikkbomb</span>
                      </p>
                    </li>
                  </ul>
                  <br />
                  <table cellspacing="-1">
                    <tr>
                      <th>Unit</th>
                      <th>M</th>
                      <th>WS</th>
                      <th>BS</th>
                      <th>S</th>
                      <th>T</th>
                      <th>W</th>
                      <th>A</th>
                      <th>Ld</th>
                      <th>Save</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Boss Nob</td>
                      <td>5"</td>
                      <td>3+</td>
                      <td>5+</td>
                      <td>5</td>
                      <td>5</td>
                      <td>2</td>
                      <td>3</td>
                      <td>7</td>
                      <td>6+</td>
                      <td>Codex: Orks 2021 p91</td>
                    </tr>
                    <tr>
                      <td class="profile-name">Ork Boy</td>
                      <td>5"</td>
                      <td>3+</td>
                      <td>5+</td>
                      <td>4</td>
                      <td>5</td>
                      <td>1</td>
                      <td>2</td>
                      <td>6</td>
                      <td>6+</td>
                      <td>Codex: Orks 2021 p89</td>
                    </tr>
                  </table>
                  <table cellspacing="-1">
                    <tr>
                      <th>Weapon</th>
                      <th>Range</th>
                      <th>Type</th>
                      <th>S</th>
                      <th>AP</th>
                      <th>D</th>
                      <th>Abilities</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Choppa</td>
                      <td>Melee</td>
                      <td>Melee</td>
                      <td>User</td>
                      <td>-1</td>
                      <td>1</td>
                      <td>
                        Each time the bearer fights, it can make 1 additional
                        attack with this weapon.
                      </td>
                      <td>Codex: Orks 2021 p121</td>
                    </tr>
                    <tr>
                      <td class="profile-name">Slugga</td>
                      <td>12"</td>
                      <td>Pistol 1</td>
                      <td>4</td>
                      <td>0</td>
                      <td>1</td>
                      <td>-</td>
                      <td>Codex: Orks 2021 p120</td>
                    </tr>
                    <tr>
                      <td class="profile-name">Stikkbomb</td>
                      <td>8"</td>
                      <td>Grenade D6</td>
                      <td>3</td>
                      <td>0</td>
                      <td>1</td>
                      <td>Blast</td>
                      <td>Codex: Orks 2021 p129</td>
                    </tr>
                  </table>
                </li>
                <li class="rootselection">
                  <h4>Gretchin</h4>
                  <p class="profile-names">
                    <span class="bold">Abilities:</span>
                    <span class="italic">Cowardly, Diminutive</span>
                  </p>
                  <ul>
                    <li>
                      <h4>10x Gretchin</h4>
                      <p>
                        <span class="bold">Selections:</span> 10x Grot Blaster
                      </p>
                      <p class="profile-names">
                        <span class="bold">Unit:</span>
                        <span class="italic">Gretchin</span>,
                        <span class="bold">Weapon:</span>
                        <span class="italic">Grot Blaster</span>
                      </p>
                    </li>
                  </ul>
                  <br />
                  <table cellspacing="-1">
                    <tr>
                      <th>Abilities</th>
                      <th>Description</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Cowardly</td>
                      <td>
                        Unless a friendly RUNTHERD model is within 6" of this
                        unit, each time a model in this unit makes a Combat
                        Attrition test, subtract 1 from the result.
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="profile-name">Diminutive</td>
                      <td>
                        Each time a ranged attack is allocated to a model in
                        this unit while it is receiving the benefits of cover,
                        add an additional 1 to any armour saving throw made
                        against that attack.
                      </td>
                      <td>Codex: Orks 2021</td>
                    </tr>
                  </table>
                  <table cellspacing="-1">
                    <tr>
                      <th>Unit</th>
                      <th>M</th>
                      <th>WS</th>
                      <th>BS</th>
                      <th>S</th>
                      <th>T</th>
                      <th>W</th>
                      <th>A</th>
                      <th>Ld</th>
                      <th>Save</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Gretchin</td>
                      <td>5"</td>
                      <td>5+</td>
                      <td>4+</td>
                      <td>2</td>
                      <td>3</td>
                      <td>1</td>
                      <td>1</td>
                      <td>4</td>
                      <td>7+</td>
                      <td>Codex: Orks 2021 p91</td>
                    </tr>
                  </table>
                  <table cellspacing="-1">
                    <tr>
                      <th>Weapon</th>
                      <th>Range</th>
                      <th>Type</th>
                      <th>S</th>
                      <th>AP</th>
                      <th>D</th>
                      <th>Abilities</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Grot Blaster</td>
                      <td>12"</td>
                      <td>Pistol 1</td>
                      <td>3</td>
                      <td>0</td>
                      <td>1</td>
                      <td>-</td>
                      <td>Codex: Orks 2021 p119</td>
                    </tr>
                  </table>
                </li>
              </ul>
            </li>
            <li class="category">
              <h3>Elites</h3>
              <ul>
                <li class="rootselection">
                  <h4>Nobz</h4>
                  <p class="rule-names">
                    <span class="bold">Rules:</span>
                    <span class="italic">'Ere We Go!, Mob Rule</span>
                  </p>
                  <ul>
                    <li>
                      <h4>Boss Nob</h4>
                      <p>
                        <span class="bold">Selections:</span> Choppa, Slugga
                      </p>
                      <p class="profile-names">
                        <span class="bold">Unit:</span>
                        <span class="italic">Boss Nob (Nobz)</span>,
                        <span class="bold">Weapon:</span>
                        <span class="italic">Choppa, Slugga, Stikkbomb</span>
                      </p>
                    </li>
                    <li>
                      <h4>Nob</h4>
                      <p>
                        <span class="bold">Selections:</span> Choppa, Slugga
                      </p>
                      <p class="profile-names">
                        <span class="bold">Unit:</span>
                        <span class="italic">Nob</span>,
                        <span class="bold">Weapon:</span>
                        <span class="italic">Choppa, Slugga, Stikkbomb</span>
                      </p>
                    </li>
                    <li>
                      <h4>Nob</h4>
                      <p>
                        <span class="bold">Selections:</span> Choppa, Slugga
                      </p>
                      <p class="profile-names">
                        <span class="bold">Unit:</span>
                        <span class="italic">Nob</span>,
                        <span class="bold">Weapon:</span>
                        <span class="italic">Choppa, Slugga, Stikkbomb</span>
                      </p>
                    </li>
                    <li>
                      <h4>Nob</h4>
                      <p>
                        <span class="bold">Selections:</span> Choppa, Slugga
                      </p>
                      <p class="profile-names">
                        <span class="bold">Unit:</span>
                        <span class="italic">Nob</span>,
                        <span class="bold">Weapon:</span>
                        <span class="italic">Choppa, Slugga, Stikkbomb</span>
                      </p>
                    </li>
                    <li>
                      <h4>Nob</h4>
                      <p>
                        <span class="bold">Selections:</span> Choppa, Slugga
                      </p>
                      <p class="profile-names">
                        <span class="bold">Unit:</span>
                        <span class="italic">Nob</span>,
                        <span class="bold">Weapon:</span>
                        <span class="italic">Choppa, Slugga, Stikkbomb</span>
                      </p>
                    </li>
                  </ul>
                  <br />
                  <table cellspacing="-1">
                    <tr>
                      <th>Unit</th>
                      <th>M</th>
                      <th>WS</th>
                      <th>BS</th>
                      <th>S</th>
                      <th>T</th>
                      <th>W</th>
                      <th>A</th>
                      <th>Ld</th>
                      <th>Save</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Boss Nob (Nobz)</td>
                      <td>5"</td>
                      <td>3+</td>
                      <td>5+</td>
                      <td>5</td>
                      <td>5</td>
                      <td>2</td>
                      <td>3</td>
                      <td>7</td>
                      <td>4+</td>
                      <td>Codex: Orks 2021 p102</td>
                    </tr>
                    <tr>
                      <td class="profile-name">Nob</td>
                      <td>5"</td>
                      <td>3+</td>
                      <td>5+</td>
                      <td>5</td>
                      <td>5</td>
                      <td>2</td>
                      <td>3</td>
                      <td>7</td>
                      <td>4+</td>
                      <td>Codex: Orks 2021 p102</td>
                    </tr>
                  </table>
                  <table cellspacing="-1">
                    <tr>
                      <th>Weapon</th>
                      <th>Range</th>
                      <th>Type</th>
                      <th>S</th>
                      <th>AP</th>
                      <th>D</th>
                      <th>Abilities</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Choppa</td>
                      <td>Melee</td>
                      <td>Melee</td>
                      <td>User</td>
                      <td>-1</td>
                      <td>1</td>
                      <td>
                        Each time the bearer fights, it can make 1 additional
                        attack with this weapon.
                      </td>
                      <td>Codex: Orks 2021 p121</td>
                    </tr>
                    <tr>
                      <td class="profile-name">Slugga</td>
                      <td>12"</td>
                      <td>Pistol 1</td>
                      <td>4</td>
                      <td>0</td>
                      <td>1</td>
                      <td>-</td>
                      <td>Codex: Orks 2021 p120</td>
                    </tr>
                    <tr>
                      <td class="profile-name">Stikkbomb</td>
                      <td>8"</td>
                      <td>Grenade D6</td>
                      <td>3</td>
                      <td>0</td>
                      <td>1</td>
                      <td>Blast</td>
                      <td>Codex: Orks 2021 p129</td>
                    </tr>
                  </table>
                </li>
              </ul>
            </li>
            <li class="category">
              <h3>Flyer</h3>
              <ul>
                <li class="rootselection">
                  <h4>Dakkajet</h4>
                  <p class="rule-names">
                    <span class="bold">Rules:</span>
                    <span class="italic">Airborne, Hard to Hit</span>
                  </p>
                  <p class="profile-names">
                    <span class="bold">Abilities:</span>
                    <span class="italic">Explodes, Ramshackle, Supersonic</span
                    >, <span class="bold">Unit:</span>
                    <span class="italic"
                      >Dakkajet [1] (7+ Wounds), Dakkajet [2] (4-6 Wounds),
                      Dakkajet [3] (1-3 Wounds)</span
                    >, <span class="bold">Weapon:</span>
                    <span class="italic">Supa Shoota</span>
                  </p>
                  <br />
                  <table cellspacing="-1">
                    <tr>
                      <th>Abilities</th>
                      <th>Description</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Explodes</td>
                      <td>
                        When this model is destroyed, roll one D6 before any
                        embarked models disembark and before removing it from
                        play. On a 6, it explodes, and each unit within 6"
                        suffers D3 moral wounds.
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="profile-name">Ramshackle</td>
                      <td>
                        Each time an attack is allocated to this model, unless
                        that attack has a Strength characteristic of 8 or more,
                        subtract 1 from the Damage characteristic of that attack
                        (to a minimum of 1)
                      </td>
                      <td>Codex: Orks 2021 p113</td>
                    </tr>
                    <tr>
                      <td class="profile-name">Supersonic</td>
                      <td>
                        Each time this model makes a Normal Move, Advances or
                        Falls Back, first pivot it on the spot up to 90 degress
                        (this does not contribute to how far the model moves),
                        then move the model straight fowards. It cannot pivot
                        again after the initial pivot.
                      </td>
                      <td></td>
                    </tr>
                  </table>
                  <table cellspacing="-1">
                    <tr>
                      <th>Unit</th>
                      <th>M</th>
                      <th>WS</th>
                      <th>BS</th>
                      <th>S</th>
                      <th>T</th>
                      <th>W</th>
                      <th>A</th>
                      <th>Ld</th>
                      <th>Save</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Dakkajet [1] (7+ Wounds)</td>
                      <td>20-60"</td>
                      <td>5+</td>
                      <td>5+</td>
                      <td>6</td>
                      <td>6</td>
                      <td>12</td>
                      <td>3</td>
                      <td>6</td>
                      <td>4+</td>
                      <td>Codex: Orks 2021 p114</td>
                    </tr>
                    <tr>
                      <td class="profile-name">Dakkajet [2] (4-6 Wounds)</td>
                      <td>20-40"</td>
                      <td>5+</td>
                      <td>5+</td>
                      <td>6</td>
                      <td>6</td>
                      <td>N/A</td>
                      <td>D3</td>
                      <td>6</td>
                      <td>4+</td>
                      <td>Codex: Orks 2021 p114</td>
                    </tr>
                    <tr>
                      <td class="profile-name">Dakkajet [3] (1-3 Wounds)</td>
                      <td>20-40"</td>
                      <td>5+</td>
                      <td>6+</td>
                      <td>6</td>
                      <td>6</td>
                      <td>N/A</td>
                      <td>1</td>
                      <td>6</td>
                      <td>4+</td>
                      <td>Codex: Orks 2021 p114</td>
                    </tr>
                  </table>
                  <table cellspacing="-1">
                    <tr>
                      <th>Weapon</th>
                      <th>Range</th>
                      <th>Type</th>
                      <th>S</th>
                      <th>AP</th>
                      <th>D</th>
                      <th>Abilities</th>
                      <th>Ref</th>
                    </tr>
                    <tr>
                      <td class="profile-name">Supa Shoota</td>
                      <td>36"</td>
                      <td>Dakka 6/4</td>
                      <td>6</td>
                      <td>-1</td>
                      <td>1</td>
                      <td>-</td>
                      <td>Codex: Orks 2021 p120</td>
                    </tr>
                  </table>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <div class="summary">
        <h2>Force Rules</h2>
        <p>
          <span class="bold">Ork Detachment Abilities:</span>
          - &lt;CLAN&gt; units (excluding GRETCHIN units) in ORKS Detachments
          gain the Clan Kulturs ability.<br />
          - Troops units (excluding GRETCHIN units) in ORKS Detachments gain the
          Objective Secured ability (this ability is described in the Warhammer
          40,000 Core Book). ()
        </p>
        <p>
          <span class="bold">Waaagh!:</span>
          If your WARLORD is a WARBOSS, then once per battle, in your Command
          phase, you can call a Waaagh!. To do so, that WARBOSS must be on the
          battlefield or embarked on a TRANSPORT that is on the battlefield. If
          your WARLORD is a SPEEDBOSS, then once per battle, in your COmmand
          phase, you can instead call a Speedwaaagh!. To do so, that SPEEDBOSS
          must be on the battlefield. If your WARLORD is GHAZGHKULL THRAKA, you
          can instead call a Great Waaagh!.<br />
          <br />
          To do so, GHAZGHKULL THRAKA must be on the battlefield or embarked on
          a TRANSPORT that is on the battlefield.<br />
          <br />
          A Waaagh! and Speedwaagh! each have two stages. The first stage is
          active from when the Waaagh! or Speedwaaagh! is called, and lasts
          until the start of your next Command phase. When the first stage ends,
          the second stage starts, and lasts until the start of your subsequent
          Command phase. After this point, the Waaagh! or Speedwaaagh! is no
          longer active, and has no further effect. Calling a Great Waaagh! is
          treated as calling both a Waaagh! and a Speedwaagh! at the same time.
          Both are active from when the Great Waaagh! is called, and each stage
          starts and finishes as described above.<br />
          <br />
          WAAAAGH!<br />
          Stage 1: Call Da Waaagh!<br />
          - ORKS CORE and ORKS CHARACTER units from your army are eligible to
          declare a charge even if they Advanced this turn.<br />
          - Add 1 to the Strength and Attacks characteristic or ORKS models from
          your army.<br />
          - ORKS models from your army have a 5+ invulnerable save.<br />
          <br />
          Stage 2: Get Stuck In!<br />
          - Add 1 to the Strength and Attacks characteristic of ORKS models from
          your army.<br />
          - ORKS models from your army have a 6+ invulnerable save.<br />
          <br />
          SPEEDWAAAGH!<br />
          Stage 1: Da Big Race<br />
          - ORKS models from your army do not suffer the penalty incurred to
          their hit rolls for firing Assault weapons in the same turn their unit
          Advanced. Each time an ORKS VEHICLE or ORKS BIKER model from your army
          shoots with a Dakka weapon, make 1 additional attack with that
          weapon.<br />
          - Each time a model in an ORKS VEHICLE or ORKS BIKER unit from your
          army makes a ranged attack, improve the Armour Penetration
          charcateristic of that attack by 1.<br />
          <br />
          Stage 2: Give 'Em Sum Dakka!<br />
          - Each time a model in an ORKS VEHICLE or ORKS BIKER unit from your
          army makes a ranged attack, improve the Armour Penetration
          charcateristic of that attack by 1. (Codex: Orks 2021 p81)
        </p>
      </div>
      <div class="summary">
        <h2>Selection Rules</h2>
        <p>
          <span class="bold">'Ere We Go!:</span>
          You can re-roll charge rolls made for units with this ability. (Codex:
          Orks 2021 p82)
        </p>
        <p>
          <span class="bold">Airborne:</span>
          This model cannot charge, can only be charged by units that can FLY,
          and can only attack or be attacked in the Fight phase by units that
          can FLY. ()
        </p>
        <p>
          <span class="bold">Hard to Hit:</span>
          Your opponent must subtract 1 from hit rolls for attacks that target
          this model in the Shooting phase. ()
        </p>
        <p>
          <span class="bold">Mob Rule:</span>
          While this unit is within 6" of a friendly &lt;CLAN&gt; MOB unit that
          is not under half strength, this unit is never considered to be under
          half strength (Codex: Orks 2021 p82)
        </p>
      </div>
      <br />
      <p>
        Created with <a href="https://www.battlescribe.net">BattleScribe</a>
      </p>
    </div>
  </body>
</html>`,
  },
];
