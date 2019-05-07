"gothitellite": {
		id: "gothitellite",
		name: "Gothitellite",
		spritenum: 576,
		megaStone: "Gothitelle-Mega",
		megaEvolves: "Gothitelle",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: -30,
		gen: 7,
		isNonstandard: "UBal",
		desc: "If held by a 0, this item allows it to Mega Evolve in battle.",
	},
"wobbuffite": {
		id: "wobbuffite",
		name: "Wobuffite",
		spritenum: 576,
		megaStone: "Wobbuffet-Mega",
		megaEvolves: "Wobbuffet",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: -31,
		gen: 7,
		isNonstandard: "UBal",
		desc: "If held by a Wobbuffet, this item allows it to Mega Evolve in battle.",
	},
"dugtrite": {
		id: "dugtrite",
		name: "Dugtrite",
		spritenum: 576,
		megaStone: "Dugtrio-Mega",
		megaEvolves: "Dugtrio",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: -32,
		gen: 7,
		isNonstandard: "UBal",
		desc: "If held by a Dugtrio, this item allows it to Mega Evolve in battle.",
	},
"pheromosite": {
		id: "pheromosite",
		name: "pheromosite",
		spritenum: 576,
		megaStone: "Pheromosa-Mega",
		megaEvolves: "Pheromosa",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: -33,
		gen: 7,
		isNonstandard: "UBal",
		desc: "If held by a Pheromosa, this item allows it to Mega Evolve in battle.",
	},
"naganadite": {
		id: "naganadite",
		name: "Naganadite",
		spritenum: 576,
		megaStone: "Naganadel-Mega",
		megaEvolves: "Naganadel",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: -34,
		gen: 7,
		isNonstandard: "UBal",
		desc: "If held by a Naganadel, this item allows it to Mega Evolve in battle.",
	},
"darkrainite": {
		id: "darkrainite",
		name: "Darkrainite",
		spritenum: 576,
		megaStone: "Darkrai-Mega",
		megaEvolves: "Darkrai",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: -35,
		gen: 7,
		isNonstandard: "UBal",
		desc: "If held by a Darkrai, this item allows it to Mega Evolve in battle.",
	},
"genesite": {
		id: "genesite",
		name: "Genesite",
		spritenum: 576,
		megaStone: "Genesect-Mega",
		megaEvolves: "Genesect",
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: -37,
		gen: 7,
		isNonstandard: "UBal",
		desc: "If held by a Genesect, this item allows it to Mega Evolve in battle.",
	},
