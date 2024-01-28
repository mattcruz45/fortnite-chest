const chest = document.getElementById("chest");
const weapon = document.getElementById("weapon");
const ammo = document.getElementById("ammo");
const item = document.getElementById("item");
const mats = document.getElementById("mats");

chest.addEventListener('click', randomLoadout);

const weaponOdds = [
    [8, 'images/weapons/gray-ar.png', 'images/ammo/medium.webp'],
    [16, 'images/weapons/gray-burst.png', 'images/ammo/medium.webp'],
    [24, 'images/weapons/gray-smg.png', 'images/ammo/light.webp'],
    [32, 'images/weapons/gray-tac.png', 'images/ammo/shotgun.webp'],
    [40, 'images/weapons/gray-pistol.png', 'images/ammo/light.webp'],
    [45, 'images/weapons/green-ar.png', 'images/ammo/medium.webp'],
    [50, 'images/weapons/green-smg.png', 'images/ammo/light.webp'],
    [55, 'images/weapons/green-burst.png', 'images/ammo/medium.webp'],
    [60, 'images/weapons/green-tac.png', 'images/ammo/shotgun.webp'],
    [65, 'images/weapons/green-pump.png', 'images/ammo/shotgun.webp'],
    [68, 'images/weapons/blue-ar.png', 'images/ammo/medium.webp'],
    [71, 'images/weapons/blue-burst.png', 'images/ammo/medium.webp'],
    [74, 'images/weapons/blue-smg.png', 'images/ammo/light.webp'],
    [77, 'images/weapons/blue-pistol.png', 'images/ammo/light.webp'],
    [80, 'images/weapons/blue-tac.png', 'images/ammo/shotgun.webp'],
    [83, 'images/weapons/blue-pump.png', 'images/ammo/shotgun.webp'],
    [86, 'images/weapons/blue-gl.png', 'images/ammo/rocket.webp'],
    [89, 'images/weapons/blue-bolt.png', 'images/ammo/heavy.webp'],
    [91, 'images/weapons/blue-rl.png', 'images/ammo/rocket.webp'],
    [93, 'images/weapons/purple-ar.png', 'images/ammo/medium.webp'],
    [95, 'images/weapons/purple-minigun.png', 'images/ammo/light.webp'],
    [97, 'images/weapons/purple-heavy.png', 'images/ammo/shotgun.webp'],
    [99, 'images/weapons/purple-smg.png', 'images/ammo/light.webp'],
    [101, 'images/weapons/purple-pistol.png', 'images/ammo/light.webp'],
    [102, 'images/weapons/purple-rl.png', 'images/ammo/rocket.webp'],
    [104, 'images/weapons/purple-gl.png', 'images/ammo/rocket.webp'],
    [106, 'images/weapons/purple-bolt.png', 'images/ammo/heavy.webp'],
    [108, 'images/weapons/purple-burst.png', 'images/ammo/light.webp'],
    [110, 'images/weapons/purple-tac.png', 'images/ammo/light.webp'],
    [111, 'images/weapons/gold-ar.png', 'images/ammo/medium.webp'],
    [112, 'images/weapons/gold-minigun.png', 'images/ammo/light.webp'],
    [113, 'images/weapons/gold-smg.png', 'images/ammo/light.webp'],
    [114, 'images/weapons/gold-heavy.png', 'images/ammo/shotgun.webp'],
    [115, 'images/weapons/gold-pistol.png', 'images/ammo/light.webp'],
    [116, 'images/weapons/gold-gl.png', 'images/ammo/rocket.webp'],
    [117, 'images/weapons/gold-bolt.png', 'images/ammo/heavy.webp'],
    [118, 'images/weapons/gold-rl.png', 'images/ammo/rocket.webp'],
    [119, 'images/weapons/gold-burst.png', 'images/ammo/medium.webp']
]

const items = [
    [1, "images/items/bandages.webp"],
    [2, "images/items/bigshield.webp"],
    [3, "images/items/boogiebomb.webp"],
    [4, "images/items/bush.webp"],
    [5, "images/items/chugjug.webp"],
    [6, "images/items/chugsplash.webp"],
    [7, "images/items/grappler.webp"],
    [8, "images/items/grenade.webp"],
    [9, "images/items/launchpad.webp"],
    [10, "images/items/medkit.webp"],
    [11, "images/items/rift.webp"],
    [12, "images/items/shockwave.webp"],
    [13, "images/items/smallshield.webp"]
]

function randomLoadout() {
    chest.src = 'images/opened-chest.png';

    //weapons and ammo

    var n = Math.floor(Math.random() * 120);
    var num = 0;
    for (let i = 0; i < 38; i++) {
        if (weaponOdds[i][0] >= n) {
            num = i;
            break;
        }
    }

    weapon.src = weaponOdds[num][1];
    ammo.src = weaponOdds[num][2];

    //items

    n = Math.floor(Math.random() * 13) + 1;
    for (let i = 0; i < 14; i++)
        if (items[i][0] == n){
            item.src = items[n][1];
            break;
        }
    
    //mats
    
    n = Math.floor(Math.random() * 3) + 1;
    if (n == 1){
        mats.src = 'images/mats/brick.webp';
    }
    else if (n == 2) {
        mats.src = 'images/mats/wood.webp';
    }
    else {
        mats.src = 'images/mats/metal.webp';
    }

    setTimeout(() => {chest.src = 'images/closed-chest.png';}, 1000);
}