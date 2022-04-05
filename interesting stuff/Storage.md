# Code Storage
## unsued or important code
Map Setup 6 sancs

    [ "norm", "norm", "norm", "norm", "norm", "wall", "norm", "norm", "norm", "norm", "norm"],
    [ "norm", "wall", "wall", "wall", "wall", "bas3", "wall", "wall", "wall", "wall", "norm"],
    [ "norm", "wall", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    [ "norm", "wall", "norm", "bas1", "norm", "bas1", "norm", "bas1", "norm", "wall", "norm"],
    [ "norm", "wall", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "wall", "norm"],
    [ "wall", "bas3", "norm", "bas1", "norm", "nest", "norm", "bas1", "norm", "bas3", "wall"],
    [ "norm", "wall", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "wall", "norm"],
    [ "norm", "wall", "norm", "bas1", "norm", "bas1", "norm", "bas1", "norm", "wall", "norm"],
    [ "norm", "wall", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "wall", "norm"],
    [ "norm", "wall", "wall", "wall", "wall", "bas3", "wall", "wall", "wall", "wall", "norm"],
    [ "norm", "norm", "norm", "norm", "norm", "wall", "norm", "norm", "norm", "norm", "norm"]
Map Setup 4 sancs

    [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    [ "norm", "wall", "wall", "wall", "bas3", "bas3", "wall", "wall", "wall", "norm"],
    [ "norm", "wall", "norm", "norm", "norm", "norm", "norm", "norm", "wall", "norm"],
    [ "norm", "wall", "norm", "bas1", "nest", "nest", "bas1", "norm", "wall", "norm"],
    [ "norm", "bas3", "norm", "nest", "norm", "norm", "nest", "norm", "bas3", "norm"],
    [ "norm", "bas3", "norm", "nest", "norm", "norm", "nest", "norm", "bas3", "norm"],
    [ "norm", "wall", "norm", "bas1", "nest", "nest", "bas1", "norm", "wall", "norm"],
    [ "norm", "wall", "norm", "norm", "norm", "norm", "norm", "norm", "wall", "norm"],
    [ "norm", "wall", "wall", "wall", "bas3", "bas3", "wall", "wall", "wall", "norm"],
    [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"]

Boss Spawning Function (Old)

    let spawnBosses = (() => {
        let timer = 0;
        let boss = (() => {
            let i = 0,
                names = [],
                bois = [Class.egg],
                n = 0,
                begin = 'yo some shit is about to move to a lower position',
                arrival = 'Something happened lol u should probably let Neph know this broke',
                loc = 'norm';
            let spawn = () => {
                let spot, m = 0;
                do {
                    spot = room.randomType(loc); m++;
                } while (dirtyCheck(spot, 500) && m<30);
                let o = new Entity(spot);
                    o.define(ran.choose(bois));
                    o.team = -100;
                    o.name = names[i++];
            };
            return {
                prepareToSpawn: (classArray, number, nameClass, typeOfLocation = 'norm') => {
                    n = number;
                    bois = classArray;
                    loc = typeOfLocation;
                    names = ran.chooseBossName(nameClass, number);
                    i = 0;
                    if (n === 1) {
                        begin = 'A visitor is coming.';
                        arrival = names[0] + ' has arrived.'; 
                    } else {
                        begin = 'Visitors are coming.';
                        arrival = '';
                        for (let i=0; i<n-2; i++) arrival += names[i] + ', ';
                        arrival += names[n-2] + ' and ' + names[n-1] + ' have arrived.';
                    }
                },
                spawn: () => {
                    sockets.broadcast(begin);
                    for (let i=0; i<n; i++) {
                        setTimeout(spawn, ran.randomRange(3500, 5000));
                    }
                    // Wrap things up.
                    setTimeout(() => sockets.broadcast(arrival), 5000);
                    util.log('[SPAWN] ' + arrival);
                },
            };
        })();
        return census => {
            if (timer > 70 && ran.dice(160 - timer)) {
                util.log('[SPAWN] Preparing to spawn...' + Class);
                timer = 0;
                let choice = [];
                switch (ran.chooseChance(1, 1, 1, 1)) {
                    case 0: 
                        choice = [[Class.elite_destroyer,Class.elite_sprayer,Class.elite_gunner, Class.elite_gunner,Class.elite_spawner], 1, 'a', 'bas3'];
                        break;
                    case 1: 
                        choice = [[Class.elite_destroyer,Class.elite_sprayer,Class.elite_battleship, Class.elite_gunner,Class.elite_spawner], 2, 'a', 'bas3'];
                        break;
                    case 2: 
                        choice = [[Class.palisade,Class.summoner,Class.skimboss,Class.cyclone, Class.nestkeep], 1, 'a', 'bas3']; 
                        sockets.broadcast('A strange trembling...');
                        break;
                    case 3: 
                        choice = [[Class.palisade,Class.summoner,Class.skimboss,Class.cyclone, Class.nestkeep], 2, 'a', 'bas3']; 
                        sockets.broadcast('A strange trembling...');
                        break; 

                }
                boss.prepareToSpawn(...choice);
                setTimeout(boss.spawn, 300);
                // Set the timeout for the spawn functions
            } else if (!census.miniboss) timer++;
        };
    })();
baka

      /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
     stream2:     [1.1,   0,   1,      1,      1,      0.25,   1,      1.1,   1,      1,      1,      0.01,      1],
     sniper:             [1.35,  1,     0.25,   1,      1,      0.8,    1.1,    1.5,    1.5,    1,      1.5,    0.2,    1.15],