# Code Storage
Map Setup 6 sancs

    [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    [ "norm", "wall", "norm", "norm", "norm", "bas3", "norm", "norm", "norm", "wall", "norm"],
    [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    [ "norm", "norm", "norm", "bas1", "norm", "bas1", "norm", "bas1", "norm", "norm", "norm"],
    [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    [ "norm", "bas3", "norm", "bas1", "norm", "nest", "norm", "bas1", "norm", "norm", "bas3"],
    [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    [ "norm", "norm", "norm", "bas1", "norm", "bas1", "norm", "bas1", "norm", "norm", "norm"],
    [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    [ "norm", "wall", "norm", "norm", "norm", "bas3", "norm", "norm", "norm", "wall", "norm"],
    [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"]
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
Kronos Code

    exports.Celestialeternal = {
            PARENT: [exports.genericTank],
          LABEL: 'Celestial Eternal',
          NAME: "Kronos",
          SKILL: [0,9,9,9,9,9,9,9,9,9],
          SHAPE: 12,
          VALUE: 100000000,
           COLOR: 6,
               LEVEL: 500,
          SIZE: 95,
    BODY: {
                FOV: 1,
                HEALTH: 800,
                SHIELD: 10,
                SPEED: 0.65,
                DAMAGE:  25,
            },
           FACING_TYPE: 'autospin',
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
               POSITION: [  5.7,     9,      0,     270,     180,   0, ], 
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  5.7,     9,      0,     240,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  5.7,     9,      0,     210,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  5.7,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  5.7,     9,      0,     150,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  5.7,     9,      0,     120,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5.7,     9,      0,     90,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5.7,     9,      0,     60,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  5.7,     9,      0,     30,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],  
                                }, {
                POSITION: [  5.7,     9,      0,     0,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}], 
                        }, {
                POSITION: [  13.6,  0,    0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody12] 
                          }, {
                POSITION: [  10,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody22] 
                            }, {
                POSITION: [  7,    0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody32]  
                            }, {
                POSITION: [  5.7,     9,      0,     -90,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5.7,     9,      0,     -60,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  5.7,     9,      0,     -30,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],  
                               
                  
            }],
        };