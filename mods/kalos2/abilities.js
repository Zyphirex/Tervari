exports.BattleAbilities = {
          "stancechange": {
                desc: "The Pokemon changes form depending on how it battles. Defense form for King's Shield, and Offense form for attacking moves.",
                shortDesc: "The Pokemon changes form depending on how it battles.",
                onBeforeMove: function(attacker, defender, move) {
                        if (attacker.template.baseSpecies !== 'Aegislash') return;
                        if (move.category === 'Status' && move.id !== 'kingsshield') return;
                        var targetSpecies = (move.id === 'kingsshield'?'Aegislash':'Aegislash-Blade');
                        if (attacker.template.species !== targetSpecies && attacker.formeChange(targetSpecies)) {
                                this.add('-formechange', attacker, targetSpecies);
                        if (attacker.template.baseSpecies !== 'Meloetta') return;
                        if (move.category === 'Status' && move.category === 'Special') return;
                        var targetSpecies = (move.category === 'Status' && move.category === 'Special'?'Meloetta':'Meloetta-Pirouette');
                        if (attacker.template.species !== targetSpecies && attacker.formeChange(targetSpecies)) {
                                this.add('-formechange', attacker, targetSpecies);        
                        }
                },
                id: "stancechange",
                name: "Stance Change",
                rating: 4.5,
                num: -6,
                gen: 6
        },
};