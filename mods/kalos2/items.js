exports.BattleItems = {
        "abomasite": {
                id: "abomasite",
                name: "Abomasite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Abomasnow') {
                        if (user.baseTemplate.species === 'Abomasnow-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },
                megaStone: "Abomasnow-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Abomasnow."
        },
        "absolite": {
                id: "absolite",
                name: "Absolite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Absol') {
                        if (user.baseTemplate.species === 'Absol-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Absol-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Absol."
        },
        "aerodactylite": {
                id: "aerodactylite",
                name: "Aerodactylite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Aerodactyl') {
                        if (user.baseTemplate.species === 'Aerodactyl-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Aerodactyl-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Aerodactyl."
        },
        "aggronite": {
                id: "aggronite",
                name: "Aggronite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Aggron') {
                        if (user.baseTemplate.species === 'Aggron-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Aggron-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Aggron."
        },
        "alakazite": {
                id: "alakazite",
                name: "Alakazite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Alakazam') {
                        if (user.baseTemplate.species === 'Aalakazam-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Alakazam-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Alakazam."
        },
        "ampharosite": {
                id: "ampharosite",
                name: "Ampharosite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Ampharos') {
                        if (user.baseTemplate.species === 'Ampharos-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Ampharos-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Ampharos."
        },
        "banettite": {
                id: "banettite",
                name: "Banettite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Banette') {
                        if (user.baseTemplate.species === 'Banette-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Banette-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Banette."
        },
        "blastoisinite": {
                id: "blastoisinite",
                name: "Blastoisinite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Blastoise') {
                        if (user.baseTemplate.species === 'Blastoise-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Blastoise-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Blastoise."
        },
        "blazikenite": {
                id: "blazikenite",
                name: "Blazikenite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Blaziken') {
                        if (user.baseTemplate.species === 'Blaziken-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Blaziken-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Blaziken."
        },
        "charizarditex": {
                id: "charizarditex",
                name: "Charizardite X",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Charizard') {
                        if (user.baseTemplate.species === 'Charizard-Mega-X') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Charizard-Mega-X",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Charizard into Mega Charizard X."
        },
        "charizarditey": {
                id: "charizarditey",
                name: "Charizardite Y",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Charizard') {
                        if (user.baseTemplate.species === 'Charizard-Mega-Y') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Charizard-Mega-Y",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Charizard into Mega Charizard Y."
        },
        "garchompite": {
                id: "garchompite",
                name: "Garchompite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Garchomp') {
                        if (user.baseTemplate.species === 'Garchomp-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Garchomp-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Garchomp."
        },
        "gardevoirite": {
                id: "gardevoirite",
                name: "Gardevoirite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Gardevoir') {
                        if (user.baseTemplate.species === 'Gardevoir-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Gardevoir-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Gardevoir."
        },
        "gengarite": {
                id: "gengarite",
                name: "Gengarite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Gengar') {
                        if (user.baseTemplate.species === 'Gengar-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Gengar-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Gengar."
        },
        "gyaradosite": {
                id: "gyaradosite",
                name: "Gyaradosite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Gyarados') {
                        if (user.baseTemplate.species === 'Gyarados-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Gyarados-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Gyarados."
        },
        "heracronite": {
                id: "heracronite",
                name: "Heracronite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Heracross') {
                        if (user.baseTemplate.species === 'Heracross-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Heracross-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Heracross."
        },
        "houndoominite": {
                id: "houndoominite",
                name: "Houndoominite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Houndoom') {
                        if (user.baseTemplate.species === 'Houndoom-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Houndoom-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Houndoom."
        },
        "kangaskhanite": {
                id: "kangaskhanite",
                name: "Kangaskhanite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Kangaskhan') {
                        if (user.baseTemplate.species === 'Kangaskhan-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Kangaskhan-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Kangaskhan."
        },
        "lucarionite": {
                id: "lucarionite",
                name: "Lucarionite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Lucario') {
                        if (user.baseTemplate.species === 'Lucario-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Lucario-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Lucario."
        },
        "manectite": {
                id: "manectite",
                name: "Manectite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Manectric') {
                        if (user.baseTemplate.species === 'Manectric-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Manectric-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Manectric."
        },
        "mawilite": {
                id: "mawilite",
                name: "Mawilite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Mawile') {
                        if (user.baseTemplate.species === 'Mawile-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Mawile-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Mawile."
        },
        "medichamite": {
                id: "medichamite",
                name: "Medichamite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Medicham') {
                        if (user.baseTemplate.species === 'Medicham-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Medicham-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Medicham."
        },
        "mewtwonitex": {
                id: "mewtwonitex",
                name: "Mewtwonite X",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Mewtwo') {
                        if (user.baseTemplate.species === 'Mewtwo-Mega-X') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Mewtwo-Mega-X",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Mewtwo into Mega Mewtwo X."
        },
        "mewtwonitey": {
                id: "mewtwonitey",
                name: "Mewtwonite Y",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Mewtwo') {
                        if (user.baseTemplate.species === 'Mewtwo-Mega-Y') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Mewtwo-Mega-Y",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Mewtwo into Mega Mewtwo Y."
        },
        "pinsirite": {
                id: "pinsirite",
                name: "Pinsirite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Pinsir') {
                        if (user.baseTemplate.species === 'Pinsir-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Pinsir-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Pinsir."
        },
        "scizorite": {
                id: "scizorite",
                name: "Scizorite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Scizor') {
                        if (user.baseTemplate.species === 'Scizor-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Scizor-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Scizor."
        },
        "tyranitarite": {
                id: "tyranitarite",
                name: "Tyranitarite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Tyranitar') {
                        if (user.baseTemplate.species === 'Tyranitar-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Tyranitar-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Tyranitar."
        },
        "venusaurite": {
                id: "venusaurite",
                name: "Venusaurite",
                spritenum: 0,
                onResidualOrder: 5,
                onResidualSubOrder: 2,
                onResidual: function(pokemon) {
                        if (user.baseTemplate.species === 'Venusaur') {
                        if (user.baseTemplate.species === 'Venusaur-Mega') {                        
                                this.heal(pokemon.maxhp/16);
                        } else {
                                this.damage(pokemon.maxhp/8);
                        }
                },                
                megaStone: "Venusaur-Mega",
                onTakeItem: false,
                num: -6,
                gen: 6,
                desc: "Mega-evolves Venusaur."
        }
};     
        
        
        
