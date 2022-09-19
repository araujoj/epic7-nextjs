export type Hero = {
    "_id": string,
    "id": string,
    "name": string,
    "moonlight": boolean,
    "rarity": number,
    "attribute": string,
    "role": string,
    "zodiac": string,
    "self_devotion": {
        "type": string
    },
    "devotion": {
        "type": string
    },
    "assets": {
        "icon": string,
        "image": string,
        "thumbnail": string
    },
    "buffs": (string | number)[],
    "debuffs": (string | number)[],
    "common": number[]
}

export type HeroInfo = {
    "_id": string,
    "index": number,
    "id": string,
    "base_id": string | null,
    "specialty_id": string | null,
    "name": string,
    "moonlight": false,
    "rarity": number,
    "attribute": string,
    "role": string,
    "zodiac": string,
    "description": string,
    "story": string,
    "get_line": string,
    "stats": {
      "bra": number,
      "int": number,
      "fai": number,
      "des": number
    },
    "relationships": Relationship[],
    "self_devotion": {
      "type": string,
      "grades": {
        "B": number,
        "A": number,
        "S": number,
        "SS": number,
        "SSS": number
      }
    },
    "devotion": {
      "type": string,
      "grades": {
        "B": number,
        "A": number,
        "S": number,
        "SS": number,
        "SSS": number
      },
      "slots": {
        "1": boolean,
        "2": boolean,
        "3": boolean,
        "4": boolean
      }
    },
    "specialty": {
      "name": string,
      "description": string,
      "effect_type": string,
      "effect_value": number,
      "command": number,
      "charm": number,
      "politics": number,
      "type": {
        "name": string,
        "description": string
      },
      "assets": {
        "icon": string
      }
    },
    "camping": {
      "personalities": string[],
      "topics": string[],
      "values": {
        "Criticism": number,
        "Reality Check": number,
        "Heroic Tale": number,
        "Comforting Cheer": number,
        "Cute Cheer": number,
        "Heroic Cheer": number,
        "Sad Memory": number,
        "Joyful Memory": number,
        "Happy Memories": number,
        "Unique Comment": number,
        "Self-Indulgent": number,
        "Occult": number,
        "Myth": number,
        "Bizarre Story": number,
        "Food Story": number,
        "Horror Story": number,
        "Gossip": number,
        "Dream": number,
        "Advice": number,
        "Complain": number,
        "Belief": number,
        "Interesting Story": number
      }
    },
    "zodiac_tree": Zodiac[],
    "skills": Skill[],
    "specialty_change": {},
    "assets": {
      "icon": string,
      "image": string,
      "thumbnail": string
    },
    "buffs": Effect[],
    "debuffs": Effect[],
    "common": [],
    "ex_equip": [],
    "calculatedStatus": {
      "lv50FiveStarNoAwaken": {
        "cp": number,
        "atk": number,
        "hp": number,
        "spd": number,
        "def": number,
        "chc": number,
        "chd": number,
        "dac": number,
        "eff": number,
        "efr": number
      },
      "lv50FiveStarFullyAwakened": {
        "cp": number,
        "atk": number,
        "hp": number,
        "spd": number,
        "def": number,
        "chc": number,
        "chd": number,
        "dac": number,
        "eff": number,
        "efr": number
      },
      "lv60SixStarNoAwaken": {
        "cp": number,
        "atk": number,
        "hp": number,
        "spd": number,
        "def": number,
        "chc": number,
        "chd": number,
        "dac": number,
        "eff": number,
        "efr": number
      },
      "lv60SixStarFullyAwakened": {
        "cp": number,
        "atk": number,
        "hp": number,
        "spd": number,
        "def": number,
        "chc": number,
        "chd": number,
        "dac": number,
        "eff": number,
        "efr": number
      }
    }
  }

  type Effect = {
    "_id": string,
    "id": number,
    "type": string,
    "name": string,
    "effect": string,
    "assets": {
      "icon": string
    }
  }

  type Item = {
    "chapter": string,
    "continent": string,
    "price": number,
    "limit_count": number,
    "period": string
  }

  type Relationship = {
    "name": string | null,
    "description": string | null,
    "relations": Relation[]
}

type Relation = {
    "id": string,
    "slot": number,
    "description": string,
    "relation": string,
    "upgrade": {},
    "relation_id": string
  }

  type Zodiac = {
    "name": string,
    "description": string,
    "skill_enhanced": boolean,
    "costs": Cost[],
    "stats": Stat[],
    "_id": string
  }

  type Cost = {
    "item": string,
    "count": number,
    "_id": string,
    "identifier": string,
    "name": string,
    "description": string,
    "category"?: string,
    "attribute"?: string | null,
    "grade"?: number,
    "type1"?: string,
    "type2"?: string | null,
    "assets": {
      "thumbnail"?: string | null,
      "icon": string
    },
    "request_count"?: number,
    "support_count"?: number,
    "shops"?: Item[]
  }

  type Stat = {
    "stat": string,
    "value": number,
    "type": string
  }

  type Skill = {
    "name": string,
    "can_enhance": boolean,
    "description": string,
    "values": number[],
    "passive": boolean,
    "cooldown": number,
    "soul_gain": number,
    "pow": number,
    "att_rate": number,
    "buff": number[],
    "debuff": number[],
    "common": [],
    "enhanced_description": string,
    "enhancements": Enhancement[],
    "_id": string,
    "assets": {
      "icon": string
    }
  }

  type Enhancement = {
    "string": string,
    "costs": Cost[],
    "_id": string
  }