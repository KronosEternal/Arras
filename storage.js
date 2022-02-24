exports.Celestialbody5 = {
  LABEL: "",
  COLOR: 5,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  SHAPE: 7,
  FOV: 1,
 INDEPENDENT: true,
  FACING_TYPE: 'suspin',
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 7, -1.4, 8, 0, 26, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.bulletghost,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, -1.4, 8, 0, 77, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.factory,
          g.poundsusus
        ]),
        TYPE: exports.bulletghost,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, -1.4, 8, 0, 129, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.bulletghost,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, -1.4, 8, 0, 180, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.bulletghost,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, -1.4, 8, 0, 231, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
         TYPE: exports.bulletghost,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, -1.4, 8, 0, 282, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.bulletghost,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, -1.4, 8, 0, 333, 0],
       PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
         TYPE: exports.bulletghost,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
    //
    ///
    ////
    /////
    //////
    ///////
    ////////
    /////////
    //////////
    ///////////
    ////////////
    POSITION: [1, 4, -1.4, 8, 0, 26, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.minion3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
       MAX_CHILDREN: 2,
      }
    },
    {
      POSITION: [1, 4, -1.4, 8, 0, 77, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.factory,
          g.poundsusus
        ]),
        TYPE: exports.minion3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
       MAX_CHILDREN: 2,
      }
    },
    {
      POSITION: [1, 4, -1.4, 8, 0, 129, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.minion3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
       MAX_CHILDREN: 2,
      }
    },
    {
      POSITION: [1, 4, -1.4, 8, 0, 180, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.minion3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
       MAX_CHILDREN: 2,
      }
    },
    {
      POSITION: [1, 4, -1.4, 8, 0, 231, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
         TYPE: exports.minion3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
       MAX_CHILDREN: 2,
      }
    },
    {
      POSITION: [1, 4, -1.4, 8, 0, 282, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.minion3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
       MAX_CHILDREN: 2,
      }
    },
    {
      POSITION: [1, 4, -1.4, 8, 0, 333, 0],
       PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
         TYPE: exports.minion3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
         MAX_CHILDREN: 2,
      }
    }
  ]
};
exports.Celestialbody6 = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    AUTOSPIN: true,
    FACING_TYPE: "autospin",
    COLOR: 5,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [  8,     9,      0,     35,     180,   0, ], 
                    TYPE: [exports.sider2],
                    }, {
                POSITION: [  8,     9,      0,     110,    180,   0, ],
                    TYPE: [exports.sider2],
                     }, {
                POSITION: [  8,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.sider2],
                       }, {
                POSITION: [  8,     9,      0,     252,    180,   0, ],
                    TYPE: [exports.sider2], 
                          }, {
                POSITION: [  8,     9,      0,     325,    180,   0, ],
                    TYPE: [exports.sider2],
            }],
        };
exports.Celestialbody7 = {
  LABEL: "",
  COLOR: 2,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 12,
  SHAPE: 7,
  FOV: 1,
 INDEPENDENT: true,
  FACING_TYPE: 'suspin',
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 7, 1.4, 8, 0, 26, 0],
PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.dronebossx,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 77, 0],
     PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.dronebossx,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 129, 0],
     PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.dronebossx,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 180, 0],
     PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.dronebossx,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 231, 0],
     PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.dronebossx,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 282, 0],
     PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.dronebossx,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 333, 0],
     PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.dronebossx,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.Celestialbody8 = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    AUTOSPIN: true,
    FACING_TYPE: "autospin",
    COLOR: 2,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [  8,     9,      0,     35,     180,   0, ], 
                    TYPE: [exports.sider3],
                    }, {
                POSITION: [  8,     9,      0,     110,    180,   0, ],
                    TYPE: [exports.sider3],
                     }, {
                POSITION: [  8,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.sider3],
                       }, {
                POSITION: [  8,     9,      0,     252,    180,   0, ],
                    TYPE: [exports.sider3], 
                          }, {
                POSITION: [  8,     9,      0,     325,    180,   0, ],
                    TYPE: [exports.sider3],
            }],
        };
exports.Celestialbody9 = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    AUTOSPIN: true,
    FACING_TYPE: "autospin",
    COLOR: 14,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [  8,     9,      0,     35,     180,   0, ], 
                    TYPE: [exports.swarmerpaladin],
                    }, {
                POSITION: [  8,     9,      0,     110,    180,   0, ],
                    TYPE: [exports.swarmerpaladin],
                     }, {
                POSITION: [  8,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.swarmerpaladin],
                       }, {
                POSITION: [  8,     9,      0,     252,    180,   0, ],
                    TYPE: [exports.swarmerpaladin], 
                          }, {
                POSITION: [  8,     9,      0,     325,    180,   0, ],
                    TYPE: [exports.swarmerpaladin],
            }],
        };
exports.Celestialbody10 = {
  LABEL: "",
  COLOR: 14,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 14,
  SHAPE: 7,
  FOV: 1,
 INDEPENDENT: true,
  FACING_TYPE: 'suspin',
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 7, 1.4, 8, 0, 26, 0],
PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.droneboss32,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 77, 0],
     PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.droneboss32,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 129, 0],
     PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.droneboss32,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 180, 0],
     PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.droneboss32,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 231, 0],
     PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.droneboss32,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 282, 0],
     PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.droneboss32,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 333, 0],
     PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.droneboss32,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
      }
    }
  ]
};