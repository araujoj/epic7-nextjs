import assassin from '../../public/assets/images/roles/assassin.webp'
import knight from '../../public/assets/images/roles/knight.webp'
import mage from '../../public/assets/images/roles/mage.webp'
import manauser from '../../public/assets/images/roles/manauser.webp'
import ranger from '../../public/assets/images/roles/ranger.webp'
import warrior from '../../public/assets/images/roles/warrior.webp'

import dark from '../../public/assets/images/elements/dark.webp'
import wind from '../../public/assets/images/elements/earth.webp'
import fire from '../../public/assets/images/elements/fire.webp'
import ice from '../../public/assets/images/elements/ice.webp'
import light from '../../public/assets/images/elements/light.webp'
import { StaticImageData } from 'next/image'

export const ROLES: { [string: string]: StaticImageData } = {
    assassin,
    knight,
    mage,
    manauser,
    ranger,
    warrior,
}

export const ATTRIBUTES: { [string: string]: StaticImageData } = {
    dark,
    wind,
    fire,
    ice,
    light,
}

export const TIERS = ['S', 'A', 'B', 'C', 'D', 'E', 'F']

export const COLORS = ['#F37E7E','#FBBC7F','#F6F283','#96CD70','#8ABBE5','#777ABA','#D28ABC',]

export const PAGES = [
    {
        path: 'arena',
        title: 'Arena'
    }, {
        path: 'world-arena',
        title: 'World Arena'
    }, {
        path: 'guild-wars',
        title: 'Guild Wars'
    }
]